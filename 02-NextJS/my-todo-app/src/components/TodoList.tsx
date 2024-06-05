import { useState } from 'react'
import TodoItem from './TodoItem'

interface Todo {
    id: number
    text: string
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [newTodo, setNewTodo] = useState('')

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: newTodo.trim() }])
            setNewTodo('')
        }
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const updateTodo = (id: number, newText: string) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)))
    }

    return (
        <div className="w-4/5 mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
            <div className="flex mb-4">
                <input
                    className="flex-grow p-2 border rounded"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="Add a new task..."
                />
                <button
                    className="ml-2 p-2 bg-blue-500 text-white rounded"
                    onClick={addTodo}
                >
                    Add
                </button>
            </div>
            <div>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        onDelete={deleteTodo}
                        onUpdate={updateTodo}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList
