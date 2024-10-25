import React from 'react'

export function List() {
    const number=[
        {
            username:"hux",
            email:"hux@gmail.com",
            location:"usa"
        }, 
        {
            username:"u",
            email:"u@gmail.com",
            location:"uk"
        },
        {
            username:"x",
            email:"x@gmail.com",
            location:"ind"
        }
    ]

    return (
        <div>
            { number.map(({username,location,email}) =>(
                <ul key={Math.random()}> 
                <li>{username}</li>
                <li>{location}</li>
                <li>{email}</li>
                </ul>
            )) }
        </div>
    )
}
