import React, { useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DropdownMenu = () => {
    // Sử dụng state để kiểm soát việc hiển thị menu
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    // Hàm để toggle trạng thái menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <div className="relative inline-block text-left z-50">
            {/* Nút để mở/đóng menu */}
            <button
                onClick={toggleMenu}
                className="bg-gray-200 text-dark font-semibold py-3 px-4 rounded-xl inline-flex items-center"
            >
                <FaBars className="mr-3" />
                <span> <FaUserCircle /></span>
            </button>
            {/* Nội dung menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <button
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Sign up
                    </button>
                    <button
                        onClick={() => handleNavigation('/login')}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Login
                    </button>
                    <button
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Help centure
                    </button>
                    <button
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Contact
                    </button>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
