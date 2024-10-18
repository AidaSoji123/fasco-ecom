import React from 'react';
import Navbarr from '../components/Navbarr';
import Ultimatesale from '../components/Ultimatesale';
import Brands from '../components/Brands';

const Home = () => {
  return (
    <div className='home-container ms-5'>
       <Navbarr/>
      <Ultimatesale/>
      <Brands/>
    </div>
  );
}

export default Home;
