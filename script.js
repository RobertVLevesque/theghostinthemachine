
document.addEventListener("DOMContentLoaded", () => {
  const rlButton = document.getElementById("rl-button");
  const triangleButton = document.getElementById("triangle-button");
  const nodes = document.querySelectorAll(".node");

  rlButton.addEventListener("mouseenter", () => {
    nodes.forEach(node => node.classList.add("flicker"));
  });

  rlButton.addEventListener("mouseleave", () => {
    nodes.forEach(node => node.classList.remove("flicker"));
  });

  rlButton.addEventListener("click", () => {
    triangleButton.classList.remove("hidden");
  });

  triangleButton.addEventListener("click", () => {
    nodes.forEach(node => node.classList.remove("flicker", "active"));
    nodes[0].classList.add("active");
  });
});
