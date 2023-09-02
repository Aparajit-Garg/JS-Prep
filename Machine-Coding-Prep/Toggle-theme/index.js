import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    const [theme, setTheme] = useState(false)

    const changeTheme = () => {
        setTheme(prev => !prev);

        if (theme) {
            document.documentElement.style.setProperty('--primary-text-color', 'black');
            document.documentElement.style.setProperty('--primary-background-color', 'white');
            document.documentElement.style.setProperty('--primary-button-color', 'pink');
        }
        else {
            document.documentElement.style.setProperty('--primary-text-color', 'white');
            document.documentElement.style.setProperty('--primary-background-color', 'black');
            document.documentElement.style.setProperty('--primary-button-color', 'red');
        }
    }

    return (
        <div className='theme'>
            <div className='header'> Light Dark Mode </div>
            <div className='theme_section'>
                <h2> Try to toggle the theme and see the change </h2>
                <button onClick={changeTheme}> Toggle Theme </button> 
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)