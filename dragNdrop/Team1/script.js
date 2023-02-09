

function startDrag(event) {
    const elem = event.target.closest('div');
    elem.classList.add('selected');
    event.dataTransfer.setData('html', elem.innerHTML);
}
function endDrag(event) {
    const elem = document.querySelector('.selected');
    elem.classList.remove('selected');
}
function enterDrag(event) {
    let elem = event.target.closest('div');
    let selElem = document.querySelector('.selected')
    if (elem != selElem) {
        elem.classList.add('drop');
    }
}
function leaveDrag(event) {
    let elem = document.querySelector('.drop');
    let divElem = document.elementFromPoint(event.clientX, event.clientY);
    divElem = divElem.closest('div');
    if (!divElem.classList.contains('block-number')){
        if (elem != divElem) {
            elem.classList.remove('drop');
        }
    }
}
function overDrag(event) {
    event.preventDefault();  
}
function dropDrag(event) {
    let someData = event.dataTransfer.getData('html');
    let Selectt = document.querySelector('.selected');
    let Dropp = document.querySelector('.drop');
    Selectt.innerHTML = Dropp.innerHTML;
    Dropp.innerHTML = someData;
}
const divNumbers = document.querySelectorAll('.block-number');
for ( let div of divNumbers ) {
    div.addEventListener('dragstart', startDrag);
    div.addEventListener('dragend', endDrag);
    div.addEventListener('dragenter', enterDrag);
    div.addEventListener('dragleave', leaveDrag);
    div.addEventListener('dragover', overDrag);
    div.addEventListener('drop', dropDrag);
}






















