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



defaultTasks.map(task=>todoList.appendChild(newTask(task)));


document.body.appendChild(renderFooter())
