
function playAgain() {
    localStorage.setItem('visited', 'true');
    alert('Cipher reset. Begin again...');
    // Trigger ghost animation and reset cipher here
}

function skipCipher() {
    localStorage.setItem('visited', 'true');
    alert('Key appears. Proceed to site.');
    // Redirect or unlock full site here
}

window.onload = function() {
    if (!localStorage.getItem('visited')) {
        document.getElementById('welcome-line').innerText = "[SYSTEM] Initial access. Cipher loading...";
        document.getElementById('choices').style.display = "none";
        setTimeout(() => {
            document.getElementById('welcome-line').innerText = "[SYSTEM] Game Over. Would you like to play again?";
            document.getElementById('choices').style.display = "block";
        }, 2000);
    }
};
