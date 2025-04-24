
function activateRLSigil() {
    document.getElementById("triangle-1").style.opacity = 1;
    document.getElementById("triangle-2").style.opacity = 1;
    document.getElementById("triangle-3").style.opacity = 1;
}

function triggerTriangleOne() {
    const t = document.getElementById("triangle-1");
    const n = document.getElementById("ghost-node-1");
    if (!t.classList.contains("hacker")) {
        t.classList.add("hacker");
        n.classList.add("active");
    }
}
function triggerTriangleTwo() {
    const t = document.getElementById("triangle-2");
    const n = document.getElementById("ghost-node-3");
    if (!t.classList.contains("hacker")) {
        t.classList.add("hacker");
        n.classList.add("active");
    }
}
function triggerTriangleThree() {
    const t = document.getElementById("triangle-3");
    const n = document.getElementById("ghost-node-2");
    if (!t.classList.contains("hacker")) {
        t.classList.add("hacker");
        n.classList.add("active");
    }
}
function playAgain() {
    location.reload();
}
function skipCipher() {
    alert("Key revealed.");
}
