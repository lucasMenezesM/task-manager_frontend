import { useState } from "react";
import TaskItem from "./TaskItem";

import Skeleton from "@mui/material/Skeleton";

import OptionsTabs from "../../home/components/OptionsTabs";

import "./TaskList.css";

export default function TaskList({ tasks, isLoading }) {
  const [currentTab, setCurrentTab] = useState(0);
  console.log("tasks: ", tasks);

  return (
    <div className="task-list__page ">
      {isLoading ? (
        Array.from(new Array(10)).map((item, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            width={250}
            height={250}
            sx={{ margin: 2 }}
          />
        ))
      ) : (
        <div className="tasks-list__container">
          <div className="options-tab">
            <OptionsTabs
              currentTab={currentTab}
              onSetCurrentTab={setCurrentTab}
            />
          </div>
          <div className="tasks-container">
            {tasks.map((task, index) => (
              <TaskItem key={index} task={task} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
