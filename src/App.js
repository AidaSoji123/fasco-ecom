import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./components/Navbarr";
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import Newarrivals from "./pages/Newarrivals";

import Footer from "./components/Footer";
import Packages from "./pages/Packages";


const App = () => {
  return (
    <Router>
      <div className="home-container ms-5 ps-5 mt-5">
        {/* The Navbarr is usually common to all pages */}
        <Navbarr />

        {/* Define the routes for each component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
           <Route path="/newarrivals" element={
            
              <Newarrivals />
             
            
          } />
          <Route path="/packages" element={<Packages />} />
          
        </Routes>

        {/* Footer is common to all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
