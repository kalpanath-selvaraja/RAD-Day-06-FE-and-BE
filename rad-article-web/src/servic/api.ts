import  axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/v1",
})

api.interceptors.request.use((config) => {

    const accessToken = localStorage.getItem("accessToken");

    // config.url



    const PUBLIC_ENDPOINTS = ["/auth/login", "/auth/register", "/auth/refresh"];

    const isPublic = PUBLIC_ENDPOINTS.some((url) => config.url?.includes(url));

    if(!isPublic && accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
})

// api.interceptors.response

export default api