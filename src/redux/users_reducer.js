const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_USERS = 'users';
let initialState = {
    users: []
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
            return {...state, users: [...state.users,...action.users]}
            //склеиваем два массива
        }

        default:
            return state
    }


}
export let followAC = (userId) => ({type: FOLLOW, userId})
export let unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export let setUsers = (users) => ({type: SET_USERS, users})
export default usersReducer