import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Customers.css';

export default function Customers() {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    caste: '',
    age: '',
    state: '',
    job: ''
  });

  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
      return;
    }

    axios.get("http://localhost:8080/api/user/users")
      .then(res => {
        const allUsers = res.data;
        const others = allUsers.filter(u => u.id !== loggedInUser.id);
        setUsers(others); // ✅ Logged-in user not shown
      })
      .catch(err => console.error("Error fetching users:", err));
  }, [navigate, loggedInUser]); // ✅ ESLint warning resolved

  const filteredUsers = users.filter(user =>
    (filters.caste === '' || user.caste === filters.caste) &&
    (filters.age === '' || user.age.toString() === filters.age) &&
    (filters.state === '' || user.state === filters.state) &&
    (filters.job === '' || user.job === filters.job)
  );

  const unique = (key) => [...new Set(users.map(user => user[key]).filter(Boolean))];

  return (
    <div className="customers-container">
      <h2>Find Your Perfect Match 💘</h2>

      <div className="filters">
        <select value={filters.caste} onChange={e => setFilters({ ...filters, caste: e.target.value })}>
          <option value="">Caste</option>
          {unique('caste').map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <select value={filters.age} onChange={e => setFilters({ ...filters, age: e.target.value })}>
          <option value="">Age</option>
          {unique('age').map(a => <option key={a} value={a}>{a}</option>)}
        </select>

        <select value={filters.state} onChange={e => setFilters({ ...filters, state: e.target.value })}>
          <option value="">State</option>
          {unique('state').map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        <select value={filters.job} onChange={e => setFilters({ ...filters, job: e.target.value })}>
          <option value="">Job</option>
          {unique('job').map(j => <option key={j} value={j}>{j}</option>)}
        </select>
      </div>

      <div className="grid">
        {filteredUsers.map(user => (
          <div
            key={user.id}
            className="card"
            onClick={() => navigate(`/profile/${user.id}`)}
          >
            <img src={user.profilePic} alt="Profile" />
            <h3>{user.name}</h3>
            <p>{user.job}</p>
            <p>{user.city}, {user.state}</p>
            <p>Age: {user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
