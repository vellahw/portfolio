import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {work,projects} from './dist/data.js';
import vm from 'node:vm';
assert.equal(work.length,9);assert.equal(projects.length,3);
const assets=['profile.png',...work.map(w=>`work-${w.src}.${w.src==='xesnara'?'png':'mp4'}`),...projects.flatMap(p=>[`project-${p.src}.png`,...Array.from({length:p.slideCount},(_,i)=>`project-${p.src}${i+1}.png`)])];
for(const asset of assets) assert.ok((await stat(new URL(`./dist/assets/${asset}`,import.meta.url))).size>0,asset);
const html=await readFile(new URL('./dist/index.html',import.meta.url),'utf8');
for(const id of ['profile','experience','projects','contact','gallery']) assert.ok(html.includes(`id="${id}"`),id);
assert.equal((html.match(/class="blue-mark"/g)||[]).length,3);assert.ok(!html.includes('class="blue-mark" aria-hidden="true">✳'));
for(const p of projects){assert.ok(p.slideCount>0);assert.ok(p.href.startsWith('https://github.com/'));}
console.log(`OK: 9 works, 3 projects, ${assets.length} assets, navigation and gallery data.`);

const motionSource = await readFile(new URL('./dist/motion.js',import.meta.url),'utf8');
const properties = new Map(), events = {}, pending = [], observed = [], animations = [];
const preference = {matches:false, addEventListener:(_,handler)=>events.preference=handler};
const style = {setProperty:(key,value)=>properties.set(key,value),removeProperty:key=>properties.delete(key)};
const element = {style,matches:()=>false,animate:()=>animations.push('reveal')};
let onIntersect;
const context = {
  document:{documentElement:{style,scrollHeight:1500},querySelector:()=>element,querySelectorAll:selector=>selector==='.eyebrow, #hero-title'?[]:[element],getAnimations:()=>[{cancel:()=>animations.push('cancel')}]},
  matchMedia:()=>preference,innerHeight:500,scrollY:2000,
  requestAnimationFrame:handler=>(pending.push(handler),pending.length),cancelAnimationFrame:()=>{},
  addEventListener:(name,handler)=>events[name]=handler,
  IntersectionObserver:class {constructor(handler){onIntersect=handler}observe(target){observed.push(target)}unobserve(target){observed.splice(observed.indexOf(target),1)}}
};
vm.runInNewContext(motionSource,context);
events.scroll();events.scroll();assert.equal(pending.length,1,'Scroll updates must share one frame');
pending.shift()();assert.equal(properties.get('--scroll-progress'),1);assert.equal(properties.get('--hero-shift'),'-48px');
onIntersect([{target:element,isIntersecting:false}]);assert.equal(observed.length,1);
onIntersect([{target:element,isIntersecting:true}]);assert.equal(observed.length,0);
preference.matches=true;events.preference();assert.equal(properties.size,0);assert.ok(animations.includes('cancel'));
const count=animations.length;vm.runInNewContext(motionSource,{...context});assert.equal(animations.length,count,'Reduced motion must skip entrance animations');
console.log('OK: scroll frame batching, motion bounds, reveal once, reduced motion.');

const textNodes = [{textContent:'Hi'}, {textContent:' there'}], typed = [], labels = {};
for(const node of textNodes) node.replaceWith=(...spans)=>typed.push(...spans);
let position=0;
const typingDocument = {...context.document,
  createTreeWalker:()=>({nextNode(){this.currentNode=textNodes[position++];return !!this.currentNode}}),
  createElement:()=>({setAttribute(){},animate(_,options){this.delay=options.delay}})
};
const typingContext = vm.createContext({...context,document:typingDocument,NodeFilter:{SHOW_TEXT:4}});
vm.runInContext(motionSource,typingContext);
typingContext.title={innerText:'Hi\n there',setAttribute:(name,value)=>labels[name]=value};
assert.equal(vm.runInContext('typeTitle(title)',typingContext),360);
assert.equal(typed.map(span=>span.textContent).join(''),'Hi there');
assert.equal(typed[0].delay,0);assert.equal(typed.at(-1).delay,315);assert.equal(labels['aria-label'],'Hi there');
const appSource=await readFile(new URL('./dist/app.js',import.meta.url),'utf8');
assert.equal((appSource.match(/<details/g)||[]).length,1);assert.ok(appSource.includes('class="project-roles"'));
console.log('OK: sequential typing, accessible title, only first work retains details.');

const heroDelays=[];
const heroTitles=['eyebrow','hero title'].map(text=>({innerText:text,setAttribute(){},text}));
const sequenceDocument={...context.document,
  querySelectorAll:selector=>selector==='.eyebrow, #hero-title'?heroTitles:[{...element,animate:(_,options)=>heroDelays.push(options.delay)}],
  createTreeWalker:title=>({nextNode(){if(this.currentNode)return false;this.currentNode={textContent:title.text,replaceWith(){}};return true}}),
  createElement:()=>({setAttribute(){},animate(){}})
};
preference.matches=false;
vm.runInNewContext(motionSource,{...context,document:sequenceDocument,NodeFilter:{SHOW_TEXT:4}});
assert.ok(heroDelays.every(delay=>delay>=heroTitles[1].text.length*45+120),'Hero details must follow both typing animations');
assert.ok(!html.includes('class="hero-link"'));assert.equal((html.match(/class="ticker-group"/g)||[]).length,2);
console.log('OK: hero typing first, delayed details, seamless ticker groups.');
const loader = {hidden:true,remove(){this.removed=true}}, loaderEvents = {}, percent = {}, imageEvents = {};
let closeLoader;
vm.runInNewContext(html.match(/<script>([\s\S]*?)<\/script>/)[1], {
  document:{getElementById:id=>id==='page-loader'?loader:percent,
    querySelectorAll:()=>[{complete:true},{complete:false,addEventListener:(name,handler)=>imageEvents[name]=handler}],
    addEventListener:(name,handler)=>loaderEvents[name]=handler},
  window:{addEventListener:(name,handler,options)=>{assert.ok(options.once);loaderEvents[name]=handler}},
  setTimeout:handler=>closeLoader=handler
});
assert.equal(loader.hidden,false);
loaderEvents.DOMContentLoaded();assert.equal(percent.textContent,'48%');
imageEvents.error();assert.equal(percent.textContent,'95%');
loaderEvents.load();assert.equal(percent.textContent,'100%');assert.ok(!loader.removed);
closeLoader();assert.ok(loader.removed);
console.log('OK: cached/failed image progress, 100% on load, loading screen dismissal.');
