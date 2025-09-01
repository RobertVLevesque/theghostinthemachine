document.addEventListener('DOMContentLoaded', () => {
  const rlButton = document.getElementById('rl-btn');
  const eyes = document.querySelectorAll('.eye');
  const terminal = document.getElementById('terminal');

  rlButton.addEventListener('click', () => {
    // Glow red
    eyes.forEach(eye => {
      eye.classList.add('glow');
    });

    // Wait 1.5s, then fade out
    setTimeout(() => {
      eyes.forEach(eye => {
        eye.classList.remove('glow');
        eye.classList.add('fade-out');
      });
    }, 1500);

    // Show terminal after eyes vanish
    setTimeout(() => {
      terminal.style.display = 'block';
      terminal.style.opacity = 1;
    }, 2500);
  });
});
