import './styles.css';
import { renderFooter } from './footer';
import { task } from './todoDOM';


const todoList = document.querySelector('.todoList');

todoList.appendChild(task)
document.body.appendChild(renderFooter())

// <li class="task priority"> 
// <div class="task-title">Todo 1</div>
// <div class="task-right">
//     <div class="due-date">No date</div>
//     <div class="delete">-X-</div>
// </div>
// </li>