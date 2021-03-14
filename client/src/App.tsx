import React, { useState, useEffect } from "react";
import "./App.css";

import Todo from "./components/Todo";
import InputTodo from "./components/InputTodo";
import Filter from "./components/Filter";

import {AppProvider} from './contexts/AppContext';

import API from "./utils/API";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    API.getAllTodos()
      .then((res) => {
        console.log(res);
        const rows: TodoType[] = res.data.rows;
        setTodos(rows);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <AppProvider>
      <InputTodo />
      <Filter />
      <div className="todo-container">
        {todos.map((e: TodoType) => {
          if (!e.name) console.log(e);
          return <Todo todo={e} key={e.todo_id} />;
        })}
      </div>
      </AppProvider>
    </div>
  );
};

export default App;
