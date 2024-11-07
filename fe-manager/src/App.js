import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManagerHotel from './components/ManagerHotel';
import Dashboard from './components/Dashboard';
import Guest from './components/Guest';
import Room from './components/Room';
import FrontDesk from './components/FrontDesk';
import Review from './components/Review';
import Message from './components/Message';
import Account from './components/Account';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <ManagerHotel />

        {/* Main Content Area */}
        <div className="flex-1">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/guest" element={<Guest />} />
            <Route path="/room" element={<Room />} />
            <Route path="/frontdesk" element={<FrontDesk />} />
            <Route path="/review" element={<Review />} />
            <Route path="/message" element={<Message />} />
            <Route path="/account" element={<Account />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
