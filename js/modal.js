var modal = document.getElementById('modal');
var btn = document.getElementById('clickModal');
var close = document.getElementsByClassName('close')[0];

btn.addEventListener('click', openModal);
/* close.addEventListener('click', closeModal); */
window.addEventListener('click', wClose);

function openModal() {
    var text = document.getElementById('copy').innerHTML;
    navigator.clipboard.writeText(text);
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
}
function wClose(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}