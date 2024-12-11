import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the styles
import DropdownMenu from './DropdownMenu';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { validateToken } from '../services/apiService';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const navigate = useNavigate();

    const toggleLoginModal = () => setIsLoginOpen(!isLoginOpen);
    const toggleRegisterModal = () => setIsRegisterOpen(!isRegisterOpen);

    const handleLoginSuccess = (token, userId) => {
        console.log(userId);
        document.cookie = `authToken=${token}; path=/; max-age=3600`; // Lưu token vào cookie
        document.cookie = `user_id=${userId}; path=/; max-age=3600`; // Lưu token vào cookie
        console.log(document.cookie);
        setIsLoggedIn(true);
        setIsLoginOpen(false);
        navigate('/'); // Chuyển hướng đến trang chính
    };

    const handleRegisterSuccess = (token) => {
        setIsRegisterOpen(false);
        navigate('/');
    };


    const toggleToRegister = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(true);
    };

    const toggleToLogin = () => {
        setIsRegisterOpen(false);
        setIsLoginOpen(true);
    };

    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('authToken='));

        if (token) {
            const tokenValue = token.split('=')[1];
            validateToken(tokenValue)
                .then(() => {
                    // If token is valid
                    setIsLoggedIn(true);
                })
                .catch(() => {
                    // If token is invalid or expired
                    setIsLoggedIn(false);
                });
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    return (
        <nav className="w-full absolute top-0 left-0 z-50 bg-transparent text-white px-10 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <NavLink to="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-12 sm:h-16" alt="Logo" />
                </NavLink>

<<<<<<< HEAD
                {isLoggedIn ? (
                    <>
                        <div className="hidden md:flex space-x-8 text-lg font-medium">
                            <NavLink to="/" className="text-black hover:text-blue-700">Places to stay</NavLink>
                            <NavLink to="/list" className="text-black hover:text-blue-700">List Hotel</NavLink>
                            <NavLink to="/contact" className="text-black hover:text-blue-700">Contact</NavLink>
                        </div>
                        <DropdownMenu />
                    </>
                ) : (
                    <>
                        <div className="hidden md:flex space-x-8 text-lg font-medium">
                            <NavLink to="/" className="text-black hover:text-blue-700">Places to stay</NavLink>
                            <NavLink to="/list" className="text-black hover:text-blue-700">List Hotel</NavLink>
                            <NavLink to="/contact" className="text-black hover:text-blue-700">Contact</NavLink>
                        </div>
                        <div className="flex items-center space-x-4">
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
                        </div>
                        {isLoginOpen && (
                            <Login
                                toggleModal={toggleLoginModal}
                                toggleToRegister={toggleToRegister}
                                onLoginSuccess={handleLoginSuccess}
                            />
                        )}
                        {isRegisterOpen && (
                            <Register
                                toggleModal={toggleRegisterModal}
                                toggleToLogin={toggleToLogin}
                                onRegisterSuccess={handleRegisterSuccess}
                            />
                        )}
                    </>
                )}
=======
                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8 text-lg font-medium">
                    <NavLink to="/" className="text-black hover:text-blue-700">
                        Places to stay
                    </NavLink>
                    <NavLink to="/hoteldetailslist" className="text-black hover:text-blue-700">
                        DetailHotel
                    </NavLink>
                    <NavLink to="/hotelpagelist" className="text-black hover:text-blue-700">
                        ListHotel
                    </NavLink>
                    <NavLink to="/my-hotels" className="text-black hover:text-blue-700">
                        MyHotel
                    </NavLink>
                </div>

                {/* Buttons and Dropdown Menu */}
                <div className="flex items-center space-x-4">
                    <button
                        type="button"
                        className="px-5 py-2 text-lg font-medium text-black bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
                        onClick={toggleLoginModal} // Mở modal Login
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className="px-5 py-2 text-lg font-medium text-black bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
                        onClick={toggleRegisterModal} // Mở modal Register
                    >
                        Register
                    </button>
                    <DropdownMenu />
                </div>

                {/* Modal for Login */}
                {isLoginOpen && <Login toggleModal={toggleLoginModal} />}

                {/* Modal for Register */}
                {isRegisterOpen && <Register toggleModal={toggleRegisterModal} />}

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="md:hidden p-3 text-white"
                    aria-controls="mobile-menu"
                >
                    <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
>>>>>>> fb7406fe16a7b2734fa87f317f359a9f3853535e
            </div>

            {/* Add the ToastContainer to render the toast notifications */}
            <ToastContainer />
        </nav>
    );
};

export default Header;
