
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
    const triangle1 = document.getElementById("triangle-1");
    const triangle2 = document.getElementById("triangle-2");
    if (!localStorage.getItem("sigil_rl")) {
        localStorage.setItem("sigil_rl", "true");
        triangle1.style.opacity = 1;
        triangle2.style.opacity = 1;
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
function triggerTriangleTwo() {
    const triangle = document.getElementById("triangle-2");
    const surge = document.getElementById("surge-line-2");
    const node = document.getElementById("ghost-node-3");

    if (!localStorage.getItem("triangle_2")) {
        triangle.classList.add("hacker");
        surge.style.opacity = 1;
        surge.style.height = "150px";
        setTimeout(() => {
            node.classList.add("active");
        }, 400);
        localStorage.setItem("triangle_2", "true");
    }
}
window.onload = function () {
    if (localStorage.getItem("triangle_1")) {
        const t1 = document.getElementById("triangle-1");
        const n1 = document.getElementById("ghost-node-1");
        t1.classList.add("hacker");
        n1.classList.add("active");
        t1.style.opacity = 1;
    }
    if (localStorage.getItem("triangle_2")) {
        const t2 = document.getElementById("triangle-2");
        const n3 = document.getElementById("ghost-node-3");
        t2.classList.add("hacker");
        n3.classList.add("active");
        t2.style.opacity = 1;
    }
};
