import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManagerHotel from './components/ManagerHotel';
import Dashboard from './components/Dashboard';
import Guest from './components/Guest';
import Room from './components/Room';
import FrontDesk from './components/FrontDesk';
import Rate from './components/Rate';
import Message from './components/Message';

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
            <Route path="/rate" element={<Rate />} />
            <Route path="/message" element={<Message />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
