"use server";

import { clearAuthCookies } from "@/infra/auth/auth-cookies";

export async function logoutAction() {
  await clearAuthCookies(["access", "refresh"]);
}
