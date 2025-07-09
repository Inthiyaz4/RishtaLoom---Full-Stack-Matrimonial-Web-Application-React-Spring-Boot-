// ✅ MyProfile.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './MyProfile.css';

export default function MyProfile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (!loggedInUser) {
      navigate('/login');
    } else {
      setUser(loggedInUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleUpdate = () => {
    navigate('/register', { state: user });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      axios.delete(`http://localhost:8080/api/user/user/${user.id}`)
        .then(() => {
          localStorage.removeItem('user');
          alert('Account deleted successfully');
          navigate('/login');
        })
        .catch(err => {
          console.error('Error deleting user:', err);
          alert('Something went wrong');
        });
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h2>{user.name}'s Profile</h2>
      <img src={user.profilePic} alt="Profile" className="profile-image" />

      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>City:</strong> {user.city}</p>
      <p><strong>State:</strong> {user.state}</p>
      <p><strong>Caste:</strong> {user.caste}</p>
      <p><strong>Job:</strong> {user.job}</p>
      <p><strong>Job Location:</strong> {user.jobLocation}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Personal Info:</strong> {user.personalInfo}</p>

      <div className="button-group">
        <button className="update-btn" onClick={handleUpdate}>✏️ Update</button>
        <button className="delete-btn" onClick={handleDelete}>🗑️ Delete</button>
        <button className="logout-btn" onClick={handleLogout}>🚪 Logout</button>
      </div>
    </div>
  );
}
