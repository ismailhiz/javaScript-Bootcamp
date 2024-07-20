document.addEventListener('DOMContentLoaded', () =>  {

    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    let todos = getTodos();

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    const addTodo = (text) => {
        const todoItem = document.createElement('li');
        todoItem.innerText = text;

        todoItem.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });
        todoList.appendChild(todoItem);
    };
});