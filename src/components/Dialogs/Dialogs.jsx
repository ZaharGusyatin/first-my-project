import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {


    let messageElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src}/>);

// window.stater=state

    let newPostElement = React.createRef()
    let btnClick = () => {
       props.addPostDialogs()

    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostTextDialogs(text)

    };
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messageElements}
            <div><textarea placeholder='Enter your mess' ref={newPostElement}
                           onChange={onPostChange}
                           value={props.newPostTextDialogs}/></div>
            <div>
                <button onClick={btnClick}>send</button>
            </div>
        </div>


    </div>
}
export default Dialogs