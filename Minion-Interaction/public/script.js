
const translateBtn = document.getElementById('translateBtn')
const inputField = document.getElementById('inputArea')
const resultField = document.getElementById('outputArea')

const fetchData = async (e) => {
    if (inputField.value.length === 0)
        alert("hey! domo mo woeod. rya torute prima. i.e., Hey! Don't mess around. Enter something...")
    
    else {
        try {
            const response = await fetch(`https://api.funtranslations.com/translate/minion.json?text=${inputField.value}`)
            const data = await response.json()
            resultField.value = data.contents.translated
        } catch(error) {
            alert('This api accepts 5 requests/hr. Please try after an hour. Thank you.')
        }
    }
}


translateBtn.addEventListener('click', fetchData);