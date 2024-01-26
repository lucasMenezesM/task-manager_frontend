import { useContext } from "react";

import useGetTasksByUser from "../hooks/useGetTasksByUser";
import TaskList from "../tasks/components/TaskList";

import SpinnerComponent from "../shared/components/Spinner";
import EmptyTasks from "./pages/EmptyTasks";
import InitialPage from "./pages/InitialPage";
import "./Home.css";
import { AuthContext } from "../shared/context/auth-context";

export default function Home() {
  // const { user } = useAuthentication();
  const { isLoading, tasks, error } = useGetTasksByUser();
  const { user, isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <InitialPage />;
  }

  if (isLoading) return <SpinnerComponent />;

  if (tasks.length === 0) return <EmptyTasks />;

  return (
    <div>
      <div className="home__container">
        <TaskList isLoading={isLoading} tasks={tasks} />
      </div>
    </div>
  );
}
