import React from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";

interface TodoItemProps {
    todo: { id: string; title: string; completed: boolean };
    onToggleCompleted: (id: string) => void;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleCompleted, onEdit, onDelete }) => {
    return (
        <div className="flex justify-between items-center py-2 px-4 border-b border-gray-200">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id={todo.id}
                    checked={todo.completed}
                    onChange={() => onToggleCompleted(todo.id)}
                    className="mr-2"
                />
                <label htmlFor={todo.id} className={`text-gray-700 ${todo.completed && "line-through"}`}>
                    {todo.title}
                </label>
            </div>
            <div className="flex space-x-2">
                <button className="btn btn-sm btn-outline" onClick={() => onEdit(todo.id)}>
                    <AiOutlineEdit />
                </button>
                <button className="btn btn-sm btn-outline btn-error" onClick={() => onDelete(todo.id)}>
                    <AiOutlineCloseCircle />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
