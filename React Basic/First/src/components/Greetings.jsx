import React, { useState } from 'react'

export function Greetings() {
    const [name, setName] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = () => {
        if (name) {  // Only submit if the name is not empty
            setSubmitted(true);  // Update the state to true when the button is clicked
        }
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
        setSubmitted(false);  // Reset the submitted state when the name is changed
    }

    return (
        <>
            <div>
                <input 
                    type="text"
                    placeholder='Enter your name'
                    value={name}
                    onChange={handleNameChange}  // Reset submitted on input change
                />

                <input 
                    type="button" 
                    value="Add" 
                    onClick={handleSubmit}  // Trigger handleSubmit on button click
                />

                {/* Conditionally render the <h2> based on the submitted state */}
                {submitted && <h2>Your Name is {name}</h2>}
            </div>
        </>
    )
}
