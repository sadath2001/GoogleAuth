import axios from 'axios'

const api=axios.create({
    baseURL:'http://localhost:8080/auth/'
})

export const googleAuthorization=(code)=>api.get(`/google?code=${code}`)