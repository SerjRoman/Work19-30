// Prohor находим элемент кнопки - создание задачи 
const buttonModalWindow = document.querySelector(".create-task");
// Prohor находим элемент кнопки - модального окна 
const modalWindow = document.querySelector(".modal-window");
// Prohor находим элемент кнопки - создания миши
const buttonCreateTask = document.querySelector(".buttonCreate");
// Prohor находим элемент кнопки - отжатия мыши
const buttonClose = document.querySelectorAll('.button-delete');
// Prohor находим элемент кнопки - лист таск
const listTasks = document.querySelector(".list-tasks");
// Prohor отображение всех хрестиков на рабочем окне 
function showModalWindow(){
    // Prohor отображение всех хрестиков 
    showCover();
    // Prohor задаём модальному окну дисплей флекс
    modalWindow.style.display = "flex";
}
// Prohor создаём функцыю закрепления хрестиков 
function showCover(){
    // Prohor создаём элемент нашего поверхсного слоя
    let cover = document.createElement("div");
    // Prohor  добавляем ему нашему поверхсного слоя класс
    cover.classList.add("cover");
    // Prohor добавляем  в body поверхносный слой для модального окна 
    document.body.appendChild(cover);
}
// sozdaem func
function createTask(){
    // zadaem nazvu
    let descriptionValue = descriptionTask.value;
    // zadaem napolnenie
    let nameValue = nameTask.value;
    // esli ne zapolnen
    if (nameValue == 0){
        // vuvesti nadpis
        alert("Заполните поле имени");
        // vernut false
        return false;
    }
    // esli ne zapolnen
    if (descriptionValue == 0){
        // vuvesti nadpis
        alert("Заполните поле описания");
        // vernut false
        return false;
    }
    // sozdaem element spiska
    const li = document.createElement("li");
    // sozdaem div
    const divText = document.createElement("div");
    // sozdaem div
    const divButton = document.createElement("div");
    // sozdaem h2
    const title = document.createElement("h2");
    // sozdaem p
    const description = document.createElement("p");
    // sozdaem button
    const buttonDelete = document.createElement("button");
    // zadaem class
    divText.classList.add("task-text");
    // zadaem class
    divButton.classList.add("task-button");
    // zadaem class
    buttonDelete.classList.add("button-delete");
    //  zapolnit title
    title.innerHTML = nameValue;
    // zapolnit description
    description.innerHTML = descriptionValue;
    // zapolnit buttonDelete
    buttonDelete.innerHTML = "&Cross;";
    // v li dobavim div
    li.appendChild(divText)
    // v li dobavim div
    li.appendChild(divButton)
    // v li dobavim knopku
    divButton.appendChild(buttonDelete);
    // v li dobavim nazvu
    divText.appendChild(title);
    // v li dobavim opis
    divText.appendChild(description);
    // v spisok dobavim li
    listTasks.appendChild(li);
    // vizvat func
    hideModalWindow();
    // dobavit click
    buttonDelete.addEventListener('click', deleteTask);
}
// Prohor   функцыя которая скрывает модальное окно 
function hideModalWindow(){
    // Prohor скрываем поверхносный слой нашего окна  
    hideCover();
    // Prohor задаём нашему окну значение "none"
    modalWindow.style.display = "none";
}
// Prohor создаём функцыю скрытия поверхносного слоя 
function hideCover(){
    // Prohor удаляем наш  поверхносный слой 
    document.querySelector(".cover").remove();
}
// sozdaem func
function deleteTask(event){
    // zadat button 
    let button = event.target;
    // v task zadaem blizhayshiy k button
    let task = button.closest('li');
    // udalit
    task.remove();
}
// dobavit click
buttonModalWindow.addEventListener("click",showModalWindow);
// dobavit click
buttonCreateTask.addEventListener("click",createTask);

// perebiraem vse krestiki
for (let button of buttonClose){
    // dobavlyaem im udalenie
    button.addEventListener('click',deleteTask);
}