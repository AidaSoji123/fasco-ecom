import React from 'react';
import './Newarrival.css';

const NewarrivalHeader = () => {
  return (
    <div className='new-arrival-container p-5'>
      <center className='header-text mb-5'>
        <h1>New Arrivals</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, nisi hic. Obcaecati iusto praesentium incidunt <br/> voluptates sequi maxime autem culpa cupiditate repellendus perferendis facere temporibus,</p>
      </center>

      <div className="d-flex flex-wrap justify-content-center gap-3">
        <button className='btn1 btn'>Men's Fashion</button>
        <button className='btn btn-dark'>Women's Fashion</button>
        <button className='btn1 btn'>Women Accessories</button>
        <button className='btn1 btn'>Men Accessories</button>
        <button className='btn1 btn'>Discount Deals</button>
      </div>
    </div>
  );
}

export default NewarrivalHeader;
