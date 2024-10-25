import React, { useState } from 'react';

const DropdownFilter = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-4 max-w-xs ml-auto"> {/* Đặt khung nhỏ và căn phải */}
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleDropdown}>
                <h3 className="text-md font-medium">{title}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className="mt-2 p-4 bg-white rounded-lg shadow-sm border">
                    {children}
                </div>
            )}
        </div>
    );
};

export default DropdownFilter;
