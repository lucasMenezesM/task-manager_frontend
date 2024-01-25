import { useState, useEffect } from "react";
import { Container } from "@mui/material";

import TaskList from "../tasks/components/TaskList";
import OptionsTabs from "./components/OptionsTabs";
import useAuthentication from "../hooks/useAuthentication";

import InitialPage from "./pages/InitialPage";
import "./Home.css";

export default function Home() {
  const [currentTab, setCurrentTab] = useState(0);
  const { user } = useAuthentication();

  if (!user) {
    return <InitialPage />;
  }

  return (
    <div>
      <div className="home__container">
        <div className="options-tab">
          <OptionsTabs
            currentTab={currentTab}
            onSetCurrentTab={setCurrentTab}
          />
        </div>
        {currentTab === 0 && <TaskList />}
      </div>
    </div>
  );
}
