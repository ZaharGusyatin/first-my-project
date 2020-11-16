import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    "API-KEY": "0d8c134b-4a97-4911-93f4-a06a7dca9c4c"


})
export const UsersAPI={
    getUsers(currentPage = 1, pageSize = 5){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => response.data)
    },
    getUsers2(userId=1){
        return instance.get('profile/'+userId
        ).then(response => response.data)
    },
    getUsers3(){
        return instance.get('auth/me'
        ).then(response => response.data)
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
