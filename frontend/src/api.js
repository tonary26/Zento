import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:8081',
    headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json'
    },
    timeout: 5000
})

export default api