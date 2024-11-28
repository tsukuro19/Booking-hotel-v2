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
import HotelUpdateForm from './components/UpdateHotel';
import DetailRoom from './components/DetailRoom';
import FeatureList from './components/Feature';
import CreateFeatureForm from './components/CreateFeature';
import UpdateFeatureForm from './components/EditFeature';
import RoomClassList from './components/RoomClass';
import CreateRoomClassForm from './components/CreateRoomClass';
import UpdateRoomClassForm from './components/EditRoomClass';
import BedTypeList from './components/BedType';
import CreateBedTypeForm from './components/CreateBedType';
import UpdateBedTypeForm from './components/EditBedType';
import FloorList from './components/Floor';
import CreateFloorForm from './components/CreateFloor';
import UpdateFloorForm from './components/EditFloor';
import RoomClassFeatureList from './components/RoomClassFeature';
import CreateRoomClassFeatureForm from './components/CreateRoomCLassFeature';
import ListRoomClassBedTypes from './components/RoomClassBedType';
import CreateRoomClassBedType from './components/CreateRoomClassBedType';
import CreateRoom from './components/CreateRoom';
import UpdateRoomClassWithFeature from './components/EditRoomClassFeature';


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
          <Route path="/" element={<Navigate to="/guest" />} />
          <Route path="/edit-hotel/:name" element={<HotelUpdateForm />} />
          <Route path="/detail-room/:hotelId" element={<DetailRoom />} />
          <Route path="/detail-room/features/:hotelId" element={<FeatureList />} />
          <Route path="/detail-room/room-classes/:hotelId" element={<RoomClassList/>} />
          <Route path="/detail-room/bed-types/:hotelId" element={<BedTypeList/>} />
          <Route path="/detail-room/floor/:hotelId" element={<FloorList/>} />
          <Route path="/detail-room/room-classes-with-features/:hotelId" element={<RoomClassFeatureList/>} />
          <Route path="/detail-room/room-classes-with-bed-types/:hotelId" element={<ListRoomClassBedTypes/>} />
          <Route path="/detail-room/features/create-feature/:hotelId" element={<CreateFeatureForm />} />
          <Route path="/detail-room/features/edit-room/:hotelId/:featureId" element={<UpdateFeatureForm />} />
          <Route path="/detail-room/room-classes/create-room-class/:hotelId" element={<CreateRoomClassForm />} />
          <Route path="/detail-room/room-classes/edit-room-class/:hotelId/:roomClassId/:roomClassName" element={<UpdateRoomClassForm />} />
          <Route path="/detail-room/bed-types/create-bed-type/:hotelId" element={<CreateBedTypeForm />} />
          <Route path="/detail-room/bed-types/edit-bed-type/:hotelId/:bedTypeId/:bedTypeName" element={<UpdateBedTypeForm />} />
          <Route path="/detail-room/floor/create-floor/:hotelId" element={<CreateFloorForm/>} />
          <Route path="/detail-room/floor/edit-floor/:hotelId/:floorId" element={<UpdateFloorForm/>} />
          <Route path="/detail-room/room-classes-with-features/create-room-class-feature/:hotelId" element={<CreateRoomClassFeatureForm/>} />
          <Route path="/detail-room/room-classes-with-features/create-room-class-feature/:hotelId" element={<CreateRoomClassFeatureForm/>} />
          <Route path="/edit-room-class/:hotelId/:roomClassFeatureId" element={<UpdateRoomClassWithFeature/>} />
          <Route path="/detail-room/create-room/:hotelId" element={<CreateRoom/>} />
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
