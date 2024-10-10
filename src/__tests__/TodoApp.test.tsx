import { render, fireEvent, screen } from "@testing-library/react";
import TodoApp from "../components/TodoApp/TodoApp";
import "@testing-library/jest-dom";

test("can add a todo", () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("What needs to be done?");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("can toggle a todo as complete", () => {
    render(<TodoApp />);
    fireEvent.change(screen.getByLabelText("What needs to be done?"), {
        target: { value: "Test todo" },
    });
    fireEvent.keyDown(screen.getByLabelText("What needs to be done?"), {
        key: "Enter",
        code: "Enter",
    });

    const todo = screen.getByText("Test todo");
    fireEvent.click(todo);
    expect(todo).toHaveClass("completed");
});
