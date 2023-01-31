<<<<<<< HEAD
import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/readTasks.js";

const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas,da click al boton
btn.addEventListener('click', addTask);

=======
import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/readTasks.js";

const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas,da click al boton
btn.addEventListener('click', addTask);

>>>>>>> d612996ab994ec2ec7551cfc62e9e1d8af8f3712
displayTasks();