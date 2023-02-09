const divSideMenu = document.querySelector(".side-menu");
divSideMenu.addEventListener("pointerenter", (event) => {
    let elem = event.target.closest("div");
    elem.style.opacity = "1";
});

divSideMenu.addEventListener("pointerout", (event) => {
    let elem = event.target.closest("div");
    if ( document.elementFromPoint(event.clientX, event.clientY).closest('div').classList.contains('side-menu')) {
        return;
    }
    elem.style.opacity = "0";

});

