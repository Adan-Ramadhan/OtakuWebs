import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://backend.ryzendesu.vip",
    timeout: 10000,
})

export default apiClient