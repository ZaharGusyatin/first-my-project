import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    "API-KEY": "413e5075-5c15-4011-bc62-564447828686"


})
export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => response.data)
    },
    getUsers2(userId) {
        return instance.get('profile/' + userId
        )
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId
        )
    },
    updateStatus(status){
        return instance.put('profile/status/' ,{status:status}
        )
    },
    getUsers3() {
        return instance.get('auth/me'
        )
    },
    deleteUsers(userId) {
        return instance.delete(`follow/${userId}`)
    },
    postUsers(userId) {
        return instance.post(`follow/${userId}`)
    }
}
