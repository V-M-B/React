

import DeleteButton from "./DeleteButton";


export default function TodoList( {todos , setTodos}:any) {

   

    return (
        <ul>
            {
                todos.map((todo: any) => (
                    <li key={todo.id} className="flex justify-between items-center px-8 h-[50px] test-[14px] cursor-pointer border-b border-black/[0.08]"
                    onClick={()=>{
                        setTodos(
                            todos.map((t:any) => {
                                if (t.id === todo.id) {
                                    return {
                                        ...t,
                                        completed: !t.completed
                                    }
                                }
                                return t;
                            })
                        )
                    }}
                    >
                        <span className={`${todo.completed ? " line-through text-[#ccc]" : ""}  `} > {todo.title} </span>
                       
                        <DeleteButton setTodos={setTodos}  id={todo.id} />

                    </li>
                ))
            }

        </ul>
    )
}
