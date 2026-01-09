import { axiosInstance } from "../../infra/http/axios-instance";
import { LoginSchema } from "@/features/auth/signin/signin-schema";
import { AUTH_ENDPOINTS } from "./auth.endpoints";

export const AuthServices = {
  login(payload: LoginSchema) {
    return axiosInstance.post(AUTH_ENDPOINTS.login, payload);
  },
  profile: () => axiosInstance.get(AUTH_ENDPOINTS.profile),
  revalidateAccess: async (refresh: string) => {
    const { data } = await axiosInstance.post(AUTH_ENDPOINTS.refreshToken, {
      refresh: refresh,
    });

    console.log(data);
  },
};
