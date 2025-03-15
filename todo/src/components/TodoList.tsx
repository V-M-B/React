import DeleteButton from "./DeleteButton";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList({ todos, setTodos }: TodoListProps) {
    return (
        <ul>
            {todos.length === 0 && (
                <li className="h-full flex justify-center items-center">
                    Start By Adding Todos
                </li>
            )}

            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[0.08]"
                    onClick={() => {
                        setTodos((prevTodos) =>
                            prevTodos.map((t) =>
                                t.id === todo.id ? { ...t, completed: !t.completed } : t
                            )
                        );
                    }}
                >
                    <span className={todo.completed ? "line-through text-[#ccc]" : ""}>
                        {todo.title}
                    </span>
                    
                    <DeleteButton setTodos={setTodos} id={todo.id} />
                </li>
            ))}
        </ul>
    );
}
