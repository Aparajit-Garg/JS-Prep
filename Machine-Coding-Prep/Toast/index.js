import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ToastType, ToastContent } from './types';
import Toast from './Toast';
import classes from './index.module.css'

const App = () => {

    const [toastList, setToastList] = useState([])

    const addToast = (callingToast) => {
        let date = new Date();
        date = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay() + '-' + date.getHours() + '-' + date.getMinutes() + '-' + date.getSeconds() + '-' + date.getMilliseconds()
        switch (callingToast) {
            case 'success': setToastList(prev => [...prev, {
                id: date,
                title: 'success',
                description: 'success description' 
            }])
            break;
            case 'warning': setToastList(prev => [...prev, {
                id: date,
                title: 'warning',
                description: 'warning description' 
            }])
            break;
            case 'info': setToastList(prev => [...prev, {
                id: date,
                title: 'info',
                description: 'info description' 
            }])
            break;
            case 'error': setToastList(prev => [...prev, {
                id: date,
                title: 'error',
                description: 'error description' 
            }])
            break;
            default: setToastList(prev => [...prev])
            break;
        }
        console.log(toastList)
    }

    const removeToast = (id) => {
        setToastList(prev => prev.filter(val => val.id !== id))
    }

    return (
        <div className={classes.toastMain}>
            <div className={classes.buttons}>
                <button onClick={() => addToast(ToastType.SUCCESS)}> Success </button>
                <button onClick={() => addToast(ToastType.WARNING)}> Warning </button>
                <button onClick={() => addToast(ToastType.INFO)}> Info </button>
                <button onClick={() => addToast(ToastType.ERROR)}> Error </button>
            </div>

            <Toast toastList={toastList} removeToast={removeToast} />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)