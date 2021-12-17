import './styles.css';
import { renderFooter } from './DOM/footer.js';
import { createTodo } from './todo';
import { newTask } from './DOM/todoDOM';
import { listCategory } from './DOM/categories';

const todoList = document.querySelector('.todoList');
const sideCategoryList = document.getElementById('categories-sidebar');

//Linking in local storage

if(localStorage.getItem('ALLTHETHINGS-CATEGORY') == null){
    const defaultCategories = ["Welcome","Work"]
    localStorage.setItem('ALLTHETHINGS-CATEGORY', JSON.stringify(defaultCategories));
    defaultCategories.map(category=>sideCategoryList.appendChild(listCategory(category)));
} else {
    let storage = JSON.parse(window.localStorage.getItem('ALLTHETHINGS-CATEGORY'));
    storage.map(category=>sideCategoryList.appendChild(listCategory(category)));
}

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
    let storage = JSON.parse(window.localStorage.getItem('ALLTHETHINGS-TASK'));
    storage.map(task=>todoList.appendChild(newTask(task)));
}

let test = document.querySelectorAll('.task');
test.forEach(t=> {
    t.addEventListener('click',e=> {
        if(e.target.className.includes("task")) {
            console.log(e.target)
        }
    })
})


document.body.appendChild(renderFooter());
