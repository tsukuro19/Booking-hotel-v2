import React from 'react';
import { FaRegUserCircle, FaLock, FaCreditCard, FaRegEye, FaRegBell, FaUsers } from 'react-icons/fa';
import { MdOutlinePrivacyTip } from "react-icons/md";

const MySettings = () => {
    return (
        <div className="flex justify-center p-6 mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                {/* Title for Account Settings */}
                <h2 className="text-3xl font-bold mb-4 col-span-2 text-left">Cài đặt tài khoản</h2>

                {/* Card for Personal Information */}
                <div className="border rounded-lg p-4 flex items-start w-auto">
                    <FaRegUserCircle className="text-2xl mr-4 self-center" />
                    <div>
                        <h3 className="text-xl font-semibold mb-1">Thông tin cá nhân</h3>
                        <p className="text-black mb-2">
                            Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.
                        </p>
                        <a href="/account/personal" className="text-blue-500 hover:underline">Quản lý thông tin cá nhân</a>
                    </div>
                </div>

                {/* Card for Options */}
                <div className="border rounded-lg p-4 flex items-start w-auto">
                    <FaRegEye className="text-2xl mr-4 self-center" />
                    <div>
                        <h3 className="text-xl font-semibold mb-1">List booking</h3>
                        <p className="text-black mb-2">
                        Where to store your booking hotel list
                        </p>
                        <a href="/account/list-booking" className="text-blue-500 hover:underline">Quản lý tuỳ chọn</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MySettings;
