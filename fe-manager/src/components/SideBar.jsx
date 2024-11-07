// import React, { useState } from 'react';
// import { FiSearch, FiFileText, FiPlus, FiHome, FiUsers, FiCalendar, FiClock, FiDollarSign, FiFile } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {

//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };
//     return (
//         <nav className="mt-6">
//             <ul className="space-y-2 px-4">
//                 <li>
//                     <Link to="/dashboard" className="flex items-center gap-4 text-white py-3 px-4 rounded-lg bg-white/20">
//                         <FiHome size={20} />
//                         <span className={`${isSidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>Dashboard</span>
//                     </Link>
//                 </li>
//                 <li>
//                     <a href="#" className="flex items-center gap-4 text-white py-3 px-4 rounded-lg hover:bg-[#7466E9]">
//                         <FiUsers size={20} />
//                         <span className={`${isSidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>Guest</span>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#" className="flex items-center gap-4 text-white py-3 px-4 rounded-lg hover:bg-[#7466E9]">
//                         <FiClock size={20} />
//                         <span className={`${isSidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>Room</span>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#" className="flex items-center gap-4 text-white py-3 px-4 rounded-lg hover:bg-[#7466E9]">
//                         <FiCalendar size={20} />
//                         <span className={`${isSidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>Calendar</span>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#" className="flex items-center gap-4 text-white py-3 px-4 rounded-lg hover:bg-[#7466E9]">
//                         <FiClock size={20} />
//                         <span className={`${isSidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>Rate</span>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#" className="flex items-center gap-4 text-white py-3 px-4 rounded-lg hover:bg-[#7466E9]">
//                         <FiDollarSign size={20} />
//                         <span className={`${isSidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>Message</span>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#" className="flex items-center gap-4 text-white py-3 px-4 rounded-lg hover:bg-[#7466E9]">
//                         <FiFile size={20} />
//                         <span className={`${isSidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>Document</span>
//                     </a>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// export default Sidebar;