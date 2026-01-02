"use server";
import { InternalAxiosRequestConfig } from "axios";
import { cookies } from "next/headers";

export async function authInterceptor(config: InternalAxiosRequestConfig) {
  console.log("interceptor");
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("access")?.value;

  console.log(accessToken, "token");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
}
