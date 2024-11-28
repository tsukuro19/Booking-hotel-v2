import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FiHome, FiUsers, FiMenu, FiBook, FiKey, FiThumbsUp, FiMessageCircle, FiSettings, FiLogOut, FiPackage } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ManagerHotel = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove('authTokenManager'); // Remove token cookie
        Cookies.remove('managerId'); // Remove token cookie
        navigate('/login'); // Redirect to login page
    };

    const menuItemStyles = {
        root: {
            fontSize: '14px',
            fontWeight: 500,
        },
        button: {
            '&:hover': {
                backgroundColor: '#5a4ab0', // Darker shade on hover
            },
        },
        icon: {
            color: 'white',
        },
        label: {
            color: 'white',
        },
    };

    const accountMenuItemStyle = {
        '&:hover': {
            backgroundColor: '#5a4ab0', // Darker shade on hover for Account submenu items
        },
    };

    return (
        <Sidebar
            backgroundColor="#5744E3"
            collapsed={collapsed}
            width="260px"
            collapsedWidth="80px"
            style={{ border: 'none' }}
        >
            <div className="flex items-center justify-between p-4 border-b border-[#7466E9]">
                {!collapsed && (
                    <div className="text-white text-xl font-bold flex items-center gap-2">
                        <span className="text-2xl">📄</span> ManagerHotel
                    </div>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="text-white hover:bg-[#7466E9] p-2 rounded-lg"
                >
                    <FiMenu size={24} />
                </button>
            </div>

            <Menu menuItemStyles={menuItemStyles}>
                <MenuItem
                    icon={<FiUsers size={20} />}
                    component={<Link to="/guest" />}
                >
                    Guest
                </MenuItem>
                
                <MenuItem
                    icon={<FiBook size={20} />}
                    component={<Link to="/room" />}
                >
                    Room
                </MenuItem>
                {/* New ListHotel Menu with an Icon */}
                <MenuItem
                    icon={<FiPackage size={20} />} // Used FiPackage as a placeholder
                    component={<Link to="/list-hotel" />}
                >
                    List Hotel
                </MenuItem>
                <MenuItem
                    icon={<FiThumbsUp size={20} />}
                    component={<Link to="/review" />}
                >
                    Review
                </MenuItem>
                <MenuItem
                    icon={<FiMessageCircle size={20} />}
                    component={<Link to="/message" />}
                >
                    Message
                </MenuItem>
                
                {/* Account Menu with Logout Button */}
                <SubMenu icon={<FiSettings size={20} />} label="Account" style={accountMenuItemStyle}>
                    <MenuItem className='bg-[#5744E3]' icon={<FiLogOut size={20} />} onClick={handleLogout}>
                        Log out
                    </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    );
};

export default ManagerHotel;
