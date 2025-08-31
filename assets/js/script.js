
const rlSigal = document.getElementById("rl-sigal");
const nodes = [document.getElementById("node-1"), document.getElementById("node-2"), document.getElementById("node-3")];
const triangles = [document.getElementById("triangle-1"), document.getElementById("triangle-2"), document.getElementById("triangle-3")];

rlSigal.addEventListener("mouseenter", () => {
  nodes.forEach((node, i) => {
    setTimeout(() => {
      node.style.opacity = 1;
      setTimeout(() => node.style.opacity = 0.2, 300);
    }, i * 200);
  });
});

rlSigal.addEventListener("click", () => {
  triangles[0].classList.add("revealed");
});

triangles[0].addEventListener("click", () => {
  nodes[0].classList.add("activated");
});
