import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';

export default function Login() {
  const [user, setUser] = useState({ name: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const login = () => {
    axios.post('http://localhost:8080/api/user/login', user)
      .then(res => {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/customers");
      })
      .catch(() => alert("Invalid credentials"));
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <input name="name" placeholder="Username" value={user.name} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" value={user.password} onChange={handleChange} />
      <button onClick={login}>Login</button>
    </div>
  );
}
