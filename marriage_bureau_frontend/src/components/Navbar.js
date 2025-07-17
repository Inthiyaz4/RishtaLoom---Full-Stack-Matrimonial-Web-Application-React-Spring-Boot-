import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/images/Logo.png" alt="Logo" className="logo" />
        <span className="site-name">RishtaLoom</span>
      </div>

      <div className="navbar-right">
        <Link to="/">Home</Link>
        {!isLoggedIn && <Link to="/register">Register</Link>}
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {isLoggedIn && <Link to="/customers">Customers</Link>}
        <Link to="/contact">Contact</Link>
        {isLoggedIn && <Link to="/user">MyProfile</Link>}
      </div>
    </nav>
  );
}
