import React from "react";
// import './ServiceBanner.css'; // Optional: For any custom styles

const ServiceBanner = () => {
  return (
    <div className="container ms-5">
      <div className="row d-flex justify-content-center mb-5">
        {/* First Service Item */}
        <div className="col-md-3 col-12 d-flex align-items-center mb-3">
          <div className="icon-container">
            <img src="./images/icon1.png" alt="High Quality" />
          </div>
          <div className="ms-3">
            <h6>High Quality</h6>
            <p>Crafted from top materials</p>
          </div>
        </div>

        {/* Second Service Item */}
        <div className="col-md-3 col-12 d-flex align-items-center mb-3">
          <div className="icon-container">
            <img src="./images/icon2.png" alt="Warranty Protection" />
          </div>
          <div className="ms-3">
            <h6>Warranty Protection</h6>
            <p>Over 2 years</p>
          </div>
        </div>

        {/* Third Service Item */}
        <div className="col-md-3 col-12 d-flex align-items-center mb-3">
          <div className="icon-container">
            <img src="./images/vect1.png" alt="Free Shipping" />
          </div>
          <div className="ms-3">
            <h6>Free Shipping</h6>
            <p>Order over $150</p>
          </div>
        </div>

        {/* Fourth Service Item */}
        <div className="col-md-3 col-12 d-flex align-items-center mb-3">
          <div className="icon-container">
            <img src="./images/vect2.png" alt="24/7 Support" />
          </div>
          <div className="ms-3">
            <h6>24 / 7 Support</h6>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
