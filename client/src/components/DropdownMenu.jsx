// import React, { useState } from 'react';
// import { FaBars, FaUserCircle } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// const DropdownMenu = () => {
//     // State to control whether the user is logged in
//     const [isLoggedIn, setIsLoggedIn] = useState(false); // Change this based on your authentication logic
//     const [isOpen, setIsOpen] = useState(false);
//     const navigate = useNavigate();

//     // Function to toggle the menu state
//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     // Function to handle navigation and close the menu
//     const handleNavigation = (path) => {
//         navigate(path);
//         setIsOpen(false); // Close the menu when navigating
//     };

//     return (
//         <div className="relative inline-block text-left z-50">
//             {/* Button to open/close the menu */}
//             <button
//                 onClick={toggleMenu}
//                 className="bg-gray-200 text-dark font-semibold py-3 px-4 rounded-xl inline-flex items-center"
//             >
//                 <FaBars className="mr-3" />
//                 <span><FaUserCircle /></span>
//             </button>

//             {/* Menu content based on login status */}
//             {isOpen && (
//                 <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg">
//                     {isLoggedIn ? (
//                         // Menu for logged-in users
//                         <>
//                             {/* Profile Section */}
//                             <div className="px-4 py-2">
//                                 <h2 className="font-semibold text-gray-900">Tín</h2>
//                                 <button
//                                     onClick={() => handleNavigation('/profile')}
//                                     className="text-blue-600 hover:underline text-sm"
//                                 >
//                                     Show profile
//                                 </button>
//                             </div>
//                             <div className="border-t my-2"></div>

//                             {/* Personal & Account Section */}
//                             <button
//                                 onClick={() => handleNavigation('/personal-info')}
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             >
//                                 Personal info
//                             </button>
//                             <button
//                                 onClick={() => handleNavigation('/account')}
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             >
//                                 Account
//                             </button>
//                             <div className="border-t my-2"></div>

//                             {/* Hosting Section */}
//                             <h2 className="px-4 py-2 font-semibold text-gray-900">Hosting</h2>
//                             <button
//                                 onClick={() => handleNavigation('/host-home')}
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             >
//                                 Host a home
//                             </button>
//                             <button
//                                 onClick={() => handleNavigation('/host-experience')}
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             >
//                                 Host an experience
//                             </button>
//                             <div className="border-t my-2"></div>

//                             {/* Referrals & Credits Section */}
//                             <h2 className="px-4 py-2 font-semibold text-gray-900">Referrals & credits</h2>
//                             <button
//                                 onClick={() => handleNavigation('/refer')}
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             >
//                                 Refer a Host
//                             </button>
//                             <div className="border-t my-2"></div>

//                             {/* Support Section */}
//                             <h2 className="px-4 py-2 font-semibold text-gray-900">Support</h2>
//                             <button
//                                 onClick={() => handleNavigation('/how-it-works')}
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             >
//                                 How Airbnb works
//                             </button>
//                             <button
//                                 onClick={() => handleNavigation('/get-help')}
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             >
//                                 Get help
//                             </button>
//                             <button
//                                 onClick={() => handleNavigation('/contact-support')}
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             >
//                                 Contact Neighborhood Support
//                             </button>
//                         </>
//                     ) : (
//                         // Menu for non-logged-in users
//                         <>
//                             <button
//                                 onClick={() => handleNavigation('/signup')}
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             >
//                                 Sign up
//                             </button>
//                             <button
//                                 onClick={() => handleNavigation('/login')}
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             >
//                                 Login
//                             </button>
//                             <button
//                                 onClick={() => handleNavigation('/help-center')}
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             >
//                                 Help center
//                             </button>
//                             <button
//                                 onClick={() => handleNavigation('/contact')}
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             >
//                                 Contact
//                             </button>
//                         </>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default DropdownMenu;

import React, { useState } from 'react';
import { FaBars, FaUserCircle, FaHome, FaRegUserCircle, FaKey, FaQuestionCircle, FaHeadset } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
        setIsOpen(false); // Close the menu when logging out
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
                    {/* Profile Section */}
                    <div className="px-4 py-2 flex items-center">
                        {/* User Image */}
                        <img
                            src="https://via.placeholder.com/40" // Thay đường dẫn bằng ảnh thật của user
                            alt="User"
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <h2 className="font-semibold text-gray-900">Name User</h2>
                    </div>

                    <button
                        onClick={() => handleNavigation('/account')}
                        className="block w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                        <FaKey className="mr-2" /> Account
                    </button>

                    <button
                        onClick={() => handleNavigation('/host-home')}
                        className="block w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                        <FaHome className="mr-2" /> Tin nhắn
                    </button>

                    <button
                        onClick={() => handleNavigation('/host-home')}
                        className="block w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                        <FaHome className="mr-2" /> Thông báo
                    </button>
                    <button
                        onClick={() => handleNavigation('/host-experience')}
                        className="block w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                        <FaHome className="mr-2" /> Danh sách yêu thích
                    </button>

                    <button
                        onClick={() => handleNavigation('/get-help')}
                        className="block w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                        <FaQuestionCircle className="mr-2" /> Chuyến đi
                    </button>
                    <button
                        onClick={() => handleNavigation('/contact-support')}
                        className="block w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                        <FaHeadset className="mr-2" /> Contact Support
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
