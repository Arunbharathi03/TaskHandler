// const getById = (id) => document.getElementById(id)
// const createEl = (el) => document.createElement(el)

// const taskListParent = getById('task-list-wrapper')
// const taskInput = getById('input-add-task')

// const addTask = (evt) => {
//     if (evt.keyCode === 13 || evt.key === 'Enter') {
//         evt.preventDefault()
//         evt.stopPropagation()
//         const checkBoxId = 'checkbox-' + (new Date().toJSON())
//         const li = createEl('li')
//         const checkBox = createEl('input')
//         checkBox.setAttribute('type', 'checkbox')
//         checkBox.setAttribute('id', checkBoxId)
//         const label = createEl('label')
//         label.setAttribute('for', checkBoxId)
//         label.innerHTML = taskInput.value
//         li.appendChild(checkBox)
//         li.appendChild(label)
//         taskListParent.appendChild(li)
//         taskInput.value = ''
//     }
// }
// taskInput.addEventListener('keydown', addTask)



const getById = (id) => document.getElementById(id)
const createEl = (el) => document.createElement(el)

const taskListParent = getById('task-list-wrapper')
const taskInput = getById('input-add-task')

const addTask = (evt) => {
    if (evt.keyCode === 13 || evt.key === 'Enter') {
        evt.preventDefault()
        evt.stopPropagation()
        const taskItem = createTaskItem()
        taskListParent.appendChild(taskItem)
        taskInput.value = ''
    }
}
taskInput.addEventListener('keydown', addTask)

const createTaskItem = () => {
    const li = createEl('li')
    const { checkBox, checkBoxId } = createCheckBox(taskInput.value)
    const label = createLabel(taskInput.value, checkBoxId)
    li.classList.add('bg-white', 'rounded-lg', 'p-4', 'flex', 'items-center', 'shadow-lg', 'mb-2')
    li.appendChild(checkBox)
    li.appendChild(label)
    return li
}

const createCheckBox = () => {
    const checkBoxId = 'checkbox' + (new Date().toJSON())
    const checkBox = createEl('input')
    checkBox.setAttribute('type', 'checkbox')
    checkBox.setAttribute('id', checkBoxId)
    checkBox.classList.add('mr-1')
    return { checkBox, checkBoxId }
}

const createLabel = (inputValue, checkBoxId = null) => {
    const label = createEl('label')
    if (checkBoxId) label.setAttribute('for', checkBoxId)
    label.innerHTML = inputValue
    return label
}
