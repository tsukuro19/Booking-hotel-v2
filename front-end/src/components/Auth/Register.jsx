import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaFacebook, FaGoogle, FaPhone } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5'; // Icon đóng

const Register = ({ toggleToLogin, toggleModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (!email) {
            toast.error("Vui lòng nhập email");
            return;
        }
        if (password !== confirmPassword) {
            toast.error("Mật khẩu không khớp. Vui lòng kiểm tra lại.");
            return;
        }
        toast.success("Đăng ký thành công (Mock)");
        console.log("Người dùng đăng ký với email:", email);
        toggleModal(); // Đóng modal sau khi đăng ký thành công
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white shadow-xl rounded-lg max-w-md w-[500px] p-8 relative">
                {/* Nút đóng (X) */}
                <button
                    className="absolute top-5 right-6 text-gray-600 hover:text-gray-900"
                    onClick={toggleModal}
                >
                    <IoClose size={24} />
                </button>

                <div className="text-center mb-6">
                    <h2 className="text-2xl text-black font-bold">Đăng ký</h2>
                </div>

                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                    />
                    <input
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                    />

                    <button
                        onClick={handleRegister}
                        className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:opacity-90"
                    >
                        Đăng ký
                    </button>

                    <div className="flex items-center justify-center my-4">
                        <span className="border-t border-gray-300 flex-grow"></span>
                        <span className="px-4 text-gray-500">hoặc</span>
                        <span className="border-t border-gray-300 flex-grow"></span>
                    </div>

                    <button className="w-full flex items-center justify-center text-black py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
                        <FaGoogle className="mr-2 text-red-500" /> Tiếp tục với Google
                    </button>

                </div>

                <p className="text-center text-gray-500 mt-6">
                    Bạn đã có tài khoản?{' '}
                    <a
                        onClick={toggleToLogin}
                        className="text-indigo-600 hover:underline cursor-pointer"
                    >
                        Đăng nhập
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
