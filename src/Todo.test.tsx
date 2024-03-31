/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor } from "@testing-library/react";
import { Todo } from "./Todo";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Todos application", () => {
  it("renders the title", () => {
    render(<Todo />);
    expect(screen.getByText("todos")).toBeInTheDocument();
  });

  it("adds item to the list", async () => {
    render(<Todo />);

    const input = screen.getByTestId("todo-input");

    act(() => {
      userEvent.type(input, "buy some milk");
      userEvent.type(input, "{enter}");
    });

    await waitFor(() => {
      expect(screen.getByText("buy some milk")).toBeDefined();
    });
  });
});
