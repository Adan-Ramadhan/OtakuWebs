import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api-anime-v2.vercel.app/otakudesu",
    timeout: 10000,
})

export default apiClient