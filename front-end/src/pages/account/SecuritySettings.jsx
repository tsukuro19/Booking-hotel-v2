import React from 'react';
import { FaRegUserCircle, FaLock, FaCreditCard, FaRegEye, FaRegBell, FaUsers } from 'react-icons/fa';
import { MdOutlinePrivacyTip } from "react-icons/md";

const SecuritySettings = () => {
    return (
        <div className="flex justify-center p-6">
            <div className="w-1/3 border border-gray-300 rounded-md h-[100%] max-h-screen">
                <ul className="space-y-2">
                    <li className="flex items-center py-2 px-4">
                        <FaRegUserCircle className="text-xl mr-2" />
                        <a href="/account/personal" className="text-blue-500">Thông tin cá nhân</a>
                    </li>
                    <div className="border-t border-gray-300" />
                    <li className="flex items-center py-2 px-4">
                        <FaRegEye className="text-xl mr-2" />
                        <a href="/account/preferences" className="text-blue-500">Cài đặt chung</a>
                    </li>
                    <div className="border-t border-gray-300" />
                    <li className="flex items-center py-2 px-4">
                        <FaLock className="text-xl mr-2" />
                        <a href="/account/security" className="text-blue-500">Cài đặt bảo mật</a>
                    </li>
                    <div className="border-t border-gray-300" />
                    <li className="flex items-center py-2 px-4">
                        <FaCreditCard className="text-xl mr-2" />
                        <a href="/account/payment" className="text-blue-500">Phương thức thanh toán</a>
                    </li>
                    <div className="border-t border-gray-300" />
                    <li className="flex items-center py-2 px-4">
                        <MdOutlinePrivacyTip className="text-xl mr-2" />
                        <a href="#" className="text-blue-500">Cài đặt quyền riêng tư</a>
                    </li>
                    <div className="border-t border-gray-300" />
                    <li className="flex items-center py-2 px-4">
                        <FaRegBell className="text-xl mr-2" />
                        <a href="#" className="text-blue-500">Cài đặt email</a>
                    </li>
                    <div className="border-t border-gray-300" />
                    <li className="flex items-center py-2 px-4">
                        <FaUsers className="text-xl mr-2" />
                        <a href="#" className="text-blue-500">Người đi cùng</a>
                    </li>
                </ul>
            </div>
            {/* Chưa điền thì màu chữ nhạt 
            Điền rồi thì màu chữ đậm */}
            <div className="flex-1 rounded-lg p-4 ml-10 max-w-2xl">
                <h2 className="text-2xl font-bold mb-2">An toàn và bảo mật</h2>
                <h4 className="mb-3">Thay đổi thiết lập bảo mật, cài đặt xác thực bổ sung hoặc xóa tài khoản.</h4>
                <div className="border-t border-gray-300 mb-4" />
                <div className="mb-4">
                    <p className="font-semibold">Mật khẩu:</p>
                    <div className="flex items-center justify-between">
                        <p>Đổi mật khẩu thường xuyên để giữ tài khoản của bạn được bảo mật</p>
                        <button className="text-blue-600">Cài lại</button>
                    </div>
                </div>
                <div className="border-t border-gray-300 mb-4" />
                <div className="mb-4">
                    <p className="font-semibold">Xác thực 2 yếu tố:</p>
                    <div className="flex items-center justify-between">
                        <p>Tăng độ bảo mật cho tài khoản bằng cách thiết thập xác thực 2 yếu tố.</p>
                        <button className="text-blue-600">Thiết lập</button>
                    </div>
                </div>
                <div className="border-t border-gray-300 mb-4" />
                <div className="mb-4">
                    <p className="font-semibold">Các phiên truy cập đang có hiệu lực:</p>
                    <div className="flex items-center justify-between">
                        <p>Khi chọn "Đăng xuất", bạn sẽ đăng xuất khỏi tất cả các thiết bị trừ thiết bị này và có thể mất đến 10 phút.</p>
                        <button className="text-blue-600">Đăng xuất</button>
                    </div>
                </div>
                <div className="border-t border-gray-300 mb-4" />
                <div className="mb-4">
                    <p className="font-semibold">Xóa tài khoản:</p>
                    <div className="flex items-center justify-between">
                        <p>Xóa tài khoản vĩnh viễn</p>
                        <button className="text-blue-600">Xóa tài khoản</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecuritySettings;
