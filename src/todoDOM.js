import { createHtmlElement } from './createHTMLElement';


const newTask = (todo) => {

const task = createHtmlElement('li',null,['task'],null);
if(todo.priority) task.classList.add("priority");
task.dataset.key = todo.key;
const taskTitle = createHtmlElement('div',null,['task-title'],todo.title);
const taskRight = createHtmlElement('div',null,['task-right'],null);
const taskDue = createHtmlElement('div',null,['due-date'],`${todo.due?todo.due:"No Due Date"}`);
const taskDelete = createHtmlElement('div',null,['delete'],"-X-");

taskRight.append(taskDue,taskDelete);
task.append(taskTitle,taskRight);

return task;
}

export {newTask}