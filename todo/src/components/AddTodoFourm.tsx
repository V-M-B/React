import { useState } from "react";
import Button from "./Button";


export default function AddTodoForm({ setTodos, todos }: any) {    
  const [todoContent, setTodoContent] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (todoContent.trim() === "") return; // Prevent empty todos

        setTodos((prev:any) => [
          ...prev,
          {
            id: prev.length + 1, // Generate unique I
            title: todoContent,  // Use `title` instead of `text`
            completed: false,
          },
        ]);
        setTodoContent("");
      }}
    >
      <h2 className="text-[#231d15] text-[16px] font-medium">Add a todo</h2>
      <input
        type="text"
        autoFocus
        className="h-[45px] w-full border-[1px] border-[rgba(0,0,0,0.12)] rounded-[5px] ml-[0] mr-[0] my-[9px] px-[16px] py-[0] text-[14px]"
        value={todoContent}
        onChange={(e) => setTodoContent(e.target.value)}
      />
      <Button>Add to list</Button>
    </form>
  );
}
