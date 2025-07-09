import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export default function Home() {
  useEffect(() => {
    const carousel = document.querySelector('#carouselExampleAutoplaying');
    if (carousel && window.bootstrap) {
      new window.bootstrap.Carousel(carousel, {
        interval: 3000,
        ride: 'carousel',
        pause: false,
        wrap: true,
      });
    }
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to RishtaLoom 💑</h1>
      <p>Find your perfect life partner by browsing verified profiles.</p>
      <p>Register to get started or log in to explore matches.</p>

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="/images/muslimm.jpg"
              className="d-block w-100"
              alt="Slide 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Connect with Verified Profiles</h5>
              <p>100% genuine and trusted members.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="/images/hindus.jpg"
              className="d-block w-100"
              alt="Slide 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Your Perfect Match Awaits</h5>
              <p>Easy to use and personalized suggestions.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="/images/christ.jpg"
              className="d-block w-100"
              alt="Slide 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Rishta Made Simple</h5>
              <p>Join thousands of happy couples.</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="success-stories">
        <p>💖 50,000+ success stories — and yours could be next!</p>
        <p>💍 More than 50,000 hearts united in marriage — start your story today.</p>
        <p>🎉 50,000+ customers are happily married to their perfect partners.</p>
      </div>
    </div>
  );
}
