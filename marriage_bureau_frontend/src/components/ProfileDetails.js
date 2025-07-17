
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProfileDetails.css';

export default function ProfileDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios.get(`http://localhost:8080/api/user/user/${id}`)
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      axios.delete(`http://localhost:8080/api/user/user/${id}`)
        .then(() => {
          localStorage.removeItem("user");
          alert("Account deleted");
          navigate("/login");
        });
    }
  };

  const handleUpdate = () => {
    navigate(`/register`, { state: user });
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h2>{user.name}'s Profile</h2>
      <img
        src={user.profilePic}
        alt="Profile"
        className="profile-image"
      />
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>City:</strong> {user.city}</p>
      <p><strong>State:</strong> {user.state}</p>
      <p><strong>Caste:</strong> {user.caste}</p>
      <p><strong>Job:</strong> {user.job}</p>
      <p><strong>Job Location:</strong> {user.jobLocation}</p>

      {loggedInUser && (
        <>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Personal Info:</strong> {user.personalInfo}</p>
        </>
      )}

      
      {loggedInUser?.id === user?.id && (
        <div className="button-group">
          <button className="update-btn" onClick={handleUpdate}>✏️ Update</button>
          <button className="delete-btn" onClick={handleDelete}>🗑️ Delete</button>
        </div>
      )}
    </div>
  );
}
