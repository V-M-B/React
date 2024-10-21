import React, { useState, useContext } from 'react';
import UserContext from '../context/userContext';

export function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        value={userName}
        type="text"
        placeholder="UserName"
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <input
        value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
