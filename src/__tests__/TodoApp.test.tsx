import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "../components/TodoApp/TodoApp";
import "@testing-library/jest-dom";

test("marks a task as completed", async () => {
    render(<TodoApp />);

    const task = screen.getByText("What needs to be done?");

    const checkbox = screen.getByRole("checkbox");

    await userEvent.click(checkbox);

    expect(task).toHaveClass("completed");
});
