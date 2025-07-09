import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const updateUser = location.state;

  const [formData, setFormData] = useState({
    name: '',
    password: '',
    gender: '',
    age: '',
    caste: '',
    city: '',
    state: '',
    job: '',
    jobLocation: '', 
    phone: '',
    personalInfo: '',
    profilePic: ''
  });

  useEffect(() => {
    if (updateUser) {
      setFormData(updateUser);
    }
  }, [updateUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData(prev => ({
        ...prev,
        profilePic: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = updateUser
      ? `http://localhost:8080/api/user/update/${updateUser.id}`
      : "http://localhost:8080/api/user/register";

    axios.post(url, formData)
      .then(res => {
        alert(updateUser ? "Profile updated" : "Registration successful");
        navigate(updateUser ? `/profile/${updateUser.id}` : "/login");
      })
      .catch(err => {
        alert("Something went wrong");
        console.log(err);
      });
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">
          {updateUser ? "Update Profile" : "Register"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
          <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
          <input name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" required />
          <input name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Age" required />
          <input name="caste" value={formData.caste} onChange={handleChange} placeholder="Caste" />
          <input name="city" value={formData.city} onChange={handleChange} placeholder="City" />
          <input name="state" value={formData.state} onChange={handleChange} placeholder="State" />
          <input name="job" value={formData.job} onChange={handleChange} placeholder="Job" />
          <input name="jobLocation" value={formData.jobLocation} onChange={handleChange} placeholder="Job Location" />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
          <textarea name="personalInfo" value={formData.personalInfo} onChange={handleChange} placeholder="Personal Info" />
          <input name="profilePic" type="file" accept="image/*" onChange={handleFileChange} required={!updateUser} />
          <button type="submit">{updateUser ? "Update" : "Register"}</button>
        </form>
      </div>
    </div>
  );
}
