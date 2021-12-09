import { createHtmlElement } from './createHTMLElement';
import { createTodo } from './todo';

const todo = createTodo("CHRISTMAS!!!!",2,true,"12/25/2021",5)

const task = createHtmlElement('li',null,['task',`${todo.priority?'priority':''}`],null);
const taskTitle = createHtmlElement('div',null,['task-title'],todo.title);
const taskRight = createHtmlElement('div',null,['task-right'],null);
const taskDue = createHtmlElement('div',null,['due-date'],todo.due);
const taskDelete = createHtmlElement('div',null,['delete'],"-X-");

taskRight.append(taskDue,taskDelete);
task.append(taskTitle,taskRight);

export {task}