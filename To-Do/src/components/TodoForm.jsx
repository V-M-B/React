import React, { useState } from 'react';
import { useTodo } from '../context';

export function TodoForm() {
    const [todo, setTodo] = useState(''); // Correct state name

    const { addTdo } = useTodo();

    const add = (e) => {
        e.preventDefault(); // Correctly prevent form submission

        if (!todo) return;

        addTdo({ todo, completed: false }); // Pass todo object with text and completion status
        setTodo(''); // Clear input after submission
    };

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)} // Update state correctly
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}
