const AUTH_BASE = "/auth";

export const AUTH_ENDPOINTS = {
  login: `${AUTH_BASE}/token/`,
  refreshToken: `${AUTH_BASE}/token/refresh/`,
  forgotPassword: `${AUTH_BASE}/password/reset/`,
  resetPassword: `${AUTH_BASE}/password/confirm/`,
  profile: "/users/me/",
};
