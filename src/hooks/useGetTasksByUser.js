import { useContext, useEffect, useState } from "react";
import axios from "axios";
import useAuthentication from "./useAuthentication";
import { AuthContext } from "../shared/context/auth-context";

const useGetTasksByUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getTasks = async () => {
      try {
        setIsLoading(true);

        const result = await axios.get(
          process.env.REACT_APP_API + `/tasks/${user.id}`
        );
        setTasks(result.data.tasks);
        console.log(result.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        console.log(err);
      }
    };

    getTasks();
  }, [user]);

  return { isLoading, error, tasks };
};

export default useGetTasksByUser;
