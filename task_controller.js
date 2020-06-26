class TaskController {
    constructor(taskList) {
        this.taskList = taskList;
        document.querySelector("#addform").onsubmit = (e) => {
            this.addTask(e);
        };
        this.taskList.register(this.bindActions.bind(this));
    }

    bindActions() {
        let tasksDOM = document.querySelector("#tasks");
        tasksDOM.querySelectorAll('li').forEach((li) => {
            this.bindCompleteTasksAction(li);
        });

    }
    buttonsActions() {
        let buttonsDOM = document.querySelector('#tasks');
        buttonsDOM.querySelectorAll('button').forEach((button) => {
            this.buttonsCompleteActions(button);
        })
    }

    addTask(event) {
        event.preventDefault();
        var form = event.target;
        var description = form.children.description.value;
        var observation = form.children.observation.value;
        this.taskList.add(description, observation);
    }

    bindCompleteTasksAction(element) {
        let checkbox = element.querySelector("input[type=checkbox]");
        if (checkbox) {
            checkbox.onclick = (e) => {
                this.taskList.finishTask(checkbox.dataset.cod);
                this.buttonsActions();
            }
        }
    }

    buttonsCompleteActions(element) {
        element.onclick = (e) => {
            this.taskList.remove(element.dataset.cod);
        }
    }
}