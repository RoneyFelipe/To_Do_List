class TaskList {
    constructor() {
        this.tasks = []
        this.cod = 0;
        this.observers = [];
    }

    add(description, observation) {
        this.tasks.push(new Task(description, this.cod, observation))
        this.cod++;
        this.notifyAll();
    }

    notifyAll() {
        console.log("Observadores Sendo notificados");
        for (i = 0; i < this.observers.length; i++) {
            this.observers[i]();
        }
    }

    finishTask(cod) {
        let task = this.tasks.find((task) => {
            return task.id == cod;
        })
        task.finishTask();
        this.notifyAll();
    }

    register(observer) {
        this.observers.push(observer);
    }

    getList() {
        return this.tasks;
    }

}