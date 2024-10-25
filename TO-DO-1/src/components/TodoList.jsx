import React from 'react'
import TodoCard from './TodoCard'

export function TodoList() {
    let todos=[
        'go to gym',
        'eat more fruits'
    ];

    return (
<ul className='main'>
    {todos.map((todo,todoIndex)=>{
        return(
            <TodoCard/>
        )
    })}
</ul>
    )
}
