const ToDoList = {
    allTasks: [],

    createTask: function (title, id, priority) {
        this.allTasks.push({ title: title, id: id, priority: priority });
    },

    removeTask: function (removeId) {
        this.allTasks.map((task) => {
            if (removeId === task.id) {
                this.allTasks.splice(task.id, 1);
            }
        })
    },

    updateTask: function (updateId, title, priority) {
        this.allTasks.map((task) => {
            if (updateId === task.id) {
                if (title !== '') { task.title = title }
                if (priority !== '') { task.priority = priority }
            }
        })
    },

    sortTasks: function () {
        this.allTasks.sort((a, b) => a.priority - b.priority)
    }

}