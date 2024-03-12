// todo 추가하기
const addTodo = document.querySelector('.addTodo');
const todoInput = document.querySelector('.todoInput');

const pushNewTodo = () => {
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

    todoInput.value = '';
  } else {
    alert('할 일을 입력해주세요!');
  }
};

todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    pushNewTodo();
  }
});

addTodo.addEventListener('click', pushNewTodo);

//todo 삭제하기
document.querySelector('.todoSection').addEventListener('click', (e) => {
  if (e.target.className === 'todoDelete') {
    e.target.parentElement.remove();
  }
});