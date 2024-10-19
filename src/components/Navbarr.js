import React from 'react';
import { Link } from 'react-router-dom';
import './Navbarr.css';  // Custom styles

const Navbarr = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 ms-5 me-5 ps-5 pe-5">
      <div className="container-fluid">
        {/* Logo */}
        <img src='./images/FASCO.png' alt='Logo' id='logo-img' className='navbar-brand ms-5 ps-5' />

        {/* Toggle button for mobile view */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse pe-5" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/deals" className="nav-link">Deals</Link>
            </li>
            <li className="nav-item">
              <Link to="/newarrivals" className="nav-link">New Arrivals</Link>
            </li>
            <li className="nav-item">
              <Link to="/packages" className="nav-link">Packages</Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">Sign In</Link>
            </li>
            <li className="nav-item pe-5">
              <Link to="/signup" className="btn btn-dark">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbarr;
