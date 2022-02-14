
const deleteTodo = (task) => {
    let storage = []
    storage = JSON.parse(window.localStorage.getItem('ALLTHETHINGS-TASK'));
    let taskRemoved = storage.filter(todo=>todo.key !== task);
    localStorage.setItem('ALLTHETHINGS-TASK',JSON.stringify(taskRemoved));
    return
}


export {deleteTodo}