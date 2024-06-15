//This file will render the main layout of the application and potentially other components.
//gemini

import React from 'react';
import CarList from './CarList';
import Navbar from './Navbar'; // Import Navbar if using

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Add navbar if using */}
      <CarList />
    </div>
  );
}

export default App;
