import { createHtmlElement } from '../createHTMLElement';


const listCategory = (cat) => {

const category = createHtmlElement('li',null,['category'],`${cat}`);
const catDelete = createHtmlElement('div',null,['delete-cat'],"-X-");

category.append(catDelete);

return category;
}

export {listCategory}