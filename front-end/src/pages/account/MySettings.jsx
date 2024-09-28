import React from 'react';
import { FaRegUserCircle, FaLock, FaCreditCard, FaRegEye, FaRegBell, FaUsers } from 'react-icons/fa';
import { MdOutlinePrivacyTip } from "react-icons/md";

const MySettings = () => {
    return (
        <div className="flex justify-center p-6">
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
                        <h3 className="text-xl font-semibold mb-1">Cài đặt chung</h3>
                        <p className="text-black mb-2">
                            Thay đổi ngôn ngữ, tiền tệ và các yêu cầu hỗ trợ khuyết tật.
                        </p>
                        <a href="/account/preferences" className="text-blue-500 hover:underline">Quản lý tuỳ chọn</a>
                    </div>
                </div>

                {/* Card for Security and Privacy */}
                <div className="border rounded-lg p-4 flex items-start w-auto">
                    <FaLock className="text-2xl mr-4 self-center" />
                    <div>
                        <h3 className="text-xl font-semibold mb-1">Cài đặt bảo mật</h3>
                        <p className="text-black mb-2">
                            Thay đổi thiết lập bảo mật, cài đặt xác thực bổ sung hoặc xoá tài khoản của Quý vị.
                        </p>
                        <a href="/account/security" className="text-blue-500 hover:underline">Quản lý bảo mật tài khoản</a>
                    </div>
                </div>

                {/* Card for Payment Information */}
                <div className="border rounded-lg p-4 flex items-start w-auto">
                    <FaCreditCard className="text-2xl mr-4 self-center" />
                    <div>
                        <h3 className="text-xl font-semibold mb-1">Phương thức thanh toán</h3>
                        <p className="text-black mb-2">
                            Thêm hoặc bỏ các phương thức thanh toán một cách bảo mật dễ để đặt hơn.
                        </p>
                        <a href="/account/payment" className="text-blue-500 hover:underline">Quản lý thông tin thanh toán</a>
                    </div>
                </div>

                {/* Card for Privacy */}
                <div className="border rounded-lg p-4 flex items-start w-auto">
                    <MdOutlinePrivacyTip className="text-2xl mr-4 self-center" />
                    <div>
                        <h3 className="text-xl font-semibold mb-1">Cài đặt quyền riêng tư</h3>
                        <p className="text-black mb-2">
                            Thực hiện quyền riêng tư và kiểm soát cách dữ liệu của bạn được sử dụng.
                        </p>
                        <a href="#" className="text-blue-500 hover:underline">Quản lý quyền riêng tư</a>
                    </div>
                </div>

                {/* Card for Email Notifications */}
                <div className="border rounded-lg p-4 flex items-start w-auto">
                    <FaRegBell className="text-2xl mr-4 self-center" />
                    <div>
                        <h3 className="text-xl font-semibold mb-1">Cài đặt email</h3>
                        <p className="text-black mb-2">
                            Chọn những gì được thông báo đến bạn và tắt các thông báo không cần thiết.
                        </p>
                        <a href="#" className="text-blue-500 hover:underline">Quản lý thông báo</a>
                    </div>
                </div>

                {/* Card for Accompanying Persons */}
                <div className="border rounded-lg p-4 flex items-start w-auto">
                    <FaUsers className="text-2xl mr-4 self-center" />
                    <div>
                        <h3 className="text-xl font-semibold mb-1">Người đi cùng</h3>
                        <p className="text-black mb-2">
                            Thêm hoặc chỉnh sửa thông tin của những người mà bạn đi cùng.
                        </p>
                        <a href="#" className="text-blue-500 hover:underline">Quản lý người đi cùng</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySettings;
