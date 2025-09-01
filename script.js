document.addEventListener('DOMContentLoaded', () => {
  const rlButton = document.getElementById('rl-btn');
  const leftEye = document.getElementById('left-eye');
  const rightEye = document.getElementById('right-eye');
  const terminal = document.getElementById('terminal');

  rlButton.addEventListener('click', () => {
    // Activate eyes
    leftEye.classList.add('glow');
    rightEye.classList.add('glow');

    // Fade out after 1.5s
    setTimeout(() => {
      leftEye.classList.remove('glow');
      rightEye.classList.remove('glow');
      leftEye.classList.add('fade-out');
      rightEye.classList.add('fade-out');
    }, 1500);

    // Show terminal after 2.5s
    setTimeout(() => {
      terminal.style.display = 'block';
      terminal.style.opacity = 1;
    }, 2500);
  });
});
