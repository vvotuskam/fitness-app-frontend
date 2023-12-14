import axios from "axios";
import KeycloakService from "./KeycloakService";

const url = "http://localhost:8083/api/users"

const getUsers = async () => {
    try {

        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${KeycloakService.getToken()}`
            }
        })
        console.log(response.data)
        return response.data
    } catch (e) {
        console.error('HTTP error:', e)
    }
}

const getUserRoles = async (userId) => {
    try {
        const url = this.url + "/" + userId + "/roles"
        const response = await axios.get(url , {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${KeycloakService.getToken()}`
            }
        })
        return response.data
    } catch (e) {
        console.error('HTTP error:', e)
    }
}

const createUser = async (user) => {
    try {
        const response = await axios.post(url , user, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${KeycloakService.getToken()}`
            }
        })
        return response.data
    } catch (e) {
        console.error('HTTP error:', e)
    }
}

const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(url + "/" + userId, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${KeycloakService.getToken()}`
            }
        })
        return response.data
    } catch (e) {
        console.error('HTTP error:', e)
    }
}

export const AdminService = {
    getUsers,
    getUserRoles,
    createUser,
    deleteUser
}