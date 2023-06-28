import React from "react";
import s from './Dialogs.module.css'
import MessagesItem1 from "./MessageItem/MessageItem";
import DialogsItem1 from "./DialogItem/DialogItem";


let Dialogs = (props) => {
    let state = props.DialogsPage

    let dialogsElement = state.DialogsData
        .map(d => <DialogsItem1 name={d.name} key={d.id} id={d.id} />)

    let messagesElement = state.MessagesData
        .map(m => <MessagesItem1 message={m.message} key={m.id} />)

    let NewMessageBody = state.NewMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onUpdateNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea onChange={onUpdateNewMessageChange} value={NewMessageBody} placeholder="Enter your message"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;