"use server";

import { clearAuthCookies } from "@/infra/auth/auth-cookies";

export async function logoutUseCase() {
  const cookiesToClear = ["access", "refresh"];

  await clearAuthCookies(cookiesToClear);
}
