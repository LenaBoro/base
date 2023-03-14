const ToDoList = {
    allTasks: [],

    createTask: function (obj) {
        this.allTasks.push(obj);
    },

    removeTask: function (removeId) {
        const idTask = this.allTasks.findIndex(task => task.id === removeId);
        this.allTasks.splice(idTask, 1);
    },

    updateTask: function (obj) {
        const index = this.allTask.findIndex(el => el.id === obj.id);
        if (index !== -1) {
            const newObj = { ...this.allTask[index], ...obj };
            this.allTask[index] = newObj;
        }
    },

    sortTasks: function () {
        this.allTasks.sort((a, b) => a.priority - b.priority);
    }

}