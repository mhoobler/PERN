import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";

import InputTodo from "./";

describe("Testing InputTodo Component", () => {
  it("should render without crashing", () => {
    render(<InputTodo />);
  });

  it("should accept inputs", () => {
    render(<InputTodo />);
    const nameInput = screen.getByLabelText("Name:");
    const descriptionInput = screen.getByLabelText("Description:");
    const tagsInput = screen.getByLabelText("Tags:");

    fireEvent.change(nameInput, { target: { value: "nameTest" } });
    fireEvent.change(descriptionInput, {
      target: { value: "descriptionTest" },
    });
    fireEvent.change(tagsInput, { target: { value: "tags, test" } });

    expect(nameInput.value).toBe("nameTest");
    expect(descriptionInput.value).toBe("descriptionTest");
  });

  //  it('should failed without a name', () => {
  //  });

  //  it('should send a POST request', () => {
  //  })
});
