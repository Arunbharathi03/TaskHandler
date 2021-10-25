var board = document.getElementById('card-display')
let taskInput = document.getElementById('input')
let taskAddBtn = document.getElementById('addtask')

let taskInput2 = document.getElementById('input2')
let taskAddBtn2 = document.getElementById('addtask2')


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

    var options = ['Backlog', 'Queue', 'In Progress', 'In Review', 'Completed']

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
    
            case '0':
                progress.innerText = '5%'
                completedTaskCheck.classList.remove('strike')
                completedTaskCheck.checked = false
                proBar.style.width = 5 + '%'
                proBar.style.backgroundColor = 'red'
                break
            case '1':
                progress.innerText = '10%'
                completedTaskCheck.classList.remove('strike')
                completedTaskCheck.checked = false
                proBar.style.width = 10 + '%'
                proBar.style.backgroundColor = 'red'
                break
            case '2':
                progress.innerText = '45%'
                completedTaskCheck.classList.remove('strike')
                completedTaskCheck.checked = false
                proBar.style.width = 45 + '%'
                proBar.style.backgroundColor = 'orange'
                break
            case '3':
                progress.innerText = '95%'
                completedTaskCheck.checked = false
                completedTaskCheck.classList.remove('strike')
                proBar.style.width = 95 + '%'
                proBar.style.backgroundColor = 'blue'
                break
            case '4':
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
        let newTitle = prompt('Edit task title !!!' ,  currentTitle )

        if (newTitle === null || newTitle === '' || newTitle.trim() == "") cardText.innerText = currentTitle
        else cardText.innerText = newTitle
    }

    //for progress bar
    let bar = document.createElement('div')
    bar.classList.add('border-2', 'rounded-lg', 'border-gray-400', 'h-4', 'w-64')

    let proBar = document.createElement('div')
    proBar.classList.add('h-3', 'rounded-lg')
    proBar.style.backgroundColor = 'red'
    proBar.style.width = 5 + '%'
    bar.appendChild(proBar)

    let mainDiv = document.createElement('div')
    mainDiv.classList.add('bg-gray-200', 'p-4', 'rounded-lg', 'shadow-md' , 'mt-3')
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
            statusDrop.value = '4'
        } else if (completedTaskCheck.checked === false) {
            progress.innerText = 45 + '%'
            proBar.style.width = 45 + '%'
            proBar.style.backgroundColor = 'orange'
            statusDrop.value = '2'
        }
    })

    let completed = document.getElementById('Completed')
    let incompleted = document.getElementById('Incomplete')
    let allTasks = document.getElementById('All')

    allTasks.addEventListener('click', function () {
        if ( allTasks.checked == true ) {
            mainDiv.hidden = false
            completed.checked = true
            incompleted.checked = true
        } else {
            completed.checked = false
            incompleted.checked = false
        }

        if ( allTasks.checked == false && completed.checked == true ) {
            if (statusDrop.value !== '4') mainDiv.hidden = true
                else {
                    mainDiv.hidden = false
                }
            }

        if ( allTasks.checked == false && incompleted.checked == true ) {
            if (statusDrop.value == '4') mainDiv.hidden = true
                else {
                    mainDiv.hidden = false
                }
            }

    })      

    completed.addEventListener('click', function () {
        
        if (completed.checked == true ) {
            if (statusDrop.value !== '4') mainDiv.hidden = true
        } else {
            mainDiv.hidden = false
        }

        if (completed.checked == false && incompleted.checked == true){
            allTasks.checked = false
            if (statusDrop.value == '4') mainDiv.hidden = true
            
        }

        if ( incompleted.checked == true && completed.checked == true ) {
                mainDiv.hidden = false
                allTasks.checked = true
            }
            
    })


    incompleted.addEventListener('click', function () {
        

        if ( incompleted.checked == true ) {
            mainDiv.hidden = false
            if ( statusDrop.value === '4' ) mainDiv.hidden = true
        } else {
            mainDiv.hidden = false
        }

        if ( incompleted.checked == true && completed.checked == true ) {
            mainDiv.hidden = false
            allTasks.checked = true
        }

        if (completed.checked == true && incompleted.checked == false){
            allTasks.checked = false
            if (statusDrop.value !== '4') mainDiv.hidden = true
        }
    })
    return {board, mainDiv}
    
}

//addTask function ends here
taskInput.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        taskAddBtn.click()
    }
})

let getUserInput = () => {
    if (taskInput.value != '') addTask (taskInput.value)
    else alert('Enter the task')

    document.getElementById('input').value = ''
    document.getElementById('input').focus()
}



taskInput2.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        taskAddBtn2.click()
    }
})

   let getUserInput2 = () => {
    if (taskInput2.value != '') addTask (taskInput2.value)
    else alert('Enter the task')

    document.getElementById('input2').value = ''
    document.getElementById('input2').focus()
}


taskAddBtn2.addEventListener('click', getUserInput2)
taskAddBtn.addEventListener('click', getUserInput)






