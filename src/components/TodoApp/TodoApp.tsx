import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import Footer from "../Footer/Footer";
import "./TodoApp.scss";

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
            setNewTodo("");
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    const activeCount = todos.filter((todo) => !todo.completed).length;

    return (
        <div className="todo-app">
            <h1>todos</h1>
            <input
                type="text"
                placeholder="What needs to be done?"
                aria-label="What needs to be done?"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTodo()}
            />
            <div className="todo-list">
                {filteredTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                    />
                ))}
            </div>
            <Footer
                activeCount={activeCount}
                clearCompleted={clearCompleted}
                setFilter={setFilter}
            />
        </div>
    );
};

export default TodoApp;
