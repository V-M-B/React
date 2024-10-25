import React from 'react'

export function UserList() {
    const users=[
        {
            id:1,
            name:'Alice',
            age:25
        },
        {
            id:2,
            name:'Bob',
            age:30
        },
        {
            id:3,
            name:'Charlie',
            age:22
        },
    ]

    return (
        <>
            {users.map(()=>
            <ul key={Math.random()}> 
            <li>{name}</li>
            <li>{age}</li>
            <li>{id}</li>
            
            </ul>
            )}
        </>
    )
}
