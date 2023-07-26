
let addBtn = document.getElementById("addBtn")
let todoString = document.getElementById("todo_input")

let todoList = document.getElementById("todo")
let errorElement = document.getElementById("error")

const addTodo = () => {
    if (todoString.value.length === 0) {
        errorElement.innerHTML = 'Please enter something first'
        errorElement.style.display = 'block'
    }
    else {
        errorElement.style.display = 'none'
        let newItem = document.createElement('li')
        newItem.innerHTML = todoString.value
        todoList.appendChild(newItem)

        let cross = document.createElement('span')
        cross.innerHTML = 'x'
        newItem.appendChild(cross)

        todoString.value = ''
    }

}



addBtn.addEventListener('click', addTodo)