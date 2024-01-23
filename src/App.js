import { Outlet } from "react-router-dom";
import SideBar from "./shared/components/SideBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
