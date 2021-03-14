import React, { useContext } from "react";
import "./App.css";

import FiltersContainer from "./containers/FiltersContainer";
import TodosContainer from "./containers/TodosContainer";
import InputTodo from "./components/InputTodo";

import { AppContext } from "./contexts/AppContext";

const App: React.FC = () => {
  const { state } = useContext(AppContext);

  const { filters } = state;
  const keys = Object.keys(filters);

  return (
    <div className="App">
      <InputTodo />
      <FiltersContainer filters={filters} />
      {keys.map((e: string) => {
        return <TodosContainer filter={filters[parseInt(e)]} key={e} />;
      })}
    </div>
  );
};

export default App;
