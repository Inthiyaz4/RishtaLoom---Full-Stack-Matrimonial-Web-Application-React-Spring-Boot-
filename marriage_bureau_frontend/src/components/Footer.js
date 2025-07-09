// src/components/Footer.js
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} RishtaLoom. All rights reserved.
    </footer>
  );
}
