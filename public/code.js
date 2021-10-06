
let add = document.getElementById('addtask')
add.addEventListener('click' ,function(){
    
    let input = document.getElementById('input').value

    if (input!='') {

        addTask(input)
    

    } else{
        
        alert('Enter the task')
        
    }

    document.getElementById('input').value = ''
})


function addTask (card){

    var task = document.createElement('div')
    task.classList.add('card')

    let cardInfo = document.createElement('div')
    cardInfo.classList.add('card-desc') 
    task.appendChild(cardInfo)

    let checkBox = document.createElement('input')
    checkBox.setAttribute('type' , 'checkbox')
    checkBox.setAttribute('value' , '1')
    checkBox.classList.add('strike')

    cardInfo.appendChild(checkBox)

    let cardText = document.createElement('span')
    cardText.classList.add('cardtext')
    cardText.innerText = card

    cardInfo.appendChild(cardText)

//card status

    let cardStatus = document.createElement('div')
    cardStatus.classList.add('cardstatus')
    task.appendChild(cardStatus)

    let statusDrop = document.createElement('select')
    statusDrop.classList.add('status-drop')
    cardStatus.appendChild(statusDrop)


    var options = ['In Review' ,'Approved' ,'In Progress']

    function statusSelect() {
        for ( var i = 0 ; i < options.length ; i++ ) {
        var opt = options[i]
        var elemt = document.createElement('option')
        elemt.textContent = opt
        elemt.value = opt
        statusDrop.appendChild(elemt)
        } 

    }   
    statusSelect()

    let modify = document.createElement('div')
    modify.classList.add('modify')

//for deleting cards

    let remove = document.createElement('div')
    remove.classList.add('delete')
    remove.innerHTML = '<div class="fas fa-trash"></div> Delete'
    modify.appendChild(remove)

    remove.addEventListener('click' , function(){
        task.remove()
    })

//for editing cards

    let edit = document.createElement('div')
    edit.classList.add('edit')
    edit.innerHTML = '<div class="fas fa-edit"></div> Edit'
    modify.appendChild(edit)
    task.appendChild(modify)

    let board = document.getElementById('card-display')
    board.prepend(task)

    edit.addEventListener('click' , function(){
        
    })



}


