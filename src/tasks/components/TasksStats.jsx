import { BiTask } from "react-icons/bi";
import { GoTasklist } from "react-icons/go";
import { FaRegFaceSadCry } from "react-icons/fa6";
import { ImSad } from "react-icons/im";

import "./TasksStats.css";

export default function TasksStats({ tasks }) {
  const completedNumber = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  const percentage = (completedNumber / totalTasks) * 100;

  console.log(
    `Total tasks: ${totalTasks}, completed: ${completedNumber}, percentage: ${percentage}`
  );

  return (
    <div className="tasks-stats__container">
      <div className="tasks-stats">
        <p>
          You have {tasks.length} tasks.{" "}
          {percentage === 100
            ? "You completed all of them! "
            : percentage === 0
            ? `You didn't complete any of them yet. `
            : `You completed ${percentage.toFixed(2)}% of them `}
          {percentage === 100 ? (
            <BiTask size={25} />
          ) : percentage === 0 ? (
            <ImSad size={25} />
          ) : (
            <GoTasklist size={25} />
          )}
        </p>
      </div>
    </div>
  );
}
