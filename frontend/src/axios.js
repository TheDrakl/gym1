import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-em05.onrender.com/api/',
});

export default api;