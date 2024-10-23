import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";

function App() {
  const [Todos, setTodos] = useState([]);

  const addTdo = (todo) => {
    setTodos((oldTodos) => [
      ...oldTodos,
      { id: Date.now(), ...todo }
    ]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todos));
  }, [Todos]);

  return (
    <TodoProvider value={{ Todos, addTdo, updateTodo, deleteTodo, toggleTodo }}>
      <h1 className="p-4 bg-pink-400 text-black text-4xl text-center">To-Do</h1>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>

          <div className="mb-4">
            <TodoForm />
          </div>

          <div className="flex flex-wrap gap-y-3">
            {Todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
