import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem=(props)=>{
    let path="/dialogs/" + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message=(props)=> {
   return <div className={s.dialog}>{props.message}</div>
}



const Dialogs = () => {

    let dialogs=[
        {id:1,name:'Zahar1'},
        {id:2,name:'Zahar2'},
        {id:3,name:'Zahar3'},
        {id:4,name:'Zahar4'},
        {id:5,name:'Zahar5'},
        {id:6,name:'Zahar6'},
    ]


    let messages=[
        {id:1,message:'Hello1'},
        {id:2,message:'Hello2'},
        {id:3,message:'Hello3'},
        {id:4,message:'Hello4'},
        {id:5,message:'Hello5'}
    ]
    let messageElements=messages.map(m=><Message message={m.message} id={m.id} />)
    let dialogsElements=dialogs.map(d =><DialogItem name={d.name} id={d.id}/>);

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