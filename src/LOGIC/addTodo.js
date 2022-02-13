import { createTodo } from "./todo";

const titleForm = document.querySelector("#title-form");
const descForm = document.querySelector("#task-desc-form");
const dateForm = document.querySelector("#date-form");
const categoryForm = document.querySelector("#category-form");

const addTodo = () => {
    let projects = [];
    let newTodo = createTodo(titleForm.value,descForm.value,false,dateForm.value,categoryForm.value);
    projects = JSON.parse(window.localStorage.getItem('ALLTHETHINGS-TASK'));
    let addedTodo = projects.concat(newTodo);
    localStorage.setItem('ALLTHETHINGS-TASK',JSON.stringify(addedTodo));
    console.log(newTodo)
    return newTodo
}

export {addTodo}

