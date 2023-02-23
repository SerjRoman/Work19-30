// 
const form = document.querySelector("#reg");
// 
const bannedWords = [
    '%',
    '^',
    '&',
]
// 
form.addEventListener("submit", (event)=>{
    // 
    event.preventDefault();
    // 
    let inputs = document.querySelectorAll('.input');
    // 
    let divErrors = document.querySelectorAll('.error')
    // 
    for (let error of divErrors){
        error.remove();
    }
    // 
    let result = true;
    // 
    // for (let input of inputs){
    //     // 
    //     if (validation(input) == false){
    //         result = false;
    //     }
    // }
    // // 
    // if (result == true ){
    //     form.submit()
}

)
// 
function createError(text, elem){
    // 
    let divError = document.createElement('div');
    // 
    let pError = document.createElement('p');
    // 
    let imgError = document.createElement('img');
    // 
    divError.append(pError);
    // 
    divError.append(imgError);
    // 
    elem.after(divError);
    // 
    imgError.src = "error.svg";
    // 
    pError.innerHTML = text;
    // 
    divError.classList.add('error');
}
// 
function validation(input) {
    // 
    if (input.value == '') {
        createError(`Поле пустое`, input);
        // 
        return false;
        // 
    }
    // 
    if (input.id == 'username') {
        // 
        for (let symbol of input.value) {
            // 
            if (bannedWords.includes(symbol)) {
                // 
                createError(`Введен недопустимый символ: ${symbol}`, input);
                // 
                return false;
            }
        }
    }
    // 
    else if (input.id == "email"){
        // 
        if (!input.value.includes("@")) {
            // 
            createError(`Нету @`, input);
            // 
            return false;
        }
    }
    // 
    return true
}

buttonAuth.addEventListener("click", (event) =>{
    console.log("auth");
    auth.hidden = true;
    reg.hidden = false;
})
buttonReg.addEventListener("click", (event) =>{
    console.log("reg");
    auth.hidden = false;
    reg.hidden = true;
})