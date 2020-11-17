import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    "API-KEY": "03820b8c-395e-46d2-9f9c-d0a3ebd3c99d"


})
export const UsersAPI={
    getUsers(currentPage = 1, pageSize = 5){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => response.data)
    },
    getUsers2(userId){
        return instance.get('profile/'+userId
        )
    },
    getUsers3(){
        return instance.get('auth/me'
        )
    },
    deleteUsers(userId){
        return instance.delete('follow/'+userId
        )
    },
    postUsers(userId){
        return instance.post('follow/'+userId,
        )
    }
}
