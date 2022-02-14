import { createHtmlElement } from '../LOGIC/createHTMLElement';
import { deleteTodo } from '../LOGIC/deleteTodo';


const newTask = (todo) => {

const task = createHtmlElement('li',null,['task'],null);
if(todo.priority) task.classList.add("priority");
task.dataset.key = todo.key;
const taskTitle = createHtmlElement('div',null,['task-title'],todo.title);
const taskRight = createHtmlElement('div',null,['task-right'],null);
const taskDue = createHtmlElement('div',null,['due-date'],`${todo.due?todo.due:"No Due Date"}`);
const taskDelete = createHtmlElement('div',null,['delete'],"-X-");

taskDelete.addEventListener("click",()=>{
    deleteTodo(task.dataset.key)    
    task.remove();
})

taskRight.append(taskDue,taskDelete);
task.append(taskTitle,taskRight);

return task;
}

export {newTask}