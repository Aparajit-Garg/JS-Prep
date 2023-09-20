import { questions } from "./constants.js";

let nextBtn = document.getElementById("next")
let question = document.getElementById("question")
let answers = document.getElementById("answers")

let correctAnswers = 0
let currentQuestionIndex = 0

const resetQuiz = () => {
    correctAnswers = 0
    currentQuestionIndex = 0
    nextBtn.innerHTML = 'Next'
    nextBtn.style.display = "none"
    showData()
}

const resetState = () => {
    nextBtn.style.display = 'none'
    while (answers.firstChild)
        answers.removeChild(answers.firstChild)
}

const selectAnswer = (e) => {
    const isCorrect = e.target.dataset.correct === "true"
    
    if (isCorrect) {
        e.target.classList.add("correct")
        correctAnswers++
    } else {
        e.target.classList.add("wrong")
    }

    Array.from(answers.children).forEach(button => {
        if (button.dataset.correct === 'true') button.classList.add('correct')
        button.disabled = true
    })
    nextBtn.style.display = 'block'
}

const showScore = () => {
    resetState()
    question.innerHTML = "Score: " + correctAnswers + '/' + questions.length
    nextBtn.innerHTML = 'Restart Quiz'
    nextBtn.style.display = 'block'
}

const handleNextButton = () => {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) showData()
    else showScore()
}

const changeQuestion = () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton()
    }
    else {
        resetQuiz()
    }
}

const showData = () => {

    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    question.innerHTML = `Q${questionNo}: ${currentQuestion.question}`
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answers.appendChild(button)

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
}

nextBtn.addEventListener('click', changeQuestion)
resetQuiz()

// showData()