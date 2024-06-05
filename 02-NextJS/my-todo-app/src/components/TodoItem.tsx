import { useState } from 'react'
import { FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa'

interface TodoItemProps {
    id: number
    text: string
    onDelete: (id: number) => void
    onUpdate: (id: number, newText: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newText, setNewText] = useState(text)

    return (
        <div className="flex items-center justify-between p-2 m-2 bg-white shadow-lg rounded-lg gap-5">
            {isEditing ? (
                <input
                    className="flex-grow p-1 border rounded"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <span>{text}</span>
            )}
            <div className="flex items-center space-x-2 gap-5">
                {isEditing ? (
                    <>
                        <FaCheck
                            className="text-green-500 cursor-pointer"
                            onClick={() => {
                                onUpdate(id, newText)
                                setIsEditing(false)
                            }}
                        />
                        <FaTimes
                            className="text-red-500 cursor-pointer"
                            onClick={() => setIsEditing(false)}
                        />
                    </>
                ) : (
                    <>
                        <FaEdit
                            className="text-blue-500 cursor-pointer"
                            onClick={() => setIsEditing(true)}
                        />
                        <FaTrash
                            className="text-red-500 cursor-pointer"
                            onClick={() => onDelete(id)}
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export default TodoItem
