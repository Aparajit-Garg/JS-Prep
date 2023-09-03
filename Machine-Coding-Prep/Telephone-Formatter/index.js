import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

const App = () => {
    const [number, setNumber] = useState('')


    const updateNumber = (e) => {
        let targetValue = '';

        [...e.target.value].forEach((s, index) => {
            if (!isNaN(s) && s !== ' ') targetValue += s
        })
        
        if (targetValue.length > 3) {
            let value = `+(${targetValue.slice(0, 3)}) - ${targetValue.slice(3)}`
            setNumber(value);
        }
        else {
            setNumber(targetValue);
        }
    }

    return (
        <div className='telephone_formatter'>
            <div className='header'> Telephone Formatter </div>
            <div className='content'>
                <input 
                    type='tel' 
                    value={number}
                    placeholder='Phone Number'
                    maxLength={16} 
                    onChange={updateNumber} />
                <label> +(123) - 4567890 </label>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)