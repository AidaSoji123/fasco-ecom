import React from 'react';
import './Newarrival.css';

const NewarrivalHeader = () => {
  return (
    <>
    <div className='p-5 m-5'>
      <center className='m-5 p-5'><h1>New Arrivals</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, nisi hic. Obcaecati iusto praesentium incidunt <br/> voluptates sequi maxime autem culpa cupiditate repellendus perferendis facere temporibus,</p></center>
    
    <div className="d-flex ms-5 p-2">
      <div className="col-md-2 ms-4 "><button className='btn1 btn ps-4 pe-4'>Men's Fashion</button></div>

      <div className="col-md-2 ms-2"><button className='btn btn-dark ps-4 pe-4'>Women's Fashion</button></div>
      <div className="col-md-2 ms-2"><button className='btn1 btn ps-4 pe-4 ps-4 pe-4'>Women Accessories</button></div>
      <div className="col-md-2 ms-2"><button className='btn1 btn ps-4 pe-4'>Men Accessories </button></div>
      <div className="col-md-2 ms-2"><button className='btn1 btn ps-4 pe-4'>Discount Deals</button></div>
    </div>
    </div>
    </>
  );
}

export default NewarrivalHeader;
