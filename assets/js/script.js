
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
    if (!localStorage.getItem("sigil_rl")) {
        icon.innerText = "▲";
        icon.style.color = "#ff3366";
        localStorage.setItem("sigil_rl", "true");
        console.log("RL sigil activated.");
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
};
