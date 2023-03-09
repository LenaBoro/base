const ToDoList = {
    allTasks: [],

    createTask: function ({ ...obj }) {
        this.allTasks.push(obj);
    },

    removeTask: function (removeId) {
        const idTask = this.allTasks.findIndex(task => task.id === removeId)
        this.allTasks.splice(idTask, 1);
    },

    updateTask: function ({ ...obj }) {
        this.allTasks.find((task) => {
            if (obj.updateId === task.id) {
                if (obj.title !== '') { task.title = obj.title }
                if (obj.priority !== '') { task.priority = obj.priority }
            }
        })
    },

    sortTasks: function () {
        this.allTasks.sort((a, b) => a.priority - b.priority)
    }

}