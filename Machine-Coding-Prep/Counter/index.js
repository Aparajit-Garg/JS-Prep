import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [range, setRange] = useState(1)

    return (
        <div>
            <div className='header'>
                Counter
            </div>
            <div className='counter_body'>
                <span className='count'> {count} </span>
                <span className='update_range_buttons'>
                    <button onClick={() => { setCount(prev => prev + range)}}> + </button>
                    <button onClick={() => { setCount(prev => prev - range)}}> - </button>
                </span>
                <span className='input_range'>
                    <span> Increment/Decrement by: </span>
                    <input type='number' value={range} onChange={(e) => setRange(+e.target.value)}/>
                </span>
                <button className='reset_button' onClick={() => {setCount(0)}}> Reset </button> 
            </div>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);

export default Counter;