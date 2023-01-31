<<<<<<< HEAD
import { uniqueDates } from '../services/date.js';
import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

//funcion addTask:recibe un evento que genera el formulario
export const addTask = (evento) => {
 evento.preventDefault();
    
  const list = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date]');
    
  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format('DD/MM/YYYY');
  
  if (value == "" || date == "") {
    return
    // con este return no se ejecuta el codigo de abajo
    //console.log("No crear la tarea");
  }
    input.value = '';
    calendar.value = ""
  
    const complete = false
      // en esta constante almacenamos value y dateFormat
      const taskObj = {
      value,
      dateFormat,
        complete,
      id: uuid.v4()
    };
     
  list.innerHTML = "";
    //] Entonces lo que tienes que entender es que, cuando nosotros ponemos estos pipelines
   // lo que significa es, en caso de que esto que yo estoy escribiendo aquí 
  //sea null o indefinido, lo que voy a hacer es entonces formatearla o darle un valor
  // por defecto, que en este caso sería el arreglo vacío.  
  
  const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
   // tasksList.push({ value, dateFormat });
  tasksList.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(tasksList));
    // hace toda la estructura y la muestra
 displayTasks();

  /*const task = createTask(taskObj);
  list.appendChild(task); */
};
  
export const createTask = ({value, dateFormat, complete, id}) => {
  const task = document.createElement('li');
    task.classList.add('card');

  const taskContent = document.createElement('div');
 // console.log(value, dateFormat);
  const check = checkComplete(id);
  if (complete) {
    check.classList.toggle('fas');
    check.classList.toggle('completeIcon');
    check.classList.toggle('far');
  }
  const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(check);
        taskContent.appendChild(titleTask);
       
        task.appendChild(taskContent);
        task.appendChild(deleteIcon(id));
        return task
=======
import { uniqueDates } from '../services/date.js';
import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

//funcion addTask:recibe un evento que genera el formulario
export const addTask = (evento) => {
 evento.preventDefault();
    
  const list = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date]');
    
  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format('DD/MM/YYYY');
  
  if (value == "" || date == "") {
    return
    // con este return no se ejecuta el codigo de abajo
    //console.log("No crear la tarea");
  }
    input.value = '';
    calendar.value = ""
  
    const complete = false
      // en esta constante almacenamos value y dateFormat
      const taskObj = {
      value,
      dateFormat,
        complete,
      id: uuid.v4()
    };
     
  list.innerHTML = "";
    //] Entonces lo que tienes que entender es que, cuando nosotros ponemos estos pipelines
   // lo que significa es, en caso de que esto que yo estoy escribiendo aquí 
  //sea null o indefinido, lo que voy a hacer es entonces formatearla o darle un valor
  // por defecto, que en este caso sería el arreglo vacío.  
  
  const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
   // tasksList.push({ value, dateFormat });
  tasksList.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(tasksList));
    // hace toda la estructura y la muestra
 displayTasks();

  /*const task = createTask(taskObj);
  list.appendChild(task); */
};
  
export const createTask = ({value, dateFormat, complete, id}) => {
  const task = document.createElement('li');
    task.classList.add('card');

  const taskContent = document.createElement('div');
 // console.log(value, dateFormat);
  const check = checkComplete(id);
  if (complete) {
    check.classList.toggle('fas');
    check.classList.toggle('completeIcon');
    check.classList.toggle('far');
  }
  const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(check);
        taskContent.appendChild(titleTask);
       
        task.appendChild(taskContent);
        task.appendChild(deleteIcon(id));
        return task
>>>>>>> d612996ab994ec2ec7551cfc62e9e1d8af8f3712
};