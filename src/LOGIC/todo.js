import { v4 as uuidv4 } from 'uuid';

const createTodo = (title,desc,priority,due,category) => {
   return {
        title,
        desc,
        priority,
        due,
        category,
        key: uuidv4(),       
    }
}



export {createTodo}