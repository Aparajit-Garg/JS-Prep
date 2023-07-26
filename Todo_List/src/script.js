
let addBtn = document.getElementById("addBtn")
let todoString = document.getElementById("todo_input")

let todoList = document.getElementById("todo")
let errorElement = document.getElementById("error")

const deleteElement = (e) => {
    todoList.removeChild(e.target.parentElement)
}

const toggleCompleteStatus = (e) => {
    console.log(e)
}

const todoItemStatusUpdate = (e) => {
    switch(e.target.tagName.toLowerCase()) {
        case 'li': {
            e.target.classList.toggle('checked')
        }
        break;
        case 'span': {
            todoList.removeChild(e.target.parentElement)
        }
        break;
        default:
            alert('Some problem with onClick')
            break
    }
    saveDataToLocalStorage()
}

const addTodo = () => {
    if (todoString.value.length === 0) {
        errorElement.innerHTML = 'Please enter something first'
        errorElement.style.display = 'block'
    }
    else {
        errorElement.style.display = 'none'
        let newItem = document.createElement('li')
        newItem.innerHTML = todoString.value

        let cross = document.createElement('span')
        cross.innerHTML = 'x'
        newItem.appendChild(cross)
        todoList.appendChild(newItem)

        todoString.value = ''
        saveDataToLocalStorage()
    }

}

todoList.addEventListener('click', todoItemStatusUpdate)

const saveDataToLocalStorage = () => {
    localStorage.setItem("data", todoList.innerHTML)
}

const firstTimePopulateTasks = () => {
    todoList.innerHTML = localStorage.getItem("data")
}


addBtn.addEventListener('click', addTodo)
firstTimePopulateTasks()