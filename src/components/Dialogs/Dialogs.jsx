import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {


    let messageElements = props.messages.map(m => <Message message={m.message} id={m.id} />)
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src}/>);

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messageElements}

        </div>

    </div>
}
export default Dialogs