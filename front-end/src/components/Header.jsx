import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import Login from './Auth/Login'; // Import Login component
import Register from './Auth/Register'; // Import Register component

const Header = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false); // State cho modal Login
    const [isRegisterOpen, setIsRegisterOpen] = useState(false); // State cho modal Register
    const navigate = useNavigate();

    const toggleLoginModal = () => {
        setIsLoginOpen(!isLoginOpen); // Mở/đóng modal Login
    };

    const toggleRegisterModal = () => {
        setIsRegisterOpen(!isRegisterOpen); // Mở/đóng modal Register
    };

    return (
        <nav className="w-full absolute top-0 left-0 z-50 bg-transparent text-white px-10 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/" className="flex items-center">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-12 sm:h-16"
                        alt="Logo"
                    />
                </NavLink>

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
                    <NavLink to="/contact" className="text-black hover:text-blue-700">
                        Contact
                    </NavLink>
                </div>

                {/* Buttons and Dropdown Menu */}
                <div className="flex items-center space-x-4">
                    <button
                        type="button"
                        className="px-5 py-2 text-lg font-medium bg-pink-500 text-white rounded-lg hover:bg-pink-400 focus:ring-2 focus:ring-blue-300"
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
            </div>
        </nav>
    );
};

export default Header;
