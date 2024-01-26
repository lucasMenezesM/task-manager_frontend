import { useContext, useEffect, useState } from "react";

import Skeleton from "@mui/material/Skeleton";
import axios from "axios";

import OptionsTabs from "../../home/components/OptionsTabs";
import TaskItem from "./TaskItem";
import TasksStats from "./TasksStats";
import { AuthContext } from "../../shared/context/auth-context";
import { useNavigate } from "react-router-dom";
import "./TaskList.css";

export default function TaskList({ tasks, isLoading }) {
  const [currentTab, setCurrentTab] = useState(0);
  const [tasksOutPut, setTasksOutPut] = useState(tasks);

  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleCompleteTask(taskId) {
    try {
      const result = await axios.patch(
        process.env.REACT_APP_API + `/tasks/${taskId}`,
        {},
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(result);
      // setTasksOutPut(
      //   tasks.map((task) =>
      //     task._id === taskId
      //       ? { ...task, completed: !result.data.task.completed }
      //       : task
      //   )
      // );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (currentTab === 0) {
      setTasksOutPut(tasks);
    }

    if (currentTab === 1) {
      setTasksOutPut(tasks.filter((task) => task.completed === true));
    }

    if (currentTab === 2) {
      setTasksOutPut(tasks.filter((task) => task.completed === false));
    }
  }, [currentTab, tasks]);

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
            <>
              {tasksOutPut.map((task, index) => (
                <TaskItem
                  key={index}
                  task={task}
                  onCompleteTask={handleCompleteTask}
                />
              ))}
              <TasksStats tasks={tasks} />
            </>
          </div>
        </div>
      )}
    </div>
  );
}
