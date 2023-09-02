import ReactDOM from 'react-dom/client'
import { useState, useRef } from 'react'
import Accordion from './Accordion'
import questions from './data'
import "./index.css"


const App = () => {
    const [allowMultipleAccordion, setAllowMultipleAccordion] = useState(false)
    // const [mulplt]
    const [accordinId, setAccordionId] = useState(null)

    function onMultipleChange() {
        if (allowMultipleAccordion) setAccordionId(null);

        setAllowMultipleAccordion(prev => !prev)
    }

    function setIdOpenAccordion (id = null) {
        setAccordionId(allowMultipleAccordion ? null : id);
    }

    return (
        <main>
            <header className='header'>
                Accordion
            </header>
            <section className='body'>
                <section className='multiple_option'> 
                    <label> Is multiple open accordion allowed? </label>
                    <input type='checkbox' value={allowMultipleAccordion} onChange={onMultipleChange} />
                </section>
                {questions.map((question) => {
                    return <Accordion key={question.id}
                        question={question}
                        allowMultiple={allowMultipleAccordion}
                        accordionId={accordinId}
                        setAccordionId={setAccordionId}
                        setIdOpenAccordion = {setIdOpenAccordion}
                    /> 
                })}
            </section>
        </main>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)