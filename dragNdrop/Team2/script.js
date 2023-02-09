// Функция startDrag
function startDrag(event) {
    const elem = event.target.closest('div');
    elem.classList.add('selected');
    event.dataTransfer.setData('html', elem.innerHTML);
}
// Функция endDrag
function endDrag(event) {
    const selectedElem = document.querySelector('.selected');
    selectedElem.classList.remove('selected');
}
// Функция enterDrag
function enterDrag(event) {
    const elem = event.target.closest('div');
    const selectElem = document.querySelector('.selected')
    if (elem != selectElem) {
        elem.classList.add('drop');
    }
}
// Функция leaveDrag
function leaveDrag(event) {
    const elem = event.target.closest('div');
    if (document.elementFromPoint(event.clientX, event.clientY).closest('div').classList.contains('block')) {
        return;
    }
    elem.classList.add('drop');
}
// Функция overDrag
function overDrag(event) {
    event.preventDefault();
}
// Функция dropDrag
function dropDrag(event) {
    const dropElem = document.querySelector('.drop');
    const selectedElem = document.querySelector('.selected');
    selectedElem.innerHTML = dropElem.innerHTML;
    dropElem.innerHTML = event.dataTransfer.getData('html');
} 
const divNumbers = document.querySelectorAll('.autor');
for ( let div of divNumbers ) {
    div.addEventListener('dragstart', startDrag);
    div.addEventListener('dragend', endDrag);
    div.addEventListener('dragenter', enterDrag);
    div.addEventListener('dragleave', leaveDrag);
    div.addEventListener('dragover', overDrag);
    div.addEventListener('drop', dropDrag);
}