import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import "./index.css";

const App = () => {

    const [toDisplay, setToDisplay] = useState('')
    const [inputValue, setInputValue] = useState('');
    const [stack, setStack] = useState([])

    const push = (e) => {
        e.preventDefault();
        if (inputValue && stack.length < 9) {
            setStack(prev => [...prev, inputValue]);
            setToDisplay(`${inputValue} is added to the stack`);
            setInputValue('');
        }
        else if (!(stack.length < 9)) setToDisplay('Stack full, please pop some items first');
        else setToDisplay('Please type in something first');

        // setInputValue('');
    }

    const pop = (e) => {
        e.preventDefault();
        if (stack.length)
            setToDisplay(`${stack.pop()} is removed from the stack`);
        else setToDisplay('Please enter some values in the stack first');
    }

    const peek = (e) => {
        e.preventDefault();
        if (stack.length)
            setToDisplay(`${stack[stack.length - 1]} is the last element`);
        else setToDisplay('Stack is empty');
    }

    const isEmpty = (e) => {
        e.preventDefault();
        setToDisplay(stack.length === 0 ? 'Stack is empty' : 'Stack is not empty');
    }

    const isFull = (e) => {
        e.preventDefault();
        if (stack.length > 8) setToDisplay('Stack is full (capacity of 9)');
        else setToDisplay('Stack is not full');
    }

    return (
        <div className='stack'>
            <div className='header'> Stack Implementation </div>
            <div className='main'>
                <form>
                    <input 
                        type="text" 
                        placeholder="Enter Something" 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <span className='stack_operations'>
                        <button onClick={push}> Push </button>
                        <button onClick={pop}> Pop </button>
                        <button onClick={peek}> Peek </button>
                        <button onClick={isEmpty}> IsEmpty </button>
                        <button onClick={isFull}> IsFull </button>
                    </span>
                    <label className='info'> {toDisplay} </label>
                    <span className='stack_items'>
                        {stack.map((val, index) => {
                            return (
                                <span key={index}> Value at index : {index} =&gt; {val} </span>
                            )
                        })}
                    </span>
                </form>
            </div>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);