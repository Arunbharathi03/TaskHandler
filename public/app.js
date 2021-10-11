var board = document.getElementById('card-display')

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

    let label = document.createElement('label')
    cardInfo.appendChild(label)

    let checkBox = document.createElement('input')
    checkBox.setAttribute('type' , 'checkbox')
    checkBox.setAttribute('id' , 'taskStat')
    checkBox.setAttribute('disabled' , true)
    

    label.appendChild(checkBox)

    let cardText = document.createElement('span')
    cardText.classList.add('cardtext')
    cardText.innerText = card

    label.appendChild(cardText)

//card status

    let cardStatus = document.createElement('div')
    cardStatus.classList.add('cardstatus')
    task.appendChild(cardStatus)

    let statusDrop = document.createElement('select')
    statusDrop.setAttribute('id' ,'status'  )
    statusDrop.classList.add('status-drop')
    cardStatus.appendChild(statusDrop)
    

    var options = ['Backlog' ,'Queue' ,'In Progress' ,'In Review' ,'Completed']

    function statusSelect() {
        for ( var i = 0 ; i < options.length ; i++ ) {
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
    progress.innerText = '5%' 

//function setting percentages based on drop value

    statusDrop.addEventListener('click' ,function(){
      
    switch (statusDrop.options[statusDrop.selectedIndex].value){
        case '0':{
            progress.innerText = '5%'
            checkBox.setAttribute('disabled' ,true )
            checkBox.classList.remove('strike')
        } 
            
        break;

        case '1':{ 
            progress.innerText = '10%'
            checkBox.setAttribute('disabled' , true)
            checkBox.classList.remove('strike')
        }

        break;

        case '2':{
            progress.innerText = '45%'
            checkBox.setAttribute('disabled' , true)
            checkBox.classList.remove('strike')
        }

        break;

        case '3':{
            progress.innerText = '95%'
            checkBox.setAttribute('disabled' , true)
            checkBox.classList.remove('strike')
        }

        break;

        case '4':{
            progress.innerText = '100%'
            checkBox.removeAttribute('disabled' , true)
            checkBox.setAttribute('checked' , true)
            checkBox.classList.add('strike')
            
        }
        
        
        break;
            
        default:
        break;
    }
    })  

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

    edit.addEventListener('click' , editFn)
    function editFn(){
        let editedTxt = prompt('Enter text to Edit Card!!')
        if(editedTxt == null || editedTxt == ''){
            cardText.innerText = card
        }else{
        cardText.innerText = editedTxt
        }
    }

    //for progress bar
    let bar = document.createElement('div')
    bar.classList.add('border-2' ,'rounded-lg' ,'border-gray-400' ,'h-4')   
    
    let proBar = document.createElement('div')
    proBar.classList.add('h-3' ,'rounded-lg' ,'bg-green-400' ,'w-10')
    bar.appendChild(proBar)

    let mainDiv = document.createElement('div')
    mainDiv.classList.add('mb-7')
    mainDiv.appendChild(task)
    mainDiv.appendChild(bar)

    statusDrop.addEventListener('click' ,function(){
    switch (statusDrop.options[statusDrop.selectedIndex].value) {
        case '0': proBar.classList.add('w-10')
            
            break;
        
        case '1': proBar.classList.add('w-32')
            
            break;

        case '2': proBar.classList.add('w-96')
            
            break;

        case '3': proBar.classList.add('')
            
            break;

        case '4': proBar.classList.add('w-full')
            
            break;    
        
        default:

            break;
    }
    })

    board.prepend(mainDiv)
    

}

//addTask function ends here


let completed = document.getElementById('Completed')

completed.addEventListener('click', function(){


    if (completed.checked == true){
        if (completed.checked == true){
            console.log('ads')
        }
    }else if(completed.checked == false){
            console.log('red')
        }
    
}) 










