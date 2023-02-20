
const form = document.getElementById('task-form')
const error = document.querySelector('.text')
const parent = document.querySelector('.collection')
const clear = document.getElementById('clear')
const filter = document.getElementById('filter')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    // Getting the value from UI
    const data = document.getElementById('task').value
    
    // Checking if user has typed a task less then 5 characters
    if(data.length<5){
        // Showing error
        error.style.display = 'block' 

    }else{
        error.style.display = 'none'

        // Creating li element and adding classes
        const li = document.createElement('li')
        li.classList.add('collection-item')
        // creating text node using value typed by user and appending it to li
        const text = document.createTextNode(data)
        li.appendChild(text)

        // creating anchor tag and appending it to li
        const a = document.createElement('a')
        // delete-item secondary-content

        a.classList.add('delete-item')
        a.classList.add('secondary-content')
        a.innerHTML = '<i class="fa fa-remove"></i>'

        li.appendChild(a)

            // Showing element with value typed by the user in UI
        parent.appendChild(li)
        document.getElementById('task').value = ''



    }
})

parent.addEventListener('click',(e)=>{


    if(e.target.classList.contains('fa-remove')){

        const c = confirm('Are you sure you want to delete the task')

        if(c){
            const data = e.target.parentNode.parentNode
            parent.removeChild(data)
        }else{
            
        }
    }else{
        console.log('clicked outside')
    }
})

clear.addEventListener('click',()=>{
    const c = confirm('Are you sure')
    if(c){
    const childs = document.querySelectorAll('.collection-item')  
    childs.forEach((child)=>{
        parent.removeChild(child)
    })
        // parent.innerHTML  = ''
    }else{

    }
})

filter.addEventListener('input',(e)=>{
    console.log(e.target.value)
    const childs = document.querySelectorAll('.collection-item')
    
    childs.forEach((child,index)=>{
        if(child.textContent.toLocaleUpperCase().includes(e.target.value.toLocaleUpperCase())){
            child.style.display = 'block'
        }else{
            child.style.display = 'none'
        }
    })
})