let inputField = document.getElementById('inputField');

let addButton = document.querySelector('.addBtn');

let todoLists = document.querySelector('.todoLists');


// ADD TODO FUNCTION
const addTodo = () => {

    let taskValue = inputField.value.trim();

    
    // EMPTY VALIDATION
    if(taskValue === ''){
        alert('Please enter a task');
        return;
    }


    // CREATE TASK DIV
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task');


    // CREATE TASK TEXT
    let taskText = document.createElement('p');
    taskText.textContent = taskValue;


    // COMPLETE TASK
    taskText.addEventListener('click', () => {
        taskText.classList.toggle('completed');
    });


    // DELETE BUTTON
    let deleteButton = document.createElement('button');

    deleteButton.textContent = 'Delete';

    deleteButton.classList.add('deleteBtn');


    // DELETE TASK
    deleteButton.addEventListener('click', () => {
        taskDiv.remove();
    });


    // APPEND ELEMENTS
    taskDiv.append(taskText);
    taskDiv.append(deleteButton);

    todoLists.append(taskDiv);


    // CLEAR INPUT
    inputField.value = '';
};


// BUTTON CLICK
addButton.addEventListener('click', () => {
    addTodo();
});


// ENTER KEY SUPPORT
inputField.addEventListener('keypress', (event) => {

    if(event.key === 'Enter'){
        addTodo();
    }

});