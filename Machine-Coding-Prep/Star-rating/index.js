import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
    const [stars, setStars] = useState(Array(5).fill(false))

    const updateRating = (index) => {
        if (stars[index]) {
            
        }
    }

    return (
        <div>
            {stars.map((star, index) => {
                return (
                    star ? 
                    <button key={index} onClick={() => updateRating(index)}> &#9733; </button> 
                    : 
                    <button key={index} onClick={() => updateRating(index)}> &#9734; </button>
                )
            })}
        </div>
    );
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);