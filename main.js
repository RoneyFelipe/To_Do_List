var currentPage = window.location.hash || "#home";
document.querySelector(currentPage).className = "";

function changePage(event) {
    document.querySelector(currentPage).className = "hidden";
    currentPage = event.target.hash;
    document.querySelector(currentPage).className = "";
}

var menu = document.querySelector("#menu");

var menuItem = menu.children;
for (i = 0; i < menuItem.length; i++) {
    menuItem[i].querySelector("a").onclick = changePage;
}

var taskList = new TaskList();
var TasksElement = document.querySelector("#tasks");

function drawList() {
    TasksElement.innerHTML = '';
    let tasks = taskList.getList();
    for (i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (task.isDone) {
            TasksElement.innerHTML += `<li class="feito">${task.description}</li>`
        } else {
            TasksElement.innerHTML += `<li>${task.description} 
            <input type="checkbox" onclick="taskList.finishTask(${task.id})"></li>`
        }

    };
}

taskList.register(drawList);

var addform = document.querySelector("#addform");
addform.onsubmit = addTask;

function addTask(event) {
    event.preventDefault();
    var form = event.target;
    var description = form.children.description.value;
    var observation = form.children.observation.value;
    taskList.add(description, observation);
}