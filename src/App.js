import React from 'react';
import Navbarr from './components/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ultimatesale from './components/Ultimatesale';

const App = () => {
  return (
    <div className='home-container ms-5'>
      <Navbarr/>
      <Ultimatesale/>
    </div>
  );
}

export default App;
