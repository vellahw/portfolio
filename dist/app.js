import {work, projects} from './data.js';
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tags = items => `<div class="tags">${items.map(t => `<span>${escape(t)}</span>`).join('')}</div>`;
const link = (href, label) => `<a class="text-link" href="${escape(href)}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`;
document.querySelector('#work-list').innerHTML = work.map((w, i) => `<article class="work-card"><div class="work-top"><span>[${String(i+1).padStart(2,'0')}]</span><span>${i === 0 ? 'SERVICE DEVELOPMENT' : 'WEBSITE RENEWAL'}</span></div><div class="work-media">${i === 0 ? `<img src="assets/work-${w.src}.png" alt="${escape(w.name)} 웹사이트" loading="lazy">` : `<video controls muted playsinline preload="metadata" aria-label="${escape(w.name)} 웹사이트 작업 영상"><source src="assets/work-${w.src}.mp4" type="video/mp4"></video>`}</div><div class="work-copy"><h3>${escape(w.name)}</h3><p class="what">${escape(w.what || '홈페이지 전체 리뉴얼')}</p>${w.more ? (i === 0 ? `<details open><summary>담당 업무</summary><p>${escape(w.more)}</p></details>` : `<p class="work-description">${escape(w.more)}</p>`) : ''}${tags(w.tech)}${w.href ? link(w.href, '사이트 바로가기') : ''}</div></article>`).join('');
document.querySelector('#project-list').innerHTML = projects.map((p,i) => `<article class="project-card"><div class="project-visual"><img src="assets/project-${p.src}.png" alt="${escape(p.name)} 프로젝트 화면" loading="lazy"><button class="gallery-open" data-project="${i}">프로젝트 둘러보기 <span aria-hidden="true">↗</span></button></div><div class="project-copy"><div class="project-meta"><span>[0${i+1}] / TEAM PROJECT</span><span>${p.year}</span></div><h3>${escape(p.name)}</h3><p class="what">${escape(p.what)}</p><ul>${p.des.map(d=>`<li>${escape(d)}</li>`).join('')}</ul><div class="project-roles"><h4>맡은 역할</h4><ul>${p.role.map(r=>`<li>${escape(r)}</li>`).join('')}</ul></div>${tags(p.tech)}${link(p.href,'GitHub 저장소')}</div></article>`).join('');
const gallery = document.querySelector('#gallery');
let selected, slide = 1;
function showSlide() {
  const image = document.querySelector('#gallery-image');
  image.src = `assets/project-${selected.src}${slide}.png`;
  image.alt = `${selected.name} 상세 화면 ${slide}`;
  document.querySelector('#gallery-count').textContent = `${String(slide).padStart(2,'0')} / ${String(selected.slideCount).padStart(2,'0')}`;
  document.querySelector('#previous-slide').disabled = slide === 1;
  document.querySelector('#next-slide').disabled = slide === selected.slideCount;
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  selected = projects[Number(button.dataset.project)]; slide = 1;
  document.querySelector('#gallery-title').textContent = selected.name;
  showSlide(); gallery.showModal();
}));
document.querySelector('#close-gallery').addEventListener('click',()=>gallery.close());
function moveSlide(delta) { slide = Math.max(1, Math.min(selected.slideCount,slide+delta)); showSlide(); }
document.querySelector('#previous-slide').addEventListener('click',()=>moveSlide(-1));
document.querySelector('#next-slide').addEventListener('click',()=>moveSlide(1));
gallery.addEventListener('keydown', event => { if(event.key === 'ArrowLeft') moveSlide(-1); if(event.key === 'ArrowRight') moveSlide(1); });
gallery.addEventListener('click', event => { if(event.target === gallery) { const r=gallery.getBoundingClientRect(); if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom) gallery.close(); } });


await import('./motion.js');

