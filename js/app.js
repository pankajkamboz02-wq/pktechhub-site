// mobile menu toggle + smooth scroll
const burger = document.querySelector('.burger');
const panel  = document.querySelector('.mobile-menu');
burger?.addEventListener('click', () => {
  panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
});

// Smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if(id.length > 1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior:'smooth', block:'start' });
      if (panel) panel.style.display = 'none';
    }
  });
});
