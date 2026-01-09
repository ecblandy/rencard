import { jwtDecode } from "jwt-decode";

interface JwtDecodeTokenPayload {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
}

export function jwtDecodeToken(token: string) {
  try {
    return jwtDecode<JwtDecodeTokenPayload>(token);
  } catch (err) {
    console.error(err);
    return null;
  }
}
