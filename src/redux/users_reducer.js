const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_USERS = 'users';
const SET_CURRENT_PAGE = 'currentPage';
const SET_TOTAL_USER_COUNT= 'setTotalUserCount';
const SPINNER_IS= 'SPINNER_IS';
let initialState = {
    users: [],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching:false

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

        case SPINNER_IS:{
            return {...state, isFetching: action.isFetching}
            //склеиваем два массива
        }

        default:
            return state
    }


}
export let follow = (userId) => ({type: FOLLOW, userId})
export let unfollow = (userId) => ({type: UNFOLLOW, userId})
export let setUsers = (users) => ({type: SET_USERS, users})
export let spinnerIs = (isFetching) => ({type: SPINNER_IS, isFetching})
export let setTotalUserCount = (totalUserCount) => ({type: SET_TOTAL_USER_COUNT, count:totalUserCount})
export let setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export default usersReducer