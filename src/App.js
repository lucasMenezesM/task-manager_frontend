import { Outlet } from "react-router-dom";
import SideBar from "./shared/components/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "./shared/context/auth-context";

import "./App.css";
import useAuthentication from "./hooks/useAuthentication";

function App() {
  const { user, login, logout, token } = useAuthentication();

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isLoggedIn: !!user,
          login: login,
          logout: logout,
          user: user,
          token: token,
        }}
      >
        <SideBar />
        <main>
          <Outlet />
        </main>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
