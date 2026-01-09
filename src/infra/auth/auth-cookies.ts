"use server";
import { cookies } from "next/headers";

// Utils
import { jwtDecodeToken } from "@/utils/decode-jwt";

export async function setAuthCookies(tokens: {
  access: string;
  refresh: string;
}) {
  console.log("entrou no setAuthCookies");
  const cookieStore = await cookies();
  const now = Math.floor(Date.now() / 1000);

  const decodedAccess = jwtDecodeToken(tokens.access);
  if (!decodedAccess?.exp) {
    throw new Error("Access token inválido");
  }

  cookieStore.set("access", tokens.access, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: decodedAccess.exp - now,
  });

  const decodedRefresh = jwtDecodeToken(tokens.refresh);

  cookieStore.set("refresh", tokens.refresh, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge:
      decodedRefresh?.exp && decodedRefresh.exp > now
        ? decodedRefresh.exp - now
        : 60 * 60 * 24 * 7,
  });
}

export async function clearAuthCookies(cookieNames: string[]) {
  const cookieStore = await cookies();
  cookieNames.forEach((name) => {
    cookieStore.set(name, "", { maxAge: 0, path: "/" });
  });
}
