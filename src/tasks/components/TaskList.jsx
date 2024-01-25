import TaskItem from "./TaskItem";
import useGetTasksByUser from "../../hooks/useGetTasksByUser";
import Skeleton from "@mui/material/Skeleton";

import "./TaskList.css";

const DUMMY_TASKS = [
  {
    title: "a title",
    description: "A brief description of this task",
    completed: false,
    creation_date: new Date(),
    user_id: "u1",
  },
  {
    title: "a title2 ",
    description: "A brief description of this task",
    completed: false,
    creation_date: new Date(),
    user_id: "u2",
  },
];

export default function TaskList() {
  const { isLoading, tasks, error } = useGetTasksByUser();
  console.log("tasks: ", tasks);

  return (
    <div className="task-list__container ">
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
      ) : tasks.length === 0 ? (
        <div>Start creating your daily tasks here!</div>
      ) : (
        tasks.map((task, index) => <TaskItem key={index} task={task} />)
      )}
    </div>
  );
}
