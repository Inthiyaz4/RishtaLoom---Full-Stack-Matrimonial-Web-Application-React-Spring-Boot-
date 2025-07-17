import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Customers from './components/Customers';
import ProfileDetails from './components/ProfileDetails';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import MyProfile from './components/MyProfile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/profile/:id" element={<ProfileDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user" element={<MyProfile />} /> {/* ✅ New Route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
