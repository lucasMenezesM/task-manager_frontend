import { useEffect, useState } from "react";
import axios from "axios";
import useAuthentication from "./useAuthentication";

const useGetTasksByUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const { userId } = useAuthentication();

  useEffect(() => {
    const getTasks = async () => {
      try {
        setIsLoading(true);

        const result = await axios.get(
          process.env.REACT_APP_API + `/tasks/${userId}`
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
  }, [userId]);

  return { isLoading, error, tasks };
};

export default useGetTasksByUser;
