import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
    const [number, setNumber] = useState();
    const [numberFound, setNumberFound] = useState(false);
    const [stringToDisplay, setStringToDisplay] = useState(null)
    const ref = useRef()

    useEffect(() => {
        setNumber(Math.floor(Math.random() * 100));
        console.log(number)
    }, [])
    
    const check = () => {
        if (+ref.current.value == number) {
            setNumberFound(true);
            setStringToDisplay("You guessed it right");
        }
        else if (+ref.current.value < number) {
            setStringToDisplay('Guessed number is smaller');
        }
        else {
            setStringToDisplay("Guessed number is greater");
        }
        console.log(number)
    }

    const reset = () => {
        ref.current.value = '';
        setNumber(Math.floor(Math.random() * 100));
        setNumberFound(false);
        setStringToDisplay(null);
    }

    return (
        <div className='guessing_game'>
            <div className='header'> Guess the Number </div>
            <div className='body'>
                <span> Guess a number between 0 and 100 </span>
                <input type='number' ref={ref} />
                <span className='buttons'>
                    <button onClick={reset}> Reset </button>
                    <button disabled={numberFound} onClick={check}> Check </button>
                </span>
                { stringToDisplay ? <div className='result'> {stringToDisplay} </div> : ''}
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);