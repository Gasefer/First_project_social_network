import React from 'react'
import s from './../Dialogs.module.css'


const MessagesItem1 = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default MessagesItem1;