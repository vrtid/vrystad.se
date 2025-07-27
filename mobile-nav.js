document.addEventListener('DOMContentLoaded', () => {
  const btn  = document.getElementById('nav-toggle');
  const menu = document.getElementById('site-nav');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      console.log('🟢 togglar hidden');
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex');
    });
  }
});
