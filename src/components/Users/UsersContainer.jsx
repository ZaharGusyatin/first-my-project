import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsers, unFollowAC} from "../../redux/users_reducer";

let mapStateToProps=(state)=>{
    //функция для пропсов данных
    return{
        users: state.usersPage.users
        //это пропс, который будет закинут в Юзерс, находится в редакс-стор

    }
}
let mapDispatchToProps=(dispatch)=>{
    //функция для коолбеков
    return{
        follow:(userId)=>{dispatch(followAC(userId))},
        unfollow:(userId)=>{dispatch(unFollowAC(userId))},
        setUsers:(users)=>{dispatch(setUsers(users))}

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users)
