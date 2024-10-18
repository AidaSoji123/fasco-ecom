import React from 'react';

const ServiceBanner = () => {
  return (
    <div>
      <div className="d-flex me-5 ms-5 ps-3 mb-5">
        <div className="col-md-3 d-flex ms-5"><div className="col-md-3"><img src='./images/icon1.png' alt='...'></img></div><div className="col-md-9"><h6>High Quality</h6>Crafted from top materials</div></div>
        <div className="col-md-3 d-flex ms-3"><div className="col-md-3"><img src='./images/icon2.png' alt='...'></img></div><div className="col-md-9"><h6>Warranty Protection</h6>Over 2 years</div></div>
        <div className="col-md-3 d-flex ms-3"><div className="col-md-3"><img src='./images/vect1.png' alt='...'></img></div><div className="col-md-9"><h6>Free Shipping</h6>Order over 150 $</div></div>
        <div className="col-md-3 d-flex ms-3"><div className="col-md-3"><img src='./images/vect2.png' alt='...'></img></div><div className="col-md-9"><h6>24 / 7 Support</h6>Dedicated support</div></div>

    
      </div>
  
    </div>
  );
}

export default ServiceBanner;
