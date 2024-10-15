import React, { useState } from 'react';
import { FaRegUserCircle, FaLock, FaCreditCard, FaRegEye, FaRegBell, FaUsers } from 'react-icons/fa';
import { MdOutlinePrivacyTip } from "react-icons/md";
import PersonalSettings from './PersonalSettings';
import PreferencesSettings from './PreferencesSettings';
import SecuritySettings from './SecuritySettings';
import PaymentSettings from './PaymentSettings';
import PrivacySettings from './PrivacySettings';
import EmailSettings from './EmailSettings';

const settingsComponents = [
    {
        title: 'Thông tin cá nhân',
        icon: <FaRegUserCircle className="text-2xl mr-4 self-center" />,
        component: <PersonalSettings />,
        description: 'Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.',
    },
    {
        title: 'Cài đặt tùy chọn',
        icon: <FaRegBell className="text-2xl mr-4 self-center" />,
        component: <PreferencesSettings />,
        description: 'Thay đổi ngôn ngữ, tiền tệ và các yêu cầu hỗ trợ.',
    },
    {
        title: 'Cài đặt bảo mật',
        icon: <FaLock className="text-2xl mr-4 self-center" />,
        component: <SecuritySettings />,
        description: 'Thay đổi thiết lập bảo mật, cài đặt xác thực bổ sung hoặc xóa tài khoản.',
    },
    {
        title: 'Cài đặt thanh toán',
        icon: <FaCreditCard className="text-2xl mr-4 self-center" />,
        component: <PaymentSettings />,
        description: 'Thêm hoặc bỏ các phương thức thanh toán một cách bảo mật để dễ đặt hơn.',
    },
    {
        title: 'Cài đặt quyền riêng tư',
        icon: <FaRegEye className="text-2xl mr-4 self-center" />,
        component: <PrivacySettings />, // Replace with actual component
        description: 'Thực hiện quyền riêng tư và kiểm soát cách dữ liệu của bạn được sử dụng.',
    },
    {
        title: 'Cài đặt email',
        icon: <FaUsers className="text-2xl mr-4 self-center" />,
        component: <EmailSettings />, // Replace with actual component
        description: 'Chọn những gì sẽ được thông báo đến bạn và tắt các thông báo không cần thiết.',
    },
];

const MySettings = () => {
    const [activeComponent, setActiveComponent] = useState(null); // Initially, no component is active

    const renderComponent = () => {
        if (activeComponent) {
            const currentComponent = settingsComponents.find(
                (setting) => setting.title === activeComponent
            );
            return currentComponent ? currentComponent.component : null;
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                <h2 className="text-3xl font-bold mb-4 col-span-2 text-left">Cài đặt tài khoản</h2>
                {settingsComponents.map((setting, index) => (
                    <div key={index} className="border rounded-lg p-6 flex items-start w-auto">
                        {setting.icon}
                        <div>
                            <h3 className="text-xl font-semibold mb-1">{setting.title}</h3>
                            <p className="text-black mb-2">{setting.description}</p>
                            <button
                                onClick={() => setActiveComponent(setting.title)}
                                className="text-blue-500 hover:underline"
                            >
                                Quản lý {setting.title.toLowerCase()}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="flex justify-center p-6">
            {renderComponent()} {/* Conditionally render the component based on state */}
        </div>
    );
};

export default MySettings;
