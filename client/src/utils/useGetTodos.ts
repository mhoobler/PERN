import { useState, useEffect } from "react";
import API from "./API";

const useGetTodos = (name: string, description: string, tags: string[]) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    API.getFilterTodos({ name, description, tags })
      .then((res) => {
        console.log(res);
        setTodos(res.data.rows);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [name, description, tags]);

  return { todos, isLoading };
};

export default useGetTodos;
