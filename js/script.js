document.addEventListener('DOMContentLoaded', () => {
  // ano no footer (se existir)
  const ano = document.getElementById('ano');
  if(ano) ano.textContent = new Date().getFullYear();

  // theme toggle
  const themeToggle = document.querySelector('.toggle-theme');
  const applyTheme = (dark) => {
    if(dark) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
    localStorage.setItem('theme-dark', dark ? '1' : '0');
  };
  // init
  const saved = localStorage.getItem('theme-dark') === '1';
  applyTheme(saved);
  if(themeToggle){
    themeToggle.addEventListener('click', () => applyTheme(!document.body.classList.contains('dark')));
  }

  // nav toggle (hamburger)
  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.menu');
  if(navToggle && menu){
    navToggle.addEventListener('click', () => {
      menu.classList.toggle('open'); // CSS mostra/esconde via media query
      if(menu.classList.contains('open')) navToggle.setAttribute('aria-label','Fechar menu');
      else navToggle.setAttribute('aria-label','Abrir menu');
    });
  }

  // smooth scroll for anchor links (works even if menu is hidden)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el){
          el.scrollIntoView({behavior:'smooth', block:'start'});
        }
        // close mobile menu after click
        if(menu && menu.classList.contains('open')) menu.classList.remove('open');
      }
    });
  });
});
