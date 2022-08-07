import axios from 'axios';

const api = axios.create({
    baseURL: `http://${process.env.REACT_APP_HOSTNAME}:3001/api`,
})
export default api;