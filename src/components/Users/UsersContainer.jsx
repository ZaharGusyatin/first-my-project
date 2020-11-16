import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../redux/users_reducer";

import Spinner from "../common/Spinner/Spinner";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pages) => {
        this.props.getUsers(pages,this.props.pageSize)

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
                followingInProgress={this.props.followInProgress}

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
        isFetching: state.usersPage.isFetching,
        followInProgress:state.usersPage.followingInProgress

        //это пропс, который будет закинут в Юзерс, находится в редакс-стор

    }

}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersContainer)
