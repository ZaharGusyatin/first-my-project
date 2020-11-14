import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    spinnerIs,
    unfollow
} from "../../redux/users_reducer";
import * as axios from "axios";

import Spinner from "../common/Spinner/Spinner";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.spinnerIs(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            //отправляет на сервак
            this.props.spinnerIs(false)
            debugger
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    onPageChanged = (pages) => {
        this.props.setCurrentPage(pages)
        this.props.spinnerIs(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pages}&count=${this.props.pageSize}`).then(response => {
            //отправляет на сервак
            this.props.spinnerIs(false)
            debugger
            this.props.setUsers(response.data.items)

        })
    }

    render() {


        return <>
            {this.props.isFetching ? <Spinner/> : null}


            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}

            />
        </>
    }


}

let mapStateToProps = (state) => {
    //функция для пропсов данных
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

        //это пропс, который будет закинут в Юзерс, находится в редакс-стор

    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    spinnerIs
})(UsersContainer)
