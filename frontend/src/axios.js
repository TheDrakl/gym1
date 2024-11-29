import axios from 'axios';

const api = axios.create({
  baseURL: 'http://backend-em05.onrender.com/api/',
});

export default api;