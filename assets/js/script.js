
function flickerNodes() {
  const nodes = document.querySelectorAll('.ghost-node');
  let count = 0;
  const flicker = setInterval(() => {
    nodes.forEach((node, index) => {
      node.style.opacity = (node.style.opacity === "1") ? "0.2" : "1";
    });
    count++;
    if (count > 5) {
      clearInterval(flicker);
      nodes.forEach(n => n.style.opacity = "0"); // Hide again
      // Trigger real activation
      triggerTriangleOne();
    }
  }, 200);
}

function activateRLSigil() {
  flickerNodes();
}

function triggerTriangleOne() {
  const node = document.getElementById("ghost-node-1");
  node.classList.add("active");
  document.getElementById("triangle-1").classList.add("reveal");
}
function triggerTriangleTwo() {
  const node = document.getElementById("ghost-node-3");
  node.classList.add("active");
  document.getElementById("triangle-2").classList.add("reveal");
}
function triggerTriangleThree() {
  const node = document.getElementById("ghost-node-2");
  node.classList.add("active");
  document.getElementById("triangle-3").classList.add("reveal");
}
function playAgain() {
  location.reload();
}
function skipCipher() {
  alert("Key revealed.");
}
