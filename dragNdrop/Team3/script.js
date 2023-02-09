function startDrag (event) {
    let selected = event.target.closest("div");
    selected.classList.add("select");
    event.dataTransfer.setData("html",selected.innerHTML);
}
function endDrag (event){
    let selectedObj = document.querySelector(".select");
    selectedObj.classList.remove("select");
}

function enterDrag(event) {
    const selectElem = document.querySelector(".select");
    const dropElem = event.target.closest("div");
    console.log(dropElem);
    if (selectElem != dropElem) {
        dropElem.classList.add("drop");
    }
    
}

function leaveDrag(event){
    const elem = document.elementFromPoint(event.clientX, event.clientY).closest("div");
    if (elem.classList.contains("block-laungue")){
        return;
    }
    const dropElem = event.target.closest("div");
    dropElem.classList.remove("drop");
}

function overDrag(event){
    event.preventDefault();
}

function dropDrag(event){
    const dropElem = document.querySelector(".drop");
    const selectElem = document.querySelector(".select");
    selectElem.innerHTML = dropElem.innerHTML;
    dropElem.innerHTML = event.dataTransfer.getData("html");

}

const divNumvers = document.querySelectorAll(".block-laungue");
for (div of divNumvers){

    div.addEventListener("dragstart",startDrag);
    div.addEventListener("dragend",endDrag);
    div.addEventListener("dragenter",enterDrag);
    div.addEventListener("dragleave",leaveDrag);
    div.addEventListener("dragover",overDrag);
    div.addEventListener("drop",dropDrag);
}