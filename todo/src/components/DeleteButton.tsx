
export default function DeleteButton({id,setTodos}:any) {
    

    return (
        <>
                                     <button
                        onClick={(e)=>{
                            e.stopPropagation();
                            setTodos((prev) => prev.filter((todo )=> todo.id !== id))
                        }}
             > ❌ </button>
        </>
    )
}
