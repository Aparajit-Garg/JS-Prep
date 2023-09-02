import React, { useState, useEffect } from 'react';
import './index.css'

const Accordion = ({ question, allowMultiple, accordionId, setAccordionId, setIdOpenAccordion}) => {
    // console.log('accordion: ', props.allowMultiple)
    const [showAccordion, setShowAccordion] = useState(false)
    // console.log(props.question)

    useEffect(() => {
        if (accordionId) setShowAccordion(question.id == accordionId)

    }, [question.id, accordionId])

    function updateAccordionId () {
        setIdOpenAccordion(question.id)
        setShowAccordion((prev) => !prev)
    }
    return (
        <div className='accordion'>
            <span className='title_section'>
                <span> {question.title} </span>
                <span onClick={updateAccordionId}> {showAccordion ? '-' : '+'} </span> 
            </span>
            {showAccordion && <span> {question.info} </span>}
        </div>
    );
}

export default Accordion;