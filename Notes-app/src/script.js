
let noteList = []

const addBtn = document.getElementById('addNoteBtn')
const notesList = document.getElementById('notes_list')
// noteList.push(notesList.childrenElement)
console.log(notesList)

const deleteNote = (e) => {
    console.log(e.target.parentElement)
    notesList.removeChild(e.target.parentElement)
}

const addNote = () => {
    const newElement = document.createElement('li')
    const inputElement = document.createElement('p')
    inputElement.contentEditable = true
    const img = document.createElement('img')
    img.src = '../public/images/delete.png'
    newElement.appendChild(inputElement)
    newElement.appendChild(img)
    notesList.appendChild(newElement)

    img.addEventListener('click', deleteNote)
}


addBtn.addEventListener('click', addNote)