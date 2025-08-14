import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://campus-server.vercel.app",
  withCredentials: true, // important for sending cookies
});

export default axiosInstance;
