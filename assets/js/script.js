
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
function activateRLSigil() {
    if (!localStorage.getItem("sigil_rl")) {
        localStorage.setItem("sigil_rl", "true");
        console.log("RL activated");
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
