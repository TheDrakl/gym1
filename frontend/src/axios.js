import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-em05.onrender.com/api/',
  // headers: {
  //   'X-API-KEY': `Bearer ${process.env.VUE_APP_SECRET_API_KEY}`,  
  // }
});

export default api;