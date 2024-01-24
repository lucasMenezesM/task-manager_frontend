import { useEffect, useState } from "react";

const useAuthentication = () => {
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = (userId, token, user) => {
    setUserId(userId);
    setToken(token);
    setUser(user);

    localStorage.setItem(
      "authUser",
      JSON.stringify({ userId: userId, token: token, user: user })
    );
  };

  const logout = () => {
    setUserId(null);
    setToken(null);
    setUser(null);
    localStorage.removeItem("authUser");
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("authUser"));
    if (userData) {
      console.log(userData);
      setUserId(userData.userId);
      setToken(userData.token);
      setUser(userData.user);
    }
  }, []);

  return { login, logout, userId, token, user };
};

export default useAuthentication;
