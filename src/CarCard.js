//This component will display information about a single car.

import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <h2>{car.make} {car.model}</h2>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
    </div>
  );
};

export default CarCard;
