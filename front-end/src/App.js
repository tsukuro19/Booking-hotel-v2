import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import HotelPageList from './pages/HotelPageList'
import HotelDetailsList from './pages/HotelDetailsList'
import Account from './pages/account/Account'
import PersonalSettings from './pages/account/PersonalSettings';
import PreferencesSettings from './pages/account/PreferencesSettings';
import SecuritySettings from './pages/account/SecuritySettings';
import PaymentSettings from './pages/account/PaymentSettings';
import PrivacySettings from './pages/account/PrivacySettings';
import EmailSettings from './pages/account/EmailSettings';

import './App.css';
import Login from './components/Auth/Login';
// import { ToastContainer } from 'react-toastify';
// import Footer from './components/Footer';
// import Header from './components/Header';

function App() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
        {/* <Route index element={<Home />} /> */}
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path="/hotelpagelist" element={<HotelPageList />} />
      <Route path="/hoteldetailslist" element={<HotelDetailsList />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account/personal" element={<PersonalSettings />} />
      <Route path="/account/preferences" element={<PreferencesSettings />} />
      <Route path="/account/security" element={<SecuritySettings />} />
      <Route path="/account/payment" element={<PaymentSettings />} />
      <Route path="/account/privacy" element={<PrivacySettings />} />
      <Route path="/account/email" element={<EmailSettings />} />
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
