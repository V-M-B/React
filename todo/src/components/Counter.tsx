

export default function Counter( {todos}:any) {

    return (
        <>
            <p><b>{todos.filter((todo:any) => !todo.completed).length}</b> / {todos.length} todos completed </p>
        </>
    )
}
