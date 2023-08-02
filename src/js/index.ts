import '../styles/style.css';
import { ADD_TASK_ID, REMOVE_TASK_CLASS } from './constants';
import { createTask } from './lib/createTask';
import { removeTask } from './lib/removeTask';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    if (target.id === ADD_TASK_ID) {
      createTask();
    }

    if (target.classList.contains(REMOVE_TASK_CLASS)) {
      removeTask(target);
    }
  });
});
