import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY" : "8824ceb4-d76e-4c2d-84eb-bcba650d97c7" }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    deleteFollow(id){
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}
