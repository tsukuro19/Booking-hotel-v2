import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import Login from './Auth/Login';
import Register from './Auth/Register';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const navigate = useNavigate();

    const toggleLoginModal = () => setIsLoginOpen(!isLoginOpen);
    const toggleRegisterModal = () => setIsRegisterOpen(!isRegisterOpen);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true); // Set user as logged in
        setIsLoginOpen(false); // Close login modal
    };

    const toggleToRegister = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(true);
    };

    const toggleToLogin = () => {
        setIsRegisterOpen(false);
        setIsLoginOpen(true);
    };

    return (
        <nav className="w-full absolute top-0 left-0 z-50 bg-transparent text-white px-10 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <NavLink to="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-12 sm:h-16" alt="Logo" />
                </NavLink>
                <div className="hidden md:flex space-x-8 text-lg font-medium">
                    <NavLink to="/" className="text-black hover:text-blue-700">Places to stay</NavLink>
                    <NavLink to="/hoteldetailslist" className="text-black hover:text-blue-700">DetailHotel</NavLink>
                    <NavLink to="/hotelpagelist" className="text-black hover:text-blue-700">ListHotel</NavLink>
                    <NavLink to="/contact" className="text-black hover:text-blue-700">Contact</NavLink>
                </div>
                <div className="flex items-center space-x-4">
                    {!isLoggedIn ? (
                        <>
                            <button
                                type="button"
                                className="px-5 py-2 text-lg font-medium bg-pink-500 text-white rounded-lg hover:bg-pink-400"
                                onClick={toggleLoginModal}
                            >
                                Login
                            </button>
                            <button
                                type="button"
                                className="px-5 py-2 text-lg font-medium bg-pink-500 text-white rounded-lg hover:bg-pink-400"
                                onClick={toggleRegisterModal}
                            >
                                Register
                            </button>
                        </>
                    ) : (
                        <DropdownMenu />
                    )}
                </div>

                {isLoginOpen && (
                    <Login toggleModal={toggleLoginModal} toggleToRegister={toggleToRegister} onLoginSuccess={handleLoginSuccess} />
                )}
                {isRegisterOpen && (
                    <Register toggleModal={toggleRegisterModal} toggleToLogin={toggleToLogin} />
                )}
                
            </div>
        </nav>
    );
};

export default Header;
