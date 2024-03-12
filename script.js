// todo 추가하기
const addTodo = document.querySelector('.addTodo');
const todoInput = document.querySelector('.todoInput');

addTodo.addEventListener('click', () => {
  if (todoInput.value) {
    const todoCard = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoContent = document.createElement('label');
    const todoDelete = document.createElement('div');

    todoCard.className = 'todoCard';
    checkbox.type = 'checkbox';
    checkbox.className = 'todoCheckbox';
    checkbox.id = 'todoCheckbox';
    todoContent.className = 'todoContent';
    todoContent.htmlFor = 'todoCheckbox';
    todoContent.textContent = todoInput.value;
    todoDelete.className = 'todoDelete';
    todoDelete.textContent = 'X';

    todoCard.append(checkbox, todoContent, todoDelete);
    document.querySelector('.todoSection').append(todoCard);
  } else {
    alert('할 일을 입력해주세요!');
  }
});
