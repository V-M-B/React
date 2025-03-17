import { useState } from "react";
import Button from "./Button";


export default function AddTodoForm({ setTodos, todos }: any) {    
  const [todoContent, setTodoContent] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (todoContent.trim() === "") return; // Prevent empty todos
        if(todos.length >=3){
          alert("You can add only 3 todos. Login to add more");
          return;
        }
        else{
          setTodos((prev:any) => [
            ...prev,
            {
              id: prev.length + 1, // Generate unique I
              title: todoContent,  // Use `title` instead of `text`
              completed: false,
            },
          ]);
          setTodoContent("");
      }
      }}
    >
      <h2 className="text-[#231d15] text-[16px] font-medium px-2">Add a todo</h2>
      <input
        type="text"
        autoFocus
        className="h-[45px] w-full border-[1px] border-[rgba(0,0,0,0.12)] rounded-[15px] ml-[2px] mr-[0] my-[9px]  mx-2 px-[16px] py-[10px] text-[14px]"
        value={todoContent}
        onChange={(e) => setTodoContent(e.target.value)}
      />
      <Button >Add to list</Button>
    </form>
  );
}
