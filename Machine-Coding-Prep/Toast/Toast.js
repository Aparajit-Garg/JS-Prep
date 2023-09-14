import React from 'react'
import classes from './index.module.css'

const Toast = ({ toastList, removeToast }) => {

    const backgroundColorCheck = (title) => {

    }
    return (
        <div className={classes.toast_head}>
            { toastList?.map(toast => {
                return (
                    <div key={toast.id} className={classes.toast}
                        style={{ backgroundColor: toast.title == 'success' ? 'green' 
                                                    : toast.title == 'info' ? 'cyan'
                                                    : toast.title == 'warning' ? 'orange'
                                                    : 'red'}}>
                        <span className={classes.title}>
                            <p> {toast.title} </p>
                            <button onClick={() => removeToast(toast.id)}> x </button>
                        </span>
                        <p className={classes.description}> {toast.description} </p>
                    </div>
                )
            })} 
        </div>
    )
}

export default Toast