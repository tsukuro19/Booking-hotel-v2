import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import HotelPageList from './pages/HotelPageList'
import Account from './pages/account/Account'
import PersonalSettings from './pages/account/PersonalSettings';
import PreferencesSettings from './pages/account/PreferencesSettings';
import SecuritySettings from './pages/account/SecuritySettings';
import PaymentSettings from './pages/account/PaymentSettings';

import './App.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

import Search from './pages/Search';
import BookingForm from './components/Forms/Booking/BoongkingForm';
import Booking from './pages/Booking';
import HotelDetail from './pages/HotelDetail';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ListBooking from './pages/account/ListBooking';
import Message from './components/Message';

// import { ToastContainer } from 'react-toastify';

// import Footer from './components/Footer';
// import Header from './components/Header';

// Initialize Stripe with your publishable key

function App() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
        {/* <Route index element={<Home />} /> */}
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />



      {/* <Route path="/hoteldetails" element={<HotelDetails />} /> */}


      <Route path="/hoteldetails" element={<HotelDetail />} />

      <Route path="/search" element={<Search />} />
      <Route path="/booking" element={<Booking />} />


      <Route path="/list" element={<HotelPageList />} />
      <Route path="/list/detail/:hotelId" element={<HotelDetail />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account/personal" element={<PersonalSettings />} />
      <Route path="/account/preferences" element={<PreferencesSettings />} />
      <Route path="/account/security" element={<SecuritySettings />} />
      <Route path="/account/payment" element={<PaymentSettings />} />
      <Route path="/account/list-booking" element={<ListBooking />} />
      <Route path="/message/:managerId" element={<Message />} />
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}

    </Routes>
    // </BrowserRouter>
  );
}

export default App;
