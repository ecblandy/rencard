import { NextRequest, NextResponse } from "next/server";
import { jwtDecodeToken } from "./utils/decode-jwt";

const PUBLIC_ROUTES = [{ path: "/auth" }, { path: "/" }];

const WHEN_NOT_AUTH = "/auth/signin";

export async function proxy(request: NextRequest) {
  const cookies = request.cookies;
  const { pathname } = request.nextUrl;
  const baseUrl = `${request.nextUrl.protocol}//${request.nextUrl.host}`;

  const refreshToken = cookies.get("refresh")?.value;

  // Se for rota pública, permite sempre
  const isPublicRoute = PUBLIC_ROUTES.some((route) =>
    pathname.startsWith(route.path)
  );
  if (isPublicRoute) return NextResponse.next();

  // Verifica se o refresh token existe e é válido
  let isExpired = true;
  if (refreshToken) {
    const decoded = jwtDecodeToken(refreshToken);
    if (decoded && typeof decoded.exp === "number") {
      const now = Math.floor(Date.now() / 1000);
      isExpired = decoded.exp < now;
    }
  }

  // Redireciona se não houver refresh token ou se expirou
  if (!refreshToken || isExpired) {
    return NextResponse.redirect(`${baseUrl}${WHEN_NOT_AUTH}?redirected=true`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
