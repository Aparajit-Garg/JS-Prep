
const generateBtn = document.getElementById("generate_password")
const inputField = document.getElementById("passwordField")
const copyIcon = document.getElementById("copyIcon")

const length = 12
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "@#$%^&*()!-_=+,.<>/?"

const allChars = upperCase + lowerCase + number + symbol

const generatePassword = () => {
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while (length > password.length)
        password += allChars[Math.floor(Math.random() * allChars.length)]
    
    inputField.value = password
}

const copyPassword = () => {
    navigator.clipboard.writeText(inputField.value).then(() => alert('Password copied'))
}


generateBtn.addEventListener('click', generatePassword)
copyIcon.addEventListener('click', copyPassword)