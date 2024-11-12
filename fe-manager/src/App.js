import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import ManagerHotel from './components/ManagerHotel';
import Dashboard from './components/Dashboard';
import Guest from './components/Guest';
import Room from './components/Room';
import FrontDesk from './components/FrontDesk';
import Review from './components/Review';
import Message from './components/Message';
import Account from './components/Account';
import Login from './components/Login';
import Register from './components/Register';
import 'react-toastify/dist/ReactToastify.css';
import { validateToken } from './services/apiServices';
import HotelRegistrationForm from './components/HotelRegistrationForm';
import HotelManagement from './components/ListHotel';

const AppWrapper = () => {
  const location = useLocation();
  const noSidebarRoutes = ['/login', '/register'];

  return (
    <div className="flex min-h-screen">
      {!noSidebarRoutes.includes(location.pathname) && <ManagerHotel />}
      <div className="flex-1 bg-gray-100">
        <Routes>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/guest" element={<PrivateRoute><Guest /></PrivateRoute>} />
          <Route path="/room" element={<PrivateRoute><Room /></PrivateRoute>} />
          <Route path="/frontdesk" element={<PrivateRoute><FrontDesk /></PrivateRoute>} />
          <Route path="/review" element={<PrivateRoute><Review /></PrivateRoute>} />
          <Route path="/message" element={<PrivateRoute><Message /></PrivateRoute>} />
          <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-hotel" element={<HotelRegistrationForm />} />
          <Route path="/list-hotel" element={<HotelManagement />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;

// PrivateRoute Component
function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get('authTokenManager');
      if (!token) {
        setIsAuthenticated(false);
      } else {
        try {
          const isValid = await validateToken(token);
          setIsAuthenticated(isValid);
          if (!isValid) Cookies.remove('authTokenManager');
        } catch (error) {
          console.error('Token verification failed:', error);
          setIsAuthenticated(false);
        }
      }
    };
    checkAuth();
  }, [navigate]);

  if (isAuthenticated === null) return <p>Loading...</p>; // Optional: loading state
  return isAuthenticated ? children : <Navigate to="/login" />;
}
