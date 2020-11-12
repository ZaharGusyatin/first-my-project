import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPage, setTotalUserCount, setUsers, unFollowAC} from "../../redux/users_reducer";

let mapStateToProps=(state)=>{
    //функция для пропсов данных
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
        //это пропс, который будет закинут в Юзерс, находится в редакс-стор

    }
}
let mapDispatchToProps=(dispatch)=>{
    //функция для коолбеков
    return{
        follow:(userId)=>{dispatch(followAC(userId))},
        unfollow:(userId)=>{dispatch(unFollowAC(userId))},
        setUsers:(users)=>{dispatch(setUsers(users))},
        setCurrentPage:(pages)=>{dispatch(setCurrentPage(pages))},
        setTotalUserCount:(totalCount)=>{dispatch(setTotalUserCount(totalCount))}


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users)
