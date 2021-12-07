import './styles.css';
import { createHtmlElement } from './createHTMLElement';
import { renderFooter } from './footer';
import { createTodo } from './todo';

const content = createHtmlElement('div',"content",null,null);
const boop = createHtmlElement('p',null,['boop-red'],"I'm a boop");

let todo = createTodo(1,2,3,4,5)
console.table(todo)

content.append(boop,renderFooter())
document.body.appendChild(content)