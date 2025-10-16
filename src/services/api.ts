import axios from "axios";

const api = axios.create({
  baseURL: "https://backend.ryzendesu.vip",
});

export default api;
