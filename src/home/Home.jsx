import { useState } from "react";
import { Container } from "@mui/material";

import TaskList from "../tasks/components/TaskList";
import OptionsTabs from "./components/OptionsTabs";

export default function Home() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div>
      <Container sx={{ mx: 7 }}>
        <OptionsTabs currentTab={currentTab} onSetCurrentTab={setCurrentTab} />
        {currentTab === 0 && <TaskList />}
      </Container>
    </div>
  );
}
