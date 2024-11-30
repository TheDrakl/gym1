import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-em05.onrender.com/api/',
  // headers: {
  //   'X-API-KEY': `${import.meta.env.VITE_APP_SECRET_API_KEY}`,
  //   'Content-Type': 'application/json', 
  // }
});

export default api;