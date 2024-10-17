import React from 'react';

const Navbarr = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-5 m-5 me-5">
      <div className="container-fluid ">
        <img src='./images/FASCO.png' alt='Logo' id='logo-img' className='align-start ms-5'/>
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <div className='align-items-end pe-5 me-5'>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ps-3 ms-1">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item ps-3">
                <a className="nav-link" href="#">Deals</a>
              </li>
              <li className="nav-item ps-3">
                <a className="nav-link" href="#">New Arrivals</a>
              </li>
              <li className="nav-item ps-3">
                <a className="nav-link" href="#">Packages</a>
              </li>
              <li className="nav-item ps-3">
                <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Sign In</a>
              </li>
              <li className="nav-item ps-3 me-5 pe-0">
                <button className="btn btn-dark me-5" tabIndex="-1" aria-disabled="true">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbarr;
