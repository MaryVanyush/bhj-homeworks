const taskInput = document.getElementById('task__input')
const tasksAddBtn = document.getElementById('tasks__add')
const tasksList = document.getElementById('tasks__list')



function addTask(){
    if(taskInput.value === ''){
        return
    }
    let task = document.createElement('div');
    task.className = 'task'
    let taskTitle = document.createElement('div');
    taskTitle.className = 'task__title'
    tasksList.appendChild(task).appendChild(taskTitle)
    taskTitle.insertAdjacentText("afterBegin", taskInput.value)
    task.innerHTML += `<a href="#" class="task__remove">&times;</a>`
    taskInput.value = ''
    event.preventDefault()
}

tasksAddBtn.addEventListener('click', addTask)

taskInput.addEventListener('keydown', (e) => { if(e.code === 'Enter'){  addTask() }})

document.addEventListener('click', () => {
    const taskRemove = [...document.querySelectorAll('.task__remove')]
    taskRemove.forEach((elem) => {
        if (elem === event.target){
            elem.closest('.task').remove()
        }
    })
})
