//This component will fetch car data from the JSON Server and display a list of CarCard components.

import React, { useState, useEffect } from 'react';
import CarCard from './CarCard';

const CarList = () => {
  const [cars, setCars] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/cars')
  //     .then((response) => response.json())
  //     .then((data) => setCars(data));
  // }, []);

  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
