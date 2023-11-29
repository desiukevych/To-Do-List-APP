 // дата в хеддере
 const currentDate = new Date();

 const dayElement = document.getElementById('day');
 const monthElement = document.getElementById('month');
 const yearElement = document.getElementById('year');
 const dayNameElement = document.getElementById('currentDay');

 const day = currentDate.getDate();
 const month = currentDate.toLocaleString('ru-RU', { month: 'long' });
 const year = currentDate.getFullYear();
 const dayName = currentDate.toLocaleString('ru-RU', { weekday: 'long' });


 dayElement.textContent = day;
 monthElement.textContent = month;
 yearElement.textContent = year;
 dayNameElement.textContent = dayName;


// cписок
const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");


function addTask(){
  if(inputTask.value === ""){
    alert("Нужно вписать задание.");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputTask.value;
    taskList.appendChild(li);
  }

  inputTask.value = "";
  saveData();
}

taskList.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
});


// сохранение
function saveData(){
  localStorage.setItem("data", taskList.innerHTML);
}

function showTask(){
  taskList.innerHTML = localStorage.getItem("data");
}
showTask();