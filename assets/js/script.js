
function playAgain() {
    localStorage.setItem('visited', 'true');
    localStorage.removeItem("sigil_rl");
    alert('Cipher reset. Begin again...');
    location.reload();
}

function skipCipher() {
    localStorage.setItem('visited', 'true');
    alert('Key appears. Proceed to site.');
}

function triggerPulse(callback) {
    const pulse = document.getElementById("pulse-line");
    pulse.style.opacity = 1;
    pulse.style.transition = "width 0.4s ease-out, opacity 0.6s ease-out";
    pulse.style.width = "100%";
    setTimeout(() => {
        pulse.style.opacity = 0;
        pulse.style.width = "0%";
        if (callback) callback();
    }, 600);
}

function activateRLSigil() {
    const icon = document.getElementById("sigil-icon");
    const node1 = document.getElementById("ghost-node-1");

    if (!localStorage.getItem("sigil_rl")) {
        icon.innerText = "▲";
        icon.style.color = "#ff3366";
        localStorage.setItem("sigil_rl", "true");
        console.log("RL sigil activated.");

        triggerPulse(() => {
            node1.classList.add("active");
        });
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

    // no auto-activation, user must re-hover to retrigger
};
