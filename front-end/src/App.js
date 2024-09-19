// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import HotelDetails from './pages/HotelDetails';
// import NewsPage from './pages/News'
// import ContactPage from './pages/Contact'
import './App.css';
import Login from './components/Auth/Login';
// import Footer from './components/Footer';
// import Header from './components/Header';

function App() {
  return (
    // <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home />} >
        <Route index element={<Home />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path="/hoteldetails" element={<HotelDetails />} />


    </Routes>
    // </BrowserRouter>
  );
}

export default App;
