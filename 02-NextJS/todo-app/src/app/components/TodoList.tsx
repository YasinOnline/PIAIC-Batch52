import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";

interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onAddTodo: (title: string) => void;
    onToggleCompleted: (id: string) => void;
    onEditTodo: (id: string, newTitle: string) => void;
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
    todos,
    onAddTodo,
    onToggleCompleted,
    onEditTodo,
    onDeleteTodo,
}) => {
    const [newTodoTitle, setNewTodoTitle] = useState("");

    const handleAddTodo = () => {
        if (newTodoTitle.trim()) {
            onAddTodo(newTodoTitle.trim());
            setNewTodoTitle("");
        }
    };

    const handleEditTodo = (id: string) => {
        const existingTodo = todos.find((todo) => todo.id === id);
        if (existingTodo) {
            // Prompt user for new title (optional)
            const newTitle = prompt("Enter new title for todo:");
            if (newTitle && newTitle.trim()) {
                onEditTodo(id, newTitle.trim());
            }
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Add a new todo"
                    value={newTodoTitle}
                    onChange={(e) => setNewTodoTitle(e.target.value)}
                    className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
                />
                <button className="btn btn-sm ml-2" onClick={handleAddTodo}>
                    Add
                </button>
            </div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleCompleted={() => onToggleCompleted(todo.id)}
                    onEdit={() => handleEditTodo(todo.id)}
                    onDelete={() => onDeleteTodo(todo.id)}
                />
            ))}
        </div>
    );
};

export default TodoList;
