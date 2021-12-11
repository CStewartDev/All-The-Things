import './styles.css';
import { renderFooter } from './footer';
import { createTodo } from './todo';
import { newTask } from './todoDOM';

const todoList = document.querySelector('.todoList');

const defaultTasks = [
    createTodo('Buy presents',"Need to buy for Mom, Sister, Son",false,"12/20/2021",""),
    createTodo('Wrap presents',"Need to Wrap for Brother, Daughter & Dogs",true,"12/19/2021",""),
    createTodo('Buy Food for Feast',"Need to buy steaks, taters, greenbeans",false,"12/12/21",""),
    createTodo('CHRISTMAS!!!!',"Have a holly jolly Christmas",true,"12/25/21",""),
]

//Linking in local storage

if(localStorage.getItem('user')== null){
    localStorage.setItem('user',JSON.stringify(defaultTasks))
    defaultTasks.map(task=>todoList.appendChild(newTask(task)));
} else {
    let storage = JSON.parse(window.localStorage.getItem('user'));
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


document.body.appendChild(renderFooter())
