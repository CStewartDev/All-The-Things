import { createHtmlElement } from '../LOGIC/createHTMLElement';
import { deleteTodo } from '../LOGIC/deleteTodo';

const dotChecked = () => "boop";


const newTask = (todo) => {

const task = createHtmlElement('li',null,['task'],null);
if(todo.priority) task.classList.add("priority");
task.dataset.key = todo.key;
const doneDot = createHtmlElement('div',null,['done-dot'],null);
const taskTitle = createHtmlElement('h2',null,['task-title'],todo.title);
const taskDesc =  createHtmlElement('h3',null,['task-desc'],todo.desc);
const taskRight = createHtmlElement('div',null,['task-right'],null);
const taskLeft = createHtmlElement('div',null,['task-left'],null);
const taskDue = createHtmlElement('div',null,['due-date'],`${todo.due?todo.due:"No Due Date"}`);
const taskDiv = createHtmlElement('div',null,['task-div'],null);
const taskDelete = createHtmlElement('div',null,['delete'],"-X-");

taskDelete.addEventListener("click",()=>{
    deleteTodo(task.dataset.key)    
    task.remove();
})

doneDot.addEventListener('click',dotChecked)

taskDiv.append(taskTitle,taskDesc,taskDue)
taskLeft.append(doneDot,taskDiv);
taskRight.append(taskDelete)
task.append(taskLeft,taskRight);

return task;
}

export {newTask}