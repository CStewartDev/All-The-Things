import './styles.css';
import { createHtmlElement } from './createHTMLElement';
import { renderFooter } from './footer';
import { createTodo } from './todo';

const todoList = document.querySelector('.todoList');
console.log(todoList)


let todo = createTodo("This was produced by JS",2,3,4,5)
const boop = createHtmlElement('li',null,['boop'],todo.title);

todoList.appendChild(boop)

console.table(todo)

document.body.appendChild(renderFooter())