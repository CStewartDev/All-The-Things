import './styles.css';
import { renderFooter } from './DOM/footer.js';
import { createTodo } from './todo';
import { newTask } from './DOM/todoDOM';
import { listCategory } from './DOM/categories';



const todoList = document.querySelector('.todoList');
const sideCategoryList = document.getElementById('categories-sidebar');
const addTodoBtn = document.getElementById('add-task');
const formTodo = document.getElementById('form-todo');
const cancelAddTodo = document.getElementById('cancel-add-thing')

//Linking in local storage

let storageCats = [];
let storageProjects = [];

//Categories
if(localStorage.getItem('ALLTHETHINGS-CATEGORY') == null){
    const defaultCategories = ["Welcome","Work"]
    localStorage.setItem('ALLTHETHINGS-CATEGORY', JSON.stringify(defaultCategories));
    defaultCategories.map(category=>sideCategoryList.appendChild(listCategory(category)));
} else {
    storageCats = JSON.parse(window.localStorage.getItem('ALLTHETHINGS-CATEGORY'));
    storageCats.map(category=>sideCategoryList.appendChild(listCategory(category)));
}

//Tasks
if(localStorage.getItem('ALLTHETHINGS-TASK') == null){
    const defaultTasks = [
        createTodo('Enter your Things title and desc test',"No need to add this unless you cant to",false,"",""),
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
    e.target.style.visibility = 'hidden';
    toggleForm();
})

cancelAddTodo.addEventListener('click', e=> {
    e.preventDefault();
    addTodoBtn.style.visibility = "visible"
    toggleForm();
    formTodo.reset();
})




// let test = document.querySelectorAll('.task');
// test.forEach(t=> {
//     t.addEventListener('click',e=> {
//         if(e.target.className.includes("task")) {
//             console.log(e.target)
//         }
//     })
// })


document.body.appendChild(renderFooter());
