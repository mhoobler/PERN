import { screen, render, fireEvent } from "@testing-library/react";

import Filter from "./";

describe("Testing Filter Component", () => {
  it("should render without crashing", () => {
    render(<Filter />);
  });

  it("should accept inputs", () => {
    render(<Filter />);
    const nameInput = screen.getByTestId("filter-name");
    const descriptionInput = screen.getByTestId("filter-description");
    const tagsInput = screen.getByTestId("filter-tags");

    fireEvent.change(nameInput, { target: { value: "Big Deal" } });
    fireEvent.change(descriptionInput, { target: { value: "Priority" } });
    fireEvent.change(tagsInput, { target: { value: "important" } });

    expect(nameInput.value).toBe("Big Deal");
    expect(descriptionInput.value).toBe("Priority");
    expect(tagsInput.value).toBe("important");
  });
});
