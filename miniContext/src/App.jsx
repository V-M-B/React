import { Login } from "./components/login";
import { Profile } from "./components/profile";
import UserContextProvider from "./context/userContextProvider.jsx";
import React, { useState } from 'react';


export default function App() {
  const [count, setCount] = useState('')

  return (
    <UserContextProvider>
   <h1>Context API in React Framework</h1>
   <Login/>
   <Profile/>
    </UserContextProvider>
  )
}


