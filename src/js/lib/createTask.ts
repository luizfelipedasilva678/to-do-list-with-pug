import { createElement, createTextNode } from '../utils/dom';

export const createTask = (): void => {
  const tasksList = document.getElementById('tasks-list') as HTMLUListElement;
  const input = document.getElementById('task-name') as HTMLInputElement;

  const task = input.value;

  if (task !== '') {
    const li = createElement<HTMLLIElement>('li');
    const text = createTextNode(task);
    li.classList.add('tasks__li');

    const button = createElement<HTMLLIElement>('button');
    button.classList.add('tasks__remove');
    const buttonContent = createTextNode('✖️');
    button.appendChild(buttonContent);

    li.appendChild(text);
    li.appendChild(button);
    tasksList.appendChild(li);
  }
};
