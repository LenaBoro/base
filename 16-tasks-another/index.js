const ToDoList = {
    allTasks: [],

    createTask: function ({ ...obj }) {
        this.allTasks.push(obj);
    },

    removeTask: function (removeId) {
        this.allTasks.map((task, key) => {
            if (removeId === task.id) {
                this.allTasks.splice(key, 1);
            }
        })
    },

    updateTask: function (updateId, title, priority, description) {
        this.allTasks.map((task) => {
            if (updateId === task.id) {
                if (title !== '') { task.title = title }
                if (priority !== '') { task.priority = priority }
                if (description !== '') { task.description = description }
            }
        })
    },

    sortTasks: function () {
        this.allTasks.sort((a, b) => a.priority - b.priority)
    }
}

const NewTodoList = {
    allTasks: [{
        id: 10,
        title: 'name1',
        description: 'descr1',
        priority: 10
    },
    {
        id: 3,
        title: 'name3',
        description: 'descr3',
        priority: 9
    },
    {
        id: 8,
        title: 'name2',
        description: 'descr2',
        priority: 1
    }],

}
const createTaskNew = ToDoList.createTask;
const removeTaskNew = ToDoList.removeTask;
const updateTaskNew = ToDoList.updateTask;
const sortTaskNew = ToDoList.sortTasks;

createTaskNew.apply(NewTodoList, [{ title: 'name', id: 0, priority: 10, description: 'description' }]);
removeTaskNew.apply(NewTodoList, [10]);
updateTaskNew.apply(NewTodoList, [3, 'update name', 2, 'new description']);
sortTaskNew.call(NewTodoList);

