import React from "react";
import "./Peaky.css";

const Peaky = () => {
  return (
    <div className="container d-flex p-5 m-5 pe-3 ps-3">
      {/* Image Section */}
      <div className="col-md-5 ps-3  me-5">
        <img src="./images/img7.png" alt="Peaky Blinders Collection" className="img7 me-5" />
      </div>

      {/* Text Section with the custom parallelogram shape */}
      <div className="col-md-6 me-5 square ms-5 me-3">
        <br /><br />
        <div className="content ps-3 " >
        <p className="text-gray">Women Collection</p><br></br>
        <h2>Peaky Blinders</h2><br/>
        <u>
          <p>DESCRIPTION</p>
        </u>
        <p className="text-gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lorem ips Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lorem ips
        </p>
        <p>Size : <button className="btn btn-dark">M</button></p>
        <h3>$100.00</h3><br/>
        <button className="btn btn-dark ps-5 pe-5 mb-5">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Peaky;
