const mainElem = document.querySelector(".visible");
const gates = document.querySelector('.gates');
const ball = document.querySelector('.ball');
const textCount = document.querySelector('.count');
gates.onclick = function(event){
    if (ball.style.left <= '60px') {
        if (ball.style.top >= '100px') {
            console.log(ball.style.top+"TOP");
            textCount.innerHTML = `${+1}:0`;
        }
    } else {
        console.log(ball.style.left+"LEFT")
    }
    ball.style.left = event.clientX + 'px';
    ball.style.top = event.clientY + 'px';
}
