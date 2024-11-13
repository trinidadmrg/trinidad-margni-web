// Add the 'loaded' class when the page is fully loaded
window.addEventListener('load', function () {
    document.documentElement.classList.add('loaded');
    document.body.classList.add('loaded');
  });
  
// Ensure the page transitions smoothly when navigating away
  window.addEventListener('beforeunload', function () {
    document.documentElement.classList.remove('loaded');
    document.body.classList.remove('loaded');
  });

// Toggle navbar

function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
}