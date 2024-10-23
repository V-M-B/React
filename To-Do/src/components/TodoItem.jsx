import React, { useState } from 'react';
import { useTodo } from '../context';

export function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false); // Corrected typo
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    
    const { updateTodo, deleteTodo, toggleTodo } = useTodo(); // Updated toggleTodo

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg }); // Update the todo with the modified message
        setIsTodoEditable(false); // Close the editing mode
    };

    const toggleComplete = () => {
        toggleTodo(todo.id); // Use the correct toggle function from context
    };

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleComplete} // Toggle completion
            />
            
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable} // Editable only when in edit mode
            />
            
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return; // Prevent editing if todo is completed

                    if (isTodoEditable) {
                        editTodo(); // Save the changes when in editable mode
                    } else {
                        setIsTodoEditable((prev) => !prev); // Enable editing mode
                    }
                }}
                disabled={todo.completed} // Disable button if completed
            >
                {isTodoEditable ? "📁" : "✏️"} {/* Toggle between save and edit icons */}
            </button>
            
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)} // Delete todo on click
            >
                ❌
            </button>
        </div>
    );
}
