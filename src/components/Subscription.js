import React from "react";

const Subscription = () => {
  return (
    <div>
      <br /><br /><br />
      <div className="d-flex ms-5 mt-5 mb-5">
        <div className="col-md-3 pe-5 p-5">
          <img src="./images/sb1.png" alt="..." />
        </div>

        <div className="col-md-5 mt-5 mb-5">
          <br />
          <br /><br/><br/><br/>
          <center>
            <h1 className="mt-5">Subscribe To Our Newsletter</h1>
            <p className="ps-5 pe-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet lorem ipsum dolor sit amet, consectetur adipiscing elit.
              
            </p>
          </center>
          <br/>
          <h5 className="ps-5 pe-5">michael@ymail.com</h5>
          <center><button className="btn btn-dark mt-5 mb-5 pe-5 ps-5 p-2">Subscribe Now</button></center>
        </div>
<br /><br />
        <div className="col-md-2 me-5 mt-5">
          <img src="./images/sb2.png" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
