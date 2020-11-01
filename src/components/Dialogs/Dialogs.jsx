import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog=(props)=>{
    let path="/dialogs/" + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message=(props)=> {
   return <div className={s.dialog}>{props.message}</div>
}



const Dialogs = () => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <Dialog name='Zahar1' id='1'/>
            <Dialog name='Zahar2' id='2'/>
            <Dialog name='Zahar3' id='3'/>
            <Dialog name='Zahar4' id='4'/>
            <Dialog name='Zahar5' id='5'/>
            <Dialog name='Zahar6' id='6'/>
        </div>
        <div className={s.messages}>
            <Message message="hello1"/>
            <Message message="hello2"/>
            <Message message="hello3"/>
            <Message message="hello4"/>

        </div>

    </div>
}
export default Dialogs