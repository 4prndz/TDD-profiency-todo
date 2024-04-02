/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { Todo } from "./Todo";

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

  it("completes an item when clicked", async () => {
    render(<Todo />);

    const input = screen.getByTestId("todo-input");
    act(() => {
      userEvent.type(input, "buy some milk");
      userEvent.type(input, "{enter}");
    });

    const item = screen.getByText("buy some milk");
    await waitFor(() => {
      expect(item).toBeInTheDocument();
    });
    act(() => {
      userEvent.click(item);
    });
    await waitFor(() => {
      expect(item).toHaveAttribute("data-completed", "true");
    });
  });

  it("delete an item when the button is clicked", async () => {
    render(<Todo />);

    const input = screen.getByTestId("todo-input");
    act(() => {
      userEvent.type(input, "buy some milk");
      userEvent.type(input, "{enter}");
    });

    const item = screen.getByText("buy some milk");
    await waitFor(() => {
      expect(item).toBeInTheDocument();
    });

    const deleteButton = screen.getByTestId("delete-button");
    act(() => {
      userEvent.click(deleteButton);
    });
    await waitFor(() => {
      expect(item).not.toBeInTheDocument();
    });
  });

  it("renders a list of items", async () => {
    const items = [
      {
        id: "1",
        content: "buy some milk",
        completed: false,
      },
      {
        id: "2",
        content: "learn react",
        completed: true,
      },
      {
        id: "3",
        content: "clean the house",
        completed: false,
      },
    ];

    render(<Todo items={items} />);
    await waitFor(() => {
      expect(screen.getByText("clean the house")).toBeInTheDocument();
    });
  });

  it("'renders different groups of items", async () => {
    const items = [
      {
        id: "1",
        content: "buy some milk",
        completed: false,
      },
      {
        id: "2",
        content: "learn react",
        completed: true,
      },
      {
        id: "3",
        content: "clean the house",
        completed: false,
      },
    ];

    render(<Todo items={items} />);
    const todoItems = screen.getAllByTestId("todo-item");

    await waitFor(() => {
      expect(todoItems.length).toEqual(items.length);
    });

    const completedTab = screen.getByTestId("todo-completed");
    act(() => {
      userEvent.click(completedTab);
    });
    expect(screen.getAllByTestId("todo-item").length).toEqual(1);
    expect(screen.getByText("learn react")).toBeInTheDocument();

    const totalTab = screen.getByTestId("todo-total");
    act(() => {
      userEvent.click(totalTab);
    });

    expect(screen.getAllByTestId("todo-item").length).toEqual(3);
  });

  it("renders active tab", async () => {
    const items = [
      {
        id: "1",
        content: "buy some milk",
        completed: false,
      },
      {
        id: "2",
        content: "learn react",
        completed: true,
      },
      {
        id: "3",
        content: "clean the house",
        completed: false,
      },
    ];

    render(<Todo items={items} />);
    const todoItems = screen.getAllByTestId("todo-item");
    await waitFor(() => {
      expect(todoItems.length).toEqual(items.length);
    });

    const activeTab = screen.getByTestId("todo-active");
    act(() => {
      userEvent.click(activeTab);
    });
    expect(screen.getAllByTestId("todo-item").length).toEqual(2);
  });
});
