import React from 'react'
import {addPostActionCreatorDialogs, updateNewPostTextActionCreatorDialogs} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps=(state)=>{
    return{
        messagesPage: state.messagesPage,


    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        addPostDialogs:()=>{dispatch(addPostActionCreatorDialogs())},
        updateNewPostTextDialogs:(text)=>{
            let action = updateNewPostTextActionCreatorDialogs(text)
         dispatch(action)
        }

    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs)