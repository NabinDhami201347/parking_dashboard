import { useState } from "react";

const ACCESS_TOKEN_KEY = "access_token";

export function useAuth() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem(ACCESS_TOKEN_KEY));

  const setToken = (token) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    setAccessToken(token);
  };

  const removeToken = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    setAccessToken(null);
  };

  return {
    accessToken,
    setToken,
    removeToken,
  };
}
