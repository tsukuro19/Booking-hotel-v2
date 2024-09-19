// src/App.js
import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
// import NewsPage from './pages/News'
// import ContactPage from './pages/Contact'
import './App.css';
import Login from './components/Auth/Login';
// import Footer from './components/Footer';
// import Header from './components/Header';
=======
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Ensure this path is correct
import HotelDetails from './pages/HotelDetails'; // Ensure this path is correct

>>>>>>> 69564b56d6d4995942e55bd8b5f0582e688e62fe
function App() {
  return (
    // <BrowserRouter>
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Home />} >
        <Route index element={<Home />} />
      </Route>
      <Route path='/login' element={<Login />} />

=======
      <Route path="/" element={<Home />} />
      <Route path="/hoteldetails" element={<HotelDetails />} />
      {/* Add other routes if needed */}
>>>>>>> 69564b56d6d4995942e55bd8b5f0582e688e62fe
    </Routes>
    // </BrowserRouter>
  );
}

export default App;
