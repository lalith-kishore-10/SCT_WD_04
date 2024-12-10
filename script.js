const addBtn = document.getElementById('add-btn');
const inputField = document.getElementById('input');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const task = inputField.value.trim();
  if (task) {
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';
    listItem.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn">❌</button>
    `;
    todoList.appendChild(listItem);
    inputField.value = '';

    listItem.querySelector('.delete-btn').addEventListener('click', () => {
      listItem.remove();
    });
  }
});