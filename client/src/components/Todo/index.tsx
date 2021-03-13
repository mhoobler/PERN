import React from "react";

type Props = {
  todo: TodoType;
};

const Todo: React.FC<Props> = ({ todo }) => {
  return (
    <div>
      <div>{todo.todo_id}</div>
      <div>{todo.name}</div>
      <div>{todo.description}</div>
    </div>
  );
};

export default Todo;
