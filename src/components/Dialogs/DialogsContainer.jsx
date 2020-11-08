import React from 'react'
import {addPostActionCreatorDialogs, updateNewPostTextActionCreatorDialogs} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let store = props.store.getState().messagesPage


    let btnClick = () => {
        props.store.dispatch(addPostActionCreatorDialogs())

    }
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreatorDialogs(text)
        props.store.dispatch(action)

    };
    return <Dialogs
        addPostDialogs={btnClick}
        updateNewPostTextDialogs={onPostChange}
        messages={store.messages}
        dialogs={store.dialogs}
        newPostTextDialogs={store.newPostTextDialogs}
    />

}
export default DialogsContainer