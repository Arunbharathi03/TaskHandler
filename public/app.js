var board = document.getElementById('card-display')
let taskInput = document.getElementById('input')
let taskAddBtn = document.getElementById('addtask')

taskInput.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        taskAddBtn.click()
    }
})

// camel case -> getUserInput
// kebab case -> get-user-input
// snake case -> get_user_input

let GetUserInput = () => {
    if (taskInput.value != '') {
        addTask(taskInput.value)
    } else {
        alert('Enter the task')
    }
    document.getElementById('input').value = ''
}
taskAddBtn.addEventListener('click', GetUserInput)

function addTask (card) {
    var task = document.createElement('div')
    task.classList.add('card')

    let cardInfo = document.createElement('div')
    cardInfo.classList.add('card-desc')
    task.appendChild(cardInfo)

    let label = document.createElement('label')
    cardInfo.appendChild(label)

    var completedTaskCheck = document.createElement('input')
    completedTaskCheck.setAttribute('type', 'checkbox')
    completedTaskCheck.id = 'compTask'

    label.appendChild(completedTaskCheck)

    let cardText = document.createElement('span')
    cardText.classList.add('cardtext')
    cardText.innerText = card

    label.appendChild(cardText)

    //card status
    let cardStatus = document.createElement('div')
    cardStatus.classList.add('cardstatus')
    task.appendChild(cardStatus)

    let statusDrop = document.createElement('select')
    statusDrop.setAttribute('id', 'status')
    statusDrop.classList.add('status-drop')
    cardStatus.appendChild(statusDrop)

    var options = ['- Status -', 'Backlog', 'Queue', 'In Progress', 'In Review', 'Completed']

    function statusSelect () {
        for (var i = 0; i < options.length; i++) {
            var opt = options[i]
            var elemt = document.createElement('option')
            elemt.textContent = opt
            elemt.value = i
            statusDrop.appendChild(elemt)
        }
    }
    statusSelect()

    //to add percentage
    var progress = document.createElement('div')
    progress.classList.add('w-6')
    task.appendChild(progress)
    progress.innerText = 0 + '%'


    //function setting percentages and progress based on drop value
    statusDrop.addEventListener('click', function () {
        var statusValue = statusDrop.options[statusDrop.selectedIndex]
        switch (statusValue.value) {
            case '0': {
                progress.innerText = '0%'
                completedTaskCheck.classList.remove('strike')
                completedTaskCheck.checked = false
                proBar.style.width = 1 + '%'
                proBar.style.backgroundColor = 'gray'
                break
            }
            case '1':
                progress.innerText = '5%'
                completedTaskCheck.classList.remove('strike')
                completedTaskCheck.checked = false
                proBar.style.width = 5 + '%'
                proBar.style.backgroundColor = 'red'
                break
            case '2':
                progress.innerText = '10%'
                completedTaskCheck.classList.remove('strike')
                completedTaskCheck.checked = false
                proBar.style.width = 10 + '%'
                proBar.style.backgroundColor = 'red'
                break
            case '3':
                progress.innerText = '45%'
                completedTaskCheck.classList.remove('strike')
                completedTaskCheck.checked = false
                proBar.style.width = 45 + '%'
                proBar.style.backgroundColor = 'orange'
                break
            case '4':
                progress.innerText = '95%'
                completedTaskCheck.checked = false
                completedTaskCheck.classList.remove('strike')
                proBar.style.width = 95 + '%'
                proBar.style.backgroundColor = 'blue'
                break
            case '5':
                progress.innerText = '100%'
                completedTaskCheck.checked = true
                completedTaskCheck.classList.add('strike')
                proBar.style.width = 100 + '%'
                proBar.style.backgroundColor = 'green'
            default:
                break
        }
    })
    let modify = document.createElement('div')
    modify.classList.add('modify')

    //for deleting cards
    let remove = document.createElement('div')
    remove.classList.add('delete')
    remove.innerHTML = '<div class="fas fa-trash"></div> Delete'
    modify.appendChild(remove)

    remove.addEventListener('click', () => mainDiv.remove())

    //for editing cards
    let edit = document.createElement('div')
    edit.classList.add('edit')
    edit.innerHTML = '<div class="fas fa-edit"></div> Edit'
    modify.appendChild(edit)
    task.appendChild(modify)

    edit.addEventListener('click', editFn)
    function editFn () {
        let currentTitle = cardText.innerText
        let newTitle = prompt('Enter to edit task title - ' + currentTitle)

        if (newTitle === null || newTitle === '' || newTitle.trim() == "") cardText.innerText = currentTitle
        else cardText.innerText = newTitle
    }

    //for progress bar
    let bar = document.createElement('div')
    bar.classList.add('border-2', 'rounded-lg', 'border-gray-400', 'h-4')

    let proBar = document.createElement('div')
    proBar.classList.add('h-3', 'rounded-lg', 'bg-gray-300')
    proBar.style.width = 1 + '%'
    bar.appendChild(proBar)

    let mainDiv = document.createElement('div')
    mainDiv.classList.add('mb-7')
    mainDiv.appendChild(task)
    mainDiv.appendChild(bar)

    board.prepend(mainDiv)

    //to set status when card is checked completed
    completedTaskCheck.addEventListener('click', function () {
        if (completedTaskCheck.checked === true) {
            progress.innerText = 100 + '%'
            proBar.style.width = 100 + '%'
            proBar.style.backgroundColor = 'green'
            completedTaskCheck.classList.add('strike')
            statusDrop.value = '5'
        } else if (completedTaskCheck.checked === false) {
            progress.innerText = 45 + '%'
            proBar.style.width = 45 + '%'
            proBar.style.backgroundColor = 'orange'
            statusDrop.value = '3'
        }
    })

    let completed = document.getElementById('Completed')
    let incompleted = document.getElementById('Incomplete')
    let allTasks = document.getElementById('All')
    allTasks.checked = true
    allTasks.addEventListener('click', function () {
        if (allTasks.checked == true) {
            incompleted.checked = false
            completed.checked = false
            mainDiv.hidden = false
        }
    })

    completed.addEventListener('click', function () {
        if (completed.checked == true) {
            mainDiv.hidden = false
            incompleted.checked = false
            allTasks.checked = false
            if (statusDrop.value !== '5') mainDiv.hidden = true
        } else {
            mainDiv.hidden = false
            allTasks.checked = true
        }
    })


    incompleted.addEventListener('click', function () {
        if (incompleted.checked == true) {
            mainDiv.hidden = false
            completed.checked = false
            allTasks.checked = false
            if (statusDrop.value === '5') mainDiv.hidden = true
        } else {
            mainDiv.hidden = false
            allTasks.checked = true
        }
    })
}

//addTask function ends here












