
function activateRLSigil() {
  document.getElementById("sigil-rl").classList.add("active");
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
