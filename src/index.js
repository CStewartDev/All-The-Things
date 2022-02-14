import './styles.css';
import { renderFooter } from './DOM/footer.js';
import { createTodo } from './LOGIC/todo';
import { newTask } from './DOM/todoDOM';
import { listCategory } from './DOM/categories';
import { addTodo } from './LOGIC/addTodo';
import { formCategory } from './DOM/CategoriesForm';



const todoList = document.querySelector('.todoList');
const sideCategoryList = document.getElementById('categories-sidebar');
const addTodoBtn = document.getElementById('add-task');
const formTodo = document.getElementById('form-todo');
const cancelAddTodo = document.getElementById('cancel-add-thing');
const addThingBtn = document.querySelector('#add-thing');
const categoryForm= document.querySelector('#category-form')

formTodo.reset();

//Linking in local storage

let storageCats = [];
let storageProjects = [];

//Categories
if(localStorage.getItem('ALLTHETHINGS-CATEGORY') == null){
    const defaultCategories = ["Inbox","Today","Upcoming","Past-Due","Welcome","Work"]
    localStorage.setItem('ALLTHETHINGS-CATEGORY', JSON.stringify(defaultCategories));
    defaultCategories.slice(4)
                     .map(category=>{
                         sideCategoryList.appendChild(listCategory(category))
                         categoryForm.appendChild(formCategory(category))
                     })
} else {
    storageCats = JSON.parse(window.localStorage.getItem('ALLTHETHINGS-CATEGORY'));
    storageCats.slice(4)
                .map(category=>{
                    sideCategoryList.appendChild(listCategory(category))
                    categoryForm.appendChild(formCategory(category))
                });
}

//Tasks
if(localStorage.getItem('ALLTHETHINGS-TASK') == null){
    const defaultTasks = [
        createTodo('Enter your Things',"No need to add this unless you want to",false,"",""),
        createTodo('This one has Priority flagged',"",true,"",""),
        createTodo('Just a Date here!',"",false,"12/12/22",""),
        createTodo('Category Test',"",false,"","Welcome"),
    ]
    localStorage.setItem('ALLTHETHINGS-TASK',JSON.stringify(defaultTasks));
    defaultTasks.map(task=>todoList.appendChild(newTask(task)));
} else {
    storageProjects = JSON.parse(window.localStorage.getItem('ALLTHETHINGS-TASK'));
    storageProjects.map(task=>todoList.appendChild(newTask(task)));
}

//Add Todo Toggle

const toggleForm = () => {
    if (formTodo.style.visibility === "visible") {
        formTodo.style.visibility = "hidden";
    } else if(formTodo.style.visibility === "") {
        formTodo.style.visibility = "visible";
    } else if (formTodo.style.visibility === "hidden") {
        formTodo.style.visibility = "visible";
    };
}

addTodoBtn.addEventListener('click', e=> {
    addTodoBtn.style.visibility = 'hidden';
    toggleForm();
})

cancelAddTodo.addEventListener('click', e=> {
    e.preventDefault();
    addTodoBtn.style.visibility = "visible";
    toggleForm();
    formTodo.reset();
})

addThingBtn.addEventListener('click', e=>{
    e.preventDefault();
    todoList.appendChild(newTask(addTodo()));
    addTodoBtn.style.visibility = "visible"
    toggleForm();
    formTodo.reset();
})

document.body.appendChild(renderFooter());
