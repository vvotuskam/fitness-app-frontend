import axios from "axios";
import KeycloakService from "./KeycloakService";

const url = "http://localhost:8080/api/train"

const getAll = async () => {
    try {
        const response = await axios.get(url, {
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

const getAllApplied = async () => {
    try {
        const response = await axios.get(url + '/applied', {
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

const getById = async (id) => {
    try {
        const response = await axios.get(`${url}/${id}`, {
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

const create = async (data) => {
    try {
        const request = {
            name: data.name,
            description: data.description,
            date: data.date,
            time: data.time,
            instructorFullName: KeycloakService.getFullName(),
            instructorEmail: KeycloakService.getUsername()
        }

        const response = await axios.post(`${url}/create`, request, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${KeycloakService.getToken()}`
            },

        })
        return response.data
    } catch (e) {
        console.error('HTTP error:', e)
    }
}

const apply = async (id) => {
    try {
        await axios.patch(`${url}/apply/${id}`, null,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${KeycloakService.getToken()}`
            },

        })
    } catch (e) {
        console.error('HTTP error:', e)
    }
}

const cancel = async (id) => {
    try {
        await axios.patch(`${url}/cancel/${id}`, null,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${KeycloakService.getToken()}`
            },

        })
    } catch (e) {
        console.error('HTTP error:', e)
    }
}

const TrainService = {
    getAll,
    getAllApplied,
    getById,
    create,
    apply,
    cancel
}

export default TrainService