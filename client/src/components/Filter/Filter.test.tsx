import { screen, render, fireEvent } from "@testing-library/react";

import Filter from "./";

describe("Testing Filter Component", () => {
  it("should render without crashing", () => {
    render(<Filter />);
  });

  it("should accept inputs", () => {
    render(<Filter />);
    const tagsInput = screen.getByTestId("filter-tags");

    fireEvent.change(tagsInput, { target: { value: "important" } });

    expect(tagsInput.value).toBe("important");
  });
});
