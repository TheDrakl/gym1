import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: apiUrl || "http://localhost:8000/api/",
});

export default api;
