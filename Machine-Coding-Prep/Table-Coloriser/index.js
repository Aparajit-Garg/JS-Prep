import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';

const value = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {
    const [boxes, setBoxes] = useState([])
    const ref = useRef()

    useEffect(() => {}, [boxes])

    const colorMe = (e) => {
        e.preventDefault();
        if (+ref.current.value > 9 || +ref.current.value < 1) alert("Please enter a number within 1 and 9");

        if (boxes.indexOf(+ref.current.value) === -1) {
            setBoxes(prev => [...prev, +ref.current.value - 1]);
        }
    }

    return (
        <div className='table_coloriser'>
            <div className='header'> Table Coloriser </div>
            <div className='body'>
                <form>
                    <input type='number' ref={ref} />
                    <span>
                        <button type='submit' onClick={colorMe}> Color me </button>
                        <button onClick={() => setBoxes([])}> Clear me </button>
                    </span>
                </form>
                <div className='boxes'>
                    {value.map((box, index) => {
                        return <span key={index} className={boxes.indexOf(index) !== -1 ? 'box' : 'non_colored_box'}> {box} </span>
                    }
                )}
                </div>
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)