const todoForm = document.querySelector(".todo__form");
const todoList = document.querySelector(".todo__list");
const todoInput = document.querySelector(".todo__input");
let todoStorage = [];
const TODO__STORAGE__KEY = "todo__storage";
const quoteContainer = document.querySelector(".quote")

todoForm.addEventListener("submit", handleTodoSubmit);

function handleTodoSubmit(argument){
    argument.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    paintTodo(newTodoObj);
    todoStorage.push(newTodoObj);
    saveToDo();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    li.id = newTodo.id
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText = newTodo.text;
    btn.innerText = "❌";
    btn.addEventListener("click", deleteTodo);
    todoList.appendChild(li);
}

function saveToDo(){
    localStorage.setItem(TODO__STORAGE__KEY,JSON.stringify(todoStorage) );
}

function deleteTodo(event){
    const li = event.target.parentElement;
    console.log(li.id)
    li.remove();
    todoStorage = todoStorage.filter((toDo)=> toDo.id != parseInt(li.id));
    console.log(todoStorage)
    saveToDo();
    }
    
const savedToDos = localStorage.getItem(TODO__STORAGE__KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    todoStorage = parsedToDos;
    parsedToDos.forEach(item => {paintTodo(item);
    });
}

function windowHeightResizeF(){
    let height = window.innerHeight
    const todoItem = document.querySelectorAll(".todo__list li")
    const hiddenTodoItem = todoList.childElementCount - 2;
    
    if (height <= 600){
        for (let i = 0; i < hiddenTodoItem; i++){
            todoItem[i].classList.add("hidden");
            todoItem[i].querySelector("span").classList.add("hidden");
            todoItem[i].querySelector("button").classList.add("hidden");
            console.log(todoItem[i])
        }
        quoteContainer.classList.add("hidden")
        console.log()
              }
    else{
        for (let i = 0; i < hiddenTodoItem; i++){
            todoItem[i].classList.remove("hidden");
        }
        quoteContainer.classList.remove("hidden");
    }
}




window.addEventListener("resize", windowHeightResizeF);
windowHeightResizeF();