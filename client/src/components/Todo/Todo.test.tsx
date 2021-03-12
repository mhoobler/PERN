import React from "react";
import ReactDOM from "react-dom";
//import { render, screen, fireEvent } from '@testing-library/react';
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
//import { fireEvent } from '@testing-library/react';

import Todo from "./";
import { TestTodoType } from "./Todo.d";

const date = new Date();

const testTodo: TestTodoType = {
  todo_id: 1,
  name: "testing",
  description: "test description",
  tags: ["zero", "one"],
  added: date,
  completed: date,
};

describe("Testing Todo Component", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Todo todo={testTodo} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should display the same data as the object", async () => {
    render(<Todo todo={testTodo} />);
    const { todo_id, name, description } = testTodo;
    screen.getByText(todo_id);
    screen.getByText(name);
    screen.getByText(description);
  });
});
