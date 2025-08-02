import axios from "axios";

const instance = axios.create({
  baseURL: "https://mini-linkidln-1.onrender.com/api", // Production URL
  //baseURL: "http://localhost:5000/api", // Local development
});


instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
