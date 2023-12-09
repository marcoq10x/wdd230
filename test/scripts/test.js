const card = document.querySelector('.portal-card');
const tl = gsap.timeline({ paused: true });

// Initialize particles.js
particlesJS('particles-canvas', {
  particles: {
    color: ['#00ff00', '#ff0000', '#0000ff'],
    size: 2,
    density: 100,
    speed: 0.5
  }
});

const portalOpenAudio = document.getElementById('portal-open');
const backgroundMusicAudio = document.getElementById('background-music');

// GSAP animations
tl.to('.portal-card', { duration: 0.5, boxShadow: '0 0 40px rgba(0, 0, 0, 1)' });
tl.to('.card-front', { duration: 1, scale: 1.2, borderRadius: '50%', ease: "power2.out" });
tl.to('.card-back', { duration: 1, scale: 1.2, borderRadius: '50%', ease: "power2.out" });

// Combined event listeners
card.addEventListener('mouseenter', () => {
  tl.play();
  portalOpenAudio.play();
  backgroundMusicAudio.play();
});

card.addEventListener('mouseleave', () => {
  tl.reverse();
  backgroundMusicAudio.pause();
  // Note: particles.js doesn't have a method to clear particles, you might want to adjust this part
});

