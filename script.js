
const todoList = document.getElementById('todoList');
const newTodoInput = document.getElementById('newTodoInput');
const addTodoButton = document.getElementById('addTodoButton');


function createTodoItem(todoText) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const label = document.createElement('label');
  label.textContent = todoText;

  
  checkbox.addEventListener('change', markTodoAsCompleted);
  label.addEventListener('click', function () {
    checkbox.checked = !checkbox.checked;
    markTodoAsCompleted();
  });
  li.addEventListener('click', function (event) {
    if (event.target !== checkbox && event.target !== label) {
      checkbox.checked = !checkbox.checked;
      markTodoAsCompleted();
    }
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  todoList.appendChild(li);
}

function markTodoAsCompleted() {
  const li = this.closest('li');
  li.classList.toggle('completed');
}


addTodoButton.addEventListener('click', function () {
  const todoText = newTodoInput.value.trim();

  if (todoText !== '') {
    createTodoItem(todoText);
    newTodoInput.value = '';
  }
});


newTodoInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    const todoText = newTodoInput.value.trim();

    if (todoText !== '') {
      createTodoItem(todoText);
      newTodoInput.value = '';
    }
  }
});
