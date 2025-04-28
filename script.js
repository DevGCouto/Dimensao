
// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  });
  
  // ParticlesJS
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js carregado');
  });
  
  // Inicializar AOS
  AOS.init({
    duration: 1200,
  });