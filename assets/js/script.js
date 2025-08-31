const nodes = document.querySelectorAll('.node');
const button = document.getElementById('activate');


let current = 0;


button.addEventListener('click', () => {
if (current < nodes.length) {
nodes[current].classList.add('active');
current++;
} else {
button.innerText = 'All Nodes Activated';
button.disabled = true;
}
});
