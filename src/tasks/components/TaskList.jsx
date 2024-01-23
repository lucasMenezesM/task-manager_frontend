import TaskItem from "./TaskItem";

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
  if (DUMMY_TASKS.length === 0)
    return <div>Start creating your daily tasks here!</div>;

  return (
    <div className="task-list__container ">
      {DUMMY_TASKS.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </div>
  );
}
