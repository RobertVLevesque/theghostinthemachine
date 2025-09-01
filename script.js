document.getElementById('rl-button').addEventListener('click', () => {
  // Glow eyes
  const leftEye = document.getElementById('left-eye');
  const rightEye = document.getElementById('right-eye');
  leftEye.style.opacity = '1';
  rightEye.style.opacity = '1';

  setTimeout(() => {
    leftEye.style.opacity = '0';
    rightEye.style.opacity = '0';
  }, 1000);

  // Flash all nodes
  const dots = [1, 2, 3].map(n => document.getElementById(`dot${n}`));
  dots.forEach(dot => dot.classList.add('active'));
  setTimeout(() => {
    dots.forEach(dot => dot.classList.remove('active'));
    document.getElementById('dot1').classList.add('active'); // light first node only
  }, 1000);

  // Reveal triangle after flicker
  setTimeout(() => {
    const triangle = document.getElementById('triangle');
    triangle.classList.remove('hidden');
    triangle.style.opacity = '1';
  }, 1500);

  // Show console message
  setTimeout(() => {
    const consoleBox = document.getElementById('console');
    consoleBox.classList.remove('hidden');
  }, 2500);
});
