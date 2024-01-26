import { createContext } from "react";

export const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  user: null,
});
