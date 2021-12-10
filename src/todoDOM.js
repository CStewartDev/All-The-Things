import { createHtmlElement } from './createHTMLElement';


const newTask = (todo) => {

const task = createHtmlElement('li',null,['task'],null);
if(todo.priority) task.classList.add("priority")
const taskTitle = createHtmlElement('div',null,['task-title'],todo.title);
const taskRight = createHtmlElement('div',null,['task-right'],null);
const taskDue = createHtmlElement('div',null,['due-date'],`${todo.due?todo.due:"No Date"}`);
const taskDelete = createHtmlElement('div',null,['delete'],"-X-");

taskRight.append(taskDue,taskDelete);
task.append(taskTitle,taskRight);
console.log(task)
return task;
}

export {newTask}