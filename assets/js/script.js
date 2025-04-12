
function playAgain() {
    localStorage.setItem('visited', 'true');
    alert('Cipher reset. Begin again...');
}

function skipCipher() {
    localStorage.setItem('visited', 'true');
    alert('Key appears. Proceed to site.');
}

function activateRLSigil() {
    const icon = document.getElementById("sigil-icon");
    const pulse = document.getElementById("pulse-line");
    const node1 = document.getElementById("ghost-node-1");

    if (!localStorage.getItem("sigil_rl")) {
        icon.innerText = "▲";
        icon.style.color = "#ff3366";
        localStorage.setItem("sigil_rl", "true");
        console.log("RL sigil activated.");

        // Trigger pulse animation
        pulse.style.opacity = 1;
        pulse.style.transition = "transform 0.6s ease-out";
        pulse.style.transform = "scaleX(1)";
        setTimeout(() => {
            pulse.style.opacity = 0;
            pulse.style.transform = "scaleX(0)";
        }, 800);

        // Reveal node
        setTimeout(() => {
            node1.classList.add("active");
        }, 600);
    }
}

window.onload = function () {
    if (!localStorage.getItem('visited')) {
        document.getElementById('welcome-line').innerText = "[SYSTEM] Initial access. Cipher loading...";
        document.getElementById('choices').style.display = "none";
        setTimeout(() => {
            document.getElementById('welcome-line').innerText = "[SYSTEM] Game Over. Would you like to play again?";
            document.getElementById('choices').style.display = "block";
        }, 2000);
    }

    if (localStorage.getItem("sigil_rl")) {
        document.getElementById("ghost-node-1").classList.add("active");
    }
};
