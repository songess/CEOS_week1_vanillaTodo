// todo 추가하기
const addTodo = document.querySelector('.addTodo');
const todoInput = document.querySelector('.todoInput');
let checkboxNumber = 0;
let doneCount = document.querySelectorAll('.doneCard').length;
let todoCount = document.querySelectorAll('.todoCard').length + doneCount;
//등록 된 todo, 완료 된 todo 개수 표시
document
  .querySelector('.todoProgress')
  .append(`${doneCount} 개 / ${todoCount} 개 `);

//오늘 날짜 표시
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day = today.getDay();
const dayList = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
document.querySelector('.headerDate').append(`${date}`);
document.querySelector('.headerMonth').append(`${month}`);
document.querySelector('.headerYear').append(`${year}`);
document.querySelector('.headerDay').append(`${dayList[day]}`);

//개수 업데이트 함수
const updateTodoCount = () => {
  doneCount = document.querySelectorAll('.doneCard').length;
  todoCount = document.querySelectorAll('.todoCard').length + doneCount;
  document.querySelector(
    '.todoProgress'
  ).textContent = `${doneCount} 개 / ${todoCount} 개 `;
};

const pushNewTodo = () => {
  if (todoInput.value.trim()) {
    const todoCard = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoContent = document.createElement('label');
    const todoDelete = document.createElement('div');

    todoCard.className = 'todoCard';
    checkbox.type = 'checkbox';
    checkbox.className = 'todoCheckbox';
    checkbox.id = `todoCheckbox${checkboxNumber}`;
    todoContent.className = 'todoContent';
    todoContent.htmlFor = `todoCheckbox${checkboxNumber++}`;
    todoContent.textContent = todoInput.value;
    todoDelete.className = 'todoDelete';
    todoDelete.textContent = 'X';

    todoCard.append(checkbox, todoContent, todoDelete);
    document.querySelector('.todoSection').append(todoCard);

    todoInput.value = '';
    updateTodoCount();
  } else {
    todoInput.value = '';
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
    updateTodoCount();
  }
});

document.querySelector('.doneSection').addEventListener('click', (e) => {
  if (e.target.className === 'todoDelete') {
    e.target.parentElement.remove();
    updateTodoCount();
  }
});

//완료 todo 옮기기
document.querySelector('.todoSection').addEventListener('click', (e) => {
  if (e.target.className === 'todoCheckbox') {
    const todoCard = e.target.parentElement;
    todoCard.className = 'doneCard';
    document.querySelector('.doneSection').append(todoCard);
    updateTodoCount();
  }
});

document.querySelector('.doneSection').addEventListener('click', (e) => {
  if (e.target.className === 'todoCheckbox') {
    const doneCard = e.target.parentElement;
    doneCard.className = 'todoCard';
    document.querySelector('.todoSection').append(doneCard);
    updateTodoCount();
  }
});
