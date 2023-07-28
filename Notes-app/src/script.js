
let noteList = []

const addBtn = document.getElementById('addNoteBtn')
const notesList = document.getElementById('notes_list')
// noteList.push(notesList.childrenElement)

notesList.innerHTML = localStorage.getItem('notes')
console.log(notesList)


const updateLocalStorage = () => {
    localStorage.setItem('notes', notesList.innerHTML)
}

const noteClicked = (e) => {
    console.log(e.target.tagName)
    switch (e.target.tagName) {
        case 'P': {
            const notes = document.querySelectorAll('.individual_note');
            notes.forEach(nt => {
                nt.onkeyup = function () {
                    updateLocalStorage()
                }
            })
            break;
        }
        case 'IMG': {
            notesList.removeChild(e.target)
            updateLocalStorage()
            break;
        }
        default:
            alert("Some issue with onClick listener");
    }
}


const addNote = () => {
    const newElement = document.createElement('li')
    newElement.className = 'individual_note'
    const inputElement = document.createElement('p')
    inputElement.contentEditable = true
    const img = document.createElement('img')
    img.src = '../public/images/delete.png'
    newElement.appendChild(inputElement)
    newElement.appendChild(img)
    notesList.appendChild(newElement)

    newElement.addEventListener('click', noteClicked)

    localStorage.setItem('notes', notesList.innerHTML)
}


addBtn.addEventListener('click', addNote)