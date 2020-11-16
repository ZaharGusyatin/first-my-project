import {UsersAPI} from "../api/api";

const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_USERS = 'users';
const SET_CURRENT_PAGE = 'currentPage';
const SET_TOTAL_USER_COUNT = 'setTotalUserCount';
const SPINNER_IS = 'SPINNER_IS';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [ ]

}
const usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.userId === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }


        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.userId === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        }
        case SET_USERS: {
            return {...state, users: action.users}
            //склеиваем два массива
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
            //склеиваем два массива
        }
        case SET_TOTAL_USER_COUNT: {
            return {...state, totalUsersCount: action.count}
            //склеиваем два массива
        }

        case SPINNER_IS: {
            return {...state, isFetching: action.isFetching}
            //склеиваем два массива
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state
    }


}

export const followAccept = (userId) => ({type: FOLLOW, userId})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})
export const unfollowAccept = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const spinnerIs = (isFetching) => ({type: SPINNER_IS, isFetching})
export const setTotalUserCount = (totalUserCount) => ({type: SET_TOTAL_USER_COUNT, count: totalUserCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})


export const getUsers=(currentPage,pageSize)=> {
return (dispatch) => {
        dispatch(spinnerIs(true))
        UsersAPI.getUsers(currentPage,pageSize).then(data => {
            //отправляет на сервак
            spinnerIs(false)
            setUsers(data.items)
            setTotalUserCount(data.totalCount)
        })
    }
}
export const follow=(userId)=> {
    return (dispatch) => {
       dispatch.toggleFollowingProgress(true, userId)
        UsersAPI.postUsers(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followAccept(userId))
            }

           dispatch(toggleFollowingProgress(false, userId))
        })
    }
}
export const unfollow=(userId)=> {
    return (dispatch) => {
        dispatch.toggleFollowingProgress(true, userId)
        UsersAPI.deleteUsers(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowAccept(userId))
            }

            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}
export default usersReducer