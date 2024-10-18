import React from 'react';
import './Ultimatesale.css';


const Ultimatesale = () => {
  return (
    <div className='container d-flex flex-wrap m-5 p-5 ms-5'>
      <div className="col-md-3 bg-gray ms-5 p-3 div-1"><img src='./images/img-1.png' alt='...' className='img-1'/></div>
      <div className="col-md-3 ms-3 div-2">
        <div className="col-12 "><img src='./images/img-2.png' alt='...' className='img-2'/></div>
        <div className="col-12"><img src='./images/ultimate.png' alt='...' className='ultimate-img'/></div>
        <div className="col-12"><img src='./images/sale.png' alt='...' className='sale-img'/></div>
        <div className="col-12"> <img src='./images/NEW COLLECTION.png' alt='...' className='NEW-COLLECTION-img ms-5'/></div>
        <div className="col-12"><button className='btn btn-dark ps-4 pe-4 p-2 mt-2 shop-now'>SHOP NOW</button></div>
        <div className="col-12"><img src='./images/img-3.png' alt='...' className='img-3'/></div>
      </div>
      <div className="col-md-3 bg-gray ms-5 p-3 div-3"><img src='./images/img-4.png' alt='...' className='img-4'/></div>
      <div className="col-1"><img src='./images/icon.png' alt='...' className='cart-icon ms-3'/></div>
    </div>
  );
}

export default Ultimatesale;
