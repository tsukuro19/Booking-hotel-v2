import React, { useState } from 'react';
import { FaBars, FaUserCircle, FaHome, FaRegUserCircle, FaKey, FaQuestionCircle, FaHeadset } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie
import { toast } from 'react-toastify';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to handle navigation and close the menu
    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false); // Close the menu when navigating
    };

    // Function to handle Log Out
    const handleLogout = () => {
        console.log("Logging out...");

        // Xóa token khỏi cookie
        Cookies.remove('authToken'); // Giả sử 'authToken' là tên cookie chứa token

        // Cập nhật lại trạng thái đăng nhập
        setIsOpen(false); // Đóng menu

        // Điều hướng về trang đăng nhập hoặc trang chủ
        navigate('/'); // Điều hướng tới trang chủ

        // Tải lại trang
        window.location.reload(); // Tải lại trang
        toast.success("Đăng xuất thành công!");
    };

    return (
        <div className="relative inline-block text-left z-50">
            {/* Button to open/close the menu */}
            <button
                onClick={toggleMenu}
                className="bg-gray-200 text-dark font-semibold py-3 px-4 rounded-xl inline-flex items-center"
            >
                <FaBars className="mr-3" />
                <span><FaUserCircle /></span>
            </button>

            {/* Menu content */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg">

                    <button
                        onClick={() => handleNavigation('/account')}
                        className="block w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                        <FaKey className="mr-2" /> Account
                    </button>


                    {/* Log Out Section (no icon here) */}
                    <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-3 text-sm text-red-600 hover:bg-gray-100"
                    >
                        Log Out
                    </button>
                </div>
            )}
            
        </div>
    );
};

export default DropdownMenu;
