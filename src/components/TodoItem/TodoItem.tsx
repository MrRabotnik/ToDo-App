import React from "react";
import "./TodoItem.scss";

type TodoItemProps = {
    todo: { id: number; text: string; completed: boolean };
    toggleTodo: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
        </div>
    );
};

export default TodoItem;
