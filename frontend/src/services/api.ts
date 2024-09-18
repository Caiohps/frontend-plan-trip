import axios from 'axios';

const host = import.meta.env.VITE_REACT_APP_API;

const api = axios.create({
    baseURL: `${host}`
})

export default api;