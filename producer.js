// Lífsins Vatn — shared producer-page behaviour
function setLang(l){
  document.body.classList.toggle('en', l==='en');
  var is=document.getElementById('btnIs'), en=document.getElementById('btnEn');
  if(is) is.classList.toggle('active', l==='is');
  if(en) en.classList.toggle('active', l==='en');
  try{ localStorage.setItem('lv_lang', l); }catch(e){}
}
// restore language choice from the homepage / previous visit
(function(){
  try{ var saved=localStorage.getItem('lv_lang'); if(saved==='en') setLang('en'); }catch(e){}
})();
// nav shrink on scroll
var nav=document.querySelector('.nav');
function onScroll(){ if(nav) nav.classList.toggle('scrolled', window.scrollY>10); }
window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
// staggered reveal delays inside grids
document.querySelectorAll('[data-stagger]').forEach(function(group){
  group.querySelectorAll('.reveal').forEach(function(el,i){ el.style.transitionDelay=(i*110)+'ms'; });
});
// scroll reveal
var obs=new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
},{threshold:0.12, rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('.reveal').forEach(function(el){ obs.observe(el); });
