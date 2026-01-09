import axios from "axios";
import { authInterceptor } from "./interceptors/auth.interceptor";

export const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL,
});

axiosInstance.interceptors.request.use(authInterceptor);
