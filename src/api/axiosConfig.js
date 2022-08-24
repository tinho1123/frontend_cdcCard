import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.REACT_APP_HOSTNAME}/api`,
})
export default api;