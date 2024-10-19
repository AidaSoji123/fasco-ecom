import React from 'react';
import './Brands.css';

const Brands = () => {
  return (
    <div className='d-flex flex-wrap ps-5 ms-5 pb-5 ps-3'>
      <div className="col-lg-1 m-2 ms-5 ps-5 me-5"><img src='./images/brand1.png' alt='...' className='brand1'/></div>
      <div className="col-lg-1 m-2 ms-5 ps-5 me-5"><img src='./images/brand2.png' alt='...' className='brand2'/></div>
      <div className="col-lg-1 m-2 ms-5 ps-5 me-5"><img src='./images/brand3.png' alt='...' className='brand3'/></div>
      <div className="col-lg-1 m-2 ms-5 ps-5 me-5"><img src='./images/brand4.png' alt='...' className='brand4'/></div>
      <div className="col-lg-1 m-2 ms-5 ps-5 me-5"><img src='./images/brand5.png' alt='...' className='brand5'/></div>

    </div>
  );
}

export default Brands;
