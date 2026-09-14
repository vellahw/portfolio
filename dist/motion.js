const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const root = document.documentElement;
const hero = document.querySelector('.hero');
let frame = 0;
function updateScroll() {
  frame = 0;
  if (motionPreference.matches) return;
  const distance = root.scrollHeight - innerHeight;
  root.style.setProperty('--scroll-progress', distance > 0 ? Math.max(0, Math.min(1, scrollY / distance)) : 0);
  hero.style.setProperty('--hero-shift', `${-Math.min(Math.max(scrollY, 0) * 0.08, 48)}px`);
}
function queueScroll() {
  if (!frame && !motionPreference.matches) frame = requestAnimationFrame(updateScroll);
}
if (!motionPreference.matches) {
  const typingDuration = Math.max(0, ...Array.from(document.querySelectorAll('.eyebrow, #hero-title'), typeTitle));
  document.querySelectorAll('.hero-meta, .intro, .portrait, .hero-bottom').forEach((element, index) => {
    element.animate([{opacity:0, translate:'0 24px'}, {opacity:1, translate:'0 0'}], {duration:800, delay:typingDuration + 120 + index * 100, easing:'cubic-bezier(.22,1,.36,1)', fill:'backwards'});
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(({target, isIntersecting}) => {
      if (!isIntersecting) return;
      if (!motionPreference.matches) {
        if (target.matches('#profile-title, #experience-title, #projects-title')) typeTitle(target);
        else target.animate([{opacity:0, translate:'0 36px'}, {opacity:1, translate:'0 0'}], {duration:850, easing:'cubic-bezier(.22,1,.36,1)'});
      }
      observer.unobserve(target);
    });
  }, {threshold:0, rootMargin:'0px 0px -48px 0px'});
  document.querySelectorAll('#profile-title, #experience-title, #projects-title, .about-copy, .resume, .work-card, .project-card, .contact h2, .email, .contact-links').forEach(element => observer.observe(element));
}
function typeTitle(title) {
  title.setAttribute('aria-label', title.innerText.replace(/\s+/g, ' ').trim());
  const walker = document.createTreeWalker(title, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  let index = 0;
  nodes.forEach(node => {
    const characters = Array.from(node.textContent, character => {
      const span = document.createElement('span');
      span.textContent = character;
      span.setAttribute('aria-hidden', 'true');
      span.animate([{opacity:0}, {opacity:1}], {duration:1, delay:index++ * 45, fill:'backwards', easing:'steps(1, end)'});
      return span;
    });
    node.replaceWith(...characters);
  });
  return index * 45;
}
addEventListener('scroll', queueScroll, {passive:true});
addEventListener('resize', queueScroll);
motionPreference.addEventListener('change', () => {
  if (motionPreference.matches) {
    cancelAnimationFrame(frame); frame = 0;
    document.getAnimations().forEach(animation => animation.cancel());
    root.style.removeProperty('--scroll-progress');
    hero.style.removeProperty('--hero-shift');
  } else queueScroll();
});
queueScroll();
