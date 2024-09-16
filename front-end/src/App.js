// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Ensure this path is correct
import HotelDetails from './pages/HotelDetails'; // Ensure this path is correct

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hoteldetails" element={<HotelDetails />} />
      {/* Add other routes if needed */}
    </Routes>
  );
}

export default App;
