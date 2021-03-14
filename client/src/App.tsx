import React, { useContext } from "react";
import "./App.css";

import FiltersContainer from './containers/FiltersContainer';
import TodosContainer from './containers/TodosContainer';
import InputTodo from "./components/InputTodo";

import {AppContext} from './contexts/AppContext';

const App: React.FC = () => {
  const {state} = useContext(AppContext);

  const {filters, todoContainers} = state;

  return (
    <div className="App">
      <InputTodo />
      <FiltersContainer filters={filters} />
      {todoContainers.map( (e: TodoType[], i: number) => {
        return <TodosContainer todos={e} key={i} />
      })}
    </div>
  );
};

export default App;
