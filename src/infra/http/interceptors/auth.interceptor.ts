import { InternalAxiosRequestConfig } from "axios";

export function authInterceptor(config: InternalAxiosRequestConfig) {
  const accessToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("access="))
    ?.split("=")[1];

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  console.log(accessToken);

  return config;
}
