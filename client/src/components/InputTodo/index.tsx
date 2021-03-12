import React from "react";

const InputTodo: React.FC = () => {
  return (
    <div>
      <form>
        <label htmlFor="todo-name-input">Name:</label>
        <input type="text" id="todo-name-input" />
        <label htmlFor="todo-description-input">Description:</label>
        <input type="text" id="todo-description-input" />
        <label htmlFor="todo-tags-input">Tags:</label>
        <input type="text" id="todo-tags-input" />
      </form>
    </div>
  );
};

export default InputTodo;
