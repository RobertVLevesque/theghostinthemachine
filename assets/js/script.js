
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
    const t1 = document.getElementById("triangle-1");
    const t2 = document.getElementById("triangle-2");
    const t3 = document.getElementById("triangle-3");
    if (!localStorage.getItem("sigil_rl")) {
        localStorage.setItem("sigil_rl", "true");
        t1.style.opacity = 1;
        t2.style.opacity = 1;
        t3.style.opacity = 1;
    }
}
function triggerTriangleOne() {
    const t = document.getElementById("triangle-1");
    const s = document.getElementById("surge-line-1");
    const n = document.getElementById("ghost-node-1");
    if (!localStorage.getItem("triangle_1")) {
        t.classList.add("hacker");
        s.style.opacity = 1;
        s.style.height = "100px";
        setTimeout(() => { n.classList.add("active"); checkReveal(); }, 400);
        localStorage.setItem("triangle_1", "true");
    }
}
function triggerTriangleTwo() {
    const t = document.getElementById("triangle-2");
    const s = document.getElementById("surge-line-2");
    const n = document.getElementById("ghost-node-3");
    if (!localStorage.getItem("triangle_2")) {
        t.classList.add("hacker");
        s.style.opacity = 1;
        s.style.height = "150px";
        setTimeout(() => { n.classList.add("active"); checkReveal(); }, 400);
        localStorage.setItem("triangle_2", "true");
    }
}
function triggerTriangleThree() {
    const t = document.getElementById("triangle-3");
    const s = document.getElementById("surge-line-3");
    const n = document.getElementById("ghost-node-2");
    if (!localStorage.getItem("triangle_3")) {
        t.classList.add("hacker");
        s.style.opacity = 1;
        s.style.height = "80px";
        setTimeout(() => { n.classList.add("active"); checkReveal(); }, 400);
        localStorage.setItem("triangle_3", "true");
    }
}
function checkReveal() {
    if (localStorage.getItem("triangle_1") && localStorage.getItem("triangle_2") && localStorage.getItem("triangle_3")) {
        const ghost = document.getElementById("ghost");
        ghost.classList.add("glow");
    }
}
window.onload = function () {
    const t1 = document.getElementById("triangle-1");
    const t2 = document.getElementById("triangle-2");
    const t3 = document.getElementById("triangle-3");
    const n1 = document.getElementById("ghost-node-1");
    const n2 = document.getElementById("ghost-node-2");
    const n3 = document.getElementById("ghost-node-3");

    if (localStorage.getItem("triangle_1")) {
        t1.classList.add("hacker");
        n1.classList.add("active");
        t1.style.opacity = 1;
    }
    if (localStorage.getItem("triangle_2")) {
        t2.classList.add("hacker");
        n3.classList.add("active");
        t2.style.opacity = 1;
    }
    if (localStorage.getItem("triangle_3")) {
        t3.classList.add("hacker");
        n2.classList.add("active");
        t3.style.opacity = 1;
    }

    checkReveal();
};

// ghost image reveal handled via .glow class applied to ghost container
