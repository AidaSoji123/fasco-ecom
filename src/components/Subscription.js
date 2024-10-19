import React from "react";
// import './Subscription.css'; // Optional for any custom styles

const Subscription = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Image Section */}
        <div className="col-md-3 col-12 text-center mb-3">
          <img src="./images/sb1.png" alt="Subscription Icon" className="img-fluid" />
        </div>

        {/* Subscription Text Section */}
        <div className="col-md-6 col-12  mb-3">
          <h1 className="mt-3 text-center">Subscribe To Our Newsletter</h1>
          <p className="px-3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed sit amet lorem ipsum
          </p>
         <h5 className="ps-5 mt-5 mb-5">michael@ymail.com</h5>
          <center><button className="btn btn-dark mt-3 mb-5 ">Subscribe Now</button></center>
        </div>

        {/* Right Image Section */}
        <div className="col-md-3 col-12 text-center mb-3">
          <img src="./images/sb2.png" alt="Subscription Icon" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
