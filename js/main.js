(function(){
  const year=document.getElementById('year');
  if(year) year.textContent=String(new Date().getFullYear());

  const current=(window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.site-nav a').forEach(function(link){
    const href=(link.getAttribute('href') || '').toLowerCase();
    if(href===current){
      link.classList.add('active');
      link.setAttribute('aria-current','page');
    }
  });
})();
