import '../styles/style.css';
import { createElement, createTextNode } from './utils/dom';

window.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('add-task') as HTMLButtonElement;
  const input = document.getElementById('task-name') as HTMLInputElement;
  const tasksList = document.getElementById('tasks-list') as HTMLUListElement;

  addBtn.addEventListener('click', () => {
    const task = input.value;

    if (task !== '') {
      const li = createElement<HTMLLIElement>('li');
      const text = createTextNode(task);
      li.appendChild(text);
      tasksList.appendChild(li);
    }
  });
});
