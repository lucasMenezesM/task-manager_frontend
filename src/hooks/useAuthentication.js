import { useState } from "react";

const useAuthentication = () => {
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  const login = (userId, token) => {
    setUserId(userId);
    setToken(token);
    localStorage.setItem(
      "authUser",
      JSON.stringify({ userId: userId, token: token })
    );
  };

  const logout = () => {
    setUserId(null);
    setToken(null);
    localStorage.removeItem("authUser");
  };

  return { login, logout, userId, token };
};

export default useAuthentication;
