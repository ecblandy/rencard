// Services
import { AuthServices } from "@/services/auth/auth.services";

// Types
import { LoginSchema } from "./signin-schema";

// Infra
import { setAuthCookies } from "@/infra/auth/auth-cookies";

export async function signInUseCase(credentials: LoginSchema) {
  try {
    const tokenResponse = await AuthServices.login(credentials);

    if (!tokenResponse.data?.access || !tokenResponse.data?.refresh) {
      throw new Error("INVALID_TOKEN_RESPONSE");
    }

    await setAuthCookies(tokenResponse.data);

    const profileResponse = await AuthServices.profile();
    console.log(profileResponse);
    console.log(profileResponse.data);

    return {
      id: profileResponse.data.id,
      email: profileResponse.data.email,
      role: profileResponse.data.role,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error("INVALID_CREDENTIALS");
    }

    if (error.message === "INVALID_TOKEN_RESPONSE") {
      throw new Error("AUTH_INCONSISTENT_STATE");
    }

    throw new Error("SIGN_IN_FAILED");
  }
}
