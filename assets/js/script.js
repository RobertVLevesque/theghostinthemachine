
function playAgain() {
    localStorage.clear();
    alert('Cipher reset. Begin again...');
    location.reload();
}
function skipCipher() {
    localStorage.setItem('visited', 'true');
    alert('Key appears. Proceed to site.');
}
function activateRLSigil() {
    const triangle = document.getElementById("triangle-1");
    if (!localStorage.getItem("sigil_rl")) {
        localStorage.setItem("sigil_rl", "true");
        triangle.style.opacity = 1;
    }
}
function triggerTriangleOne() {
    const triangle = document.getElementById("triangle-1");
    const surge = document.getElementById("surge-line-1");
    const node = document.getElementById("ghost-node-1");

    if (!localStorage.getItem("triangle_1")) {
        triangle.classList.add("hacker");
        surge.style.opacity = 1;
        surge.style.height = "100px";
        setTimeout(() => {
            node.classList.add("active");
        }, 400);
        localStorage.setItem("triangle_1", "true");
    }
}
window.onload = function () {
    if (localStorage.getItem("triangle_1")) {
        document.getElementById("triangle-1").classList.add("hacker");
        document.getElementById("ghost-node-1").classList.add("active");
        document.getElementById("triangle-1").style.opacity = 1;
    }
};
