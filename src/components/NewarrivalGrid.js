import React from 'react';
import { Card } from 'react-bootstrap';
import './NewarrivalGrid.css';  // Include your own custom CSS if necessary
import { RxStarFilled } from "react-icons/rx";

const NewarrivalGrid = () => {
  // Product data array
  const products = [
    {
      id: 1,
      name: "Shiny Dress",
      description: "Al Karam",
      price: 95.50,
      img: "./images/c1.png",
      reviews: "(4.1K)",
      stars: 4.8,
    },
    {
      id: 2,
      name: "Long Dress",
      description: "Al Karam",
      price: 95.50,
      img: "./images/c2.png",
      reviews: "(4.1K)",
      stars: 4.1,
    },
    {
      id: 3,
      name: "Full Sweater",
      description: "Al Karam",
      price: 95.50,
      img: "./images/c3.png",
      reviews: "(4.1K)",
      stars: 4.7,
    },
    {
      id: 4,
      name: "White Dress",
      description: "Al Karam",
      price: 85.00,
      img: "./images/c4.png",
      reviews: "4.1K)",
      stars: 4.1,
    },
    {
      id: 5,
      name: "Colorful Dress",
      description: "Al Karam",
      price: 95.50,
      img: "./images/c5.png",
      reviews: "(4.1K)",
      stars: 4.1,
    },
    {
      id: 6,
      name: "White Shirt",
      description: "Al Karam",
      price: 95.50,
      img: "./images/c6.png",
      reviews: "(4.1K)",
      stars: 4.1,
    },
  ];

  return (
    <>
    <div className="row ps-5 m-5">
      {products.map((product) => (
        <div className="col-md-3 col-sm-6 my-3 m-5" key={product.id}>
          <Card className="product-card shadow-sm">
            <Card.Img variant="top" src={product.img} alt={product.name} />
            <Card.Body>
              {/* Flex container to align name and stars */}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <Card.Title className="mb-0">{product.name}</Card.Title>

                {/* Stars aligned to the right of the product name */}
                <div className="text-warning star-container">
                  {Array.from({ length: Math.floor(product.stars) }).map((_, starIndex) => (
                    <i className="fas fa-star" key={starIndex}><RxStarFilled /></i> // Render full stars
                  ))}
                  {product.stars % 1 !== 0 && <i className="fas fa-star-half-alt "><RxStarFilled /></i>} {/* Render half star if needed */}
                </div>
              </div>

              <Card.Subtitle className="mb-3 text-secondary">{product.description}</Card.Subtitle>
              
              <div className="mb-2">
                <span className="text-muted">{product.reviews} Customer Reviews</span>
              </div>

              {/* Align price and "Almost Sold Out!" next to each other */}
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="price mb-0">${product.price.toFixed(2)}</h4>
                <span className="text-danger almost-sold-out">Almost Sold Out!</span>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}


    </div>
<center><button className='btn btn-dark ps-5 pe-5 p-3 mb-3'>View More</button></center>
    </>
  );
};

export default NewarrivalGrid;
