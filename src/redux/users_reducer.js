const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_USERS = 'users';
const SET_CURRENT_PAGE = 'currentPage';
const SET_TOTAL_USER_COUNT= 'setTotalUserCount';
let initialState = {
    users: [],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1

}
const usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }


        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        }
        case SET_USERS:{
            return {...state, users: action.users}
            //склеиваем два массива
        } case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
            //склеиваем два массива
        }
        case SET_TOTAL_USER_COUNT:{
            return {...state, totalUsersCount: action.count}
            //склеиваем два массива
        }

        default:
            return state
    }


}
export let followAC = (userId) => ({type: FOLLOW, userId})
export let unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export let setUsers = (users) => ({type: SET_USERS, users})
export let setTotalUserCount = (totalUserCount) => ({type: SET_TOTAL_USER_COUNT, count:totalUserCount})
export let setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export default usersReducer