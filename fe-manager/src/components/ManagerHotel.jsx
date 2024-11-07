import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FiHome, FiUsers, FiMenu, FiBook, FiKey, FiThumbsUp, FiMessageCircle, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ManagerHotel = () => {
    const [collapsed, setCollapsed] = useState(false);

    const menuItemStyles = {
        root: {
            fontSize: '14px',
            fontWeight: 500,
        },
        button: {
            '&:hover': {
                backgroundColor: '#7466E9',
            },
        },
        icon: {
            color: 'white',
        },
        label: {
            color: 'white',
        },
    };

    return (
        <Sidebar
            backgroundColor="#5744E3"
            collapsed={collapsed}
            width="260px"
            collapsedWidth="80px"
            style={{ height: '100vh', border: 'none' }}
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
                    icon={<FiHome size={20} />}
                    component={<Link to="/dashboard" />}
                    className="mt-4"
                >
                    Dashboard
                </MenuItem>
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
                <MenuItem
                    icon={<FiKey size={20} />}
                    component={<Link to="/frontdesk" />}
                >
                    Front desk
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
                <MenuItem
                    icon={<FiSettings size={20} />}
                    component={<Link to="/account" />}
                >
                    Account
                </MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default ManagerHotel;
