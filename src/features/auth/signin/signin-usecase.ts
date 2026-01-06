// Services
import { AuthServices } from "@/services/auth/auth.services";

// Types
import { LoginSchema } from "./signin-schema";

// Infra
import { setAuthCookies } from "@/infra/auth/auth-cookies";
import { throwHttpDetail } from "@/infra/http/errors/handle-http-error";

export async function signInUseCase(credentials: LoginSchema) {
  try {
    const tokenResponse = await AuthServices.login(credentials);

    if (!tokenResponse.data?.access || !tokenResponse.data?.refresh) {
      throw new Error("INVALID_TOKEN_RESPONSE");
    }

    await setAuthCookies(tokenResponse.data);

    const profileResponse = await AuthServices.profile();

    return {
      id: profileResponse.data.id,
      email: profileResponse.data.email,
      role: profileResponse.data.role,
    };
  } catch (error: unknown) {
    throwHttpDetail(error);
  }
}
