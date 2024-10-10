import React from "react";
import "./TodoItem.scss";
import Checkmark from "../Checkmark/Checkmark";

type TodoItemProps = {
    todo: { id: number; text: string; completed: boolean };
    toggleTodo: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
    return (
        <div className="todo-item">
            <Checkmark
                click={() => toggleTodo(todo.id)}
                checked={todo.completed}
            />
            <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
        </div>
    );
};

export default TodoItem;
