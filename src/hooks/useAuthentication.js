import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useAuthentication = () => {
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const login = useCallback((userId, token, user) => {
    setUserId(userId);
    setToken(token);
    setUser(user);

    localStorage.setItem(
      "authUser",
      JSON.stringify({ userId: userId, token: token, user: user })
    );
  }, []);

  const logout = useCallback(() => {
    setUserId(null);
    setToken(null);
    setUser(null);
    localStorage.removeItem("authUser");
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("authUser"));
    if (userData) {
      setUserId(userData.userId);
      setToken(userData.token);
      setUser(userData.user);
    }
  }, []);

  return { login, logout, userId, token, user };
};

export default useAuthentication;

// const login = useCallback((uid, token, expirationDate) => {
//   setToken(token);
//   setUserId(uid);
//   const tokenExpirationDate =
//     expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
//   setTokenExpirationDate(tokenExpirationDate);
//   localStorage.setItem(
//     'userData',
//     JSON.stringify({
//       userId: uid,
//       token: token,
//       expiration: tokenExpirationDate.toISOString()
//     })
//   );
// }, []);
