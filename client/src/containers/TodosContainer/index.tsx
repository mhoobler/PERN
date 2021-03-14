import React from "react";

import Todo from "../../components/Todo";

import useGetTodos from "../../utils/useGetTodos";

type Props = {
  filter: FilterObject;
};

const TodosContainer: React.FC<Props> = ({ filter }) => {
  //Add Loading state later
  const { todos } = useGetTodos(
    filter.name,
    filter.description,
    filter.tags
  );
  return (
    <div className="todos-container">
      {todos.map((e: TodoType, i: number) => {
        return <Todo todo={e} key={e.todo_id} />;
      })}
    </div>
  );
};

export default TodosContainer;
