import React, { useState } from "react";

import API from "../../utils/API";

type InputsTodoType = {
  name: string;
  description: string;
  tags: string;
};

const InputTodo: React.FC = () => {
  const [inputsTodo, setInputsTodo] = useState<InputsTodoType>({
    name: "",
    description: "",
    tags: "",
  });

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;
    setInputsTodo({
      ...inputsTodo,
      [name]: value,
    });
  };

  const submitTodo = (evt: React.MouseEvent) => {
    evt.preventDefault();
    const tagsArr = inputsTodo.tags.replace(" ", "").split(",");
    const newTodo: NewTodoType = {
      ...inputsTodo,
      tags: tagsArr,
    };
    console.log(newTodo);
    API.postNewTodo(newTodo)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <label htmlFor="todo-name-input">Name:</label>
        <input
          onChange={handleInput}
          name={"name"}
          value={inputsTodo.name}
          type="text"
          id="todo-name-input"
        />
        <label htmlFor="todo-description-input">Description:</label>
        <input
          onChange={handleInput}
          name={"description"}
          value={inputsTodo.description}
          type="text"
          id="todo-description-input"
        />
        <label htmlFor="todo-tags-input">Tags:</label>
        <input
          onChange={handleInput}
          name={"tags"}
          value={inputsTodo.tags.toString()}
          type="text"
          id="todo-tags-input"
        />
        <button onClick={submitTodo}>Submit Todo</button>
      </form>
    </div>
  );
};

export default InputTodo;
