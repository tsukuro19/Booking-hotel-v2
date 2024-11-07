import { useState } from "react";
import { toast } from 'react-toastify';
import { postLogin } from "../../services/apiService";
import Register from "./Register";
import { IoClose } from 'react-icons/io5';

const Login = ({toggleToRegister, toggleModal, onLoginSuccess }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        let res = await postLogin(email, password);
        console.log(res)
        if (res.status===201) {
            toast.success("Success");
            onLoginSuccess();
            toggleModal(); // Close modal on success if available
        } else {
            toast.error("Error");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 shadow-lg w-[500px] relative">
                <h2 className="text-center text-black text-xl font-bold mb-2">
                    Chào mừng bạn quay trở lại
                </h2>
                <div className="flex flex-col items-center mb-4">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-12 sm:h-16"
                            alt="Logo"
                        />
                    </div>
                </div>

                <form
                    className="space-y-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                    }}
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-lg font-medium text-gray-900"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full rounded-md border py-2 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-lg font-medium text-gray-900"
                        >
                            Mật khẩu
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full rounded-md border py-2 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:opacity-90"
                    >
                        Đăng nhập
                    </button>
                </form>

                <div className="mt-4 text-center text-sm">
                    <a href="#" className="text-indigo-600 hover:underline">
                        Bạn đã quên mật khẩu?
                    </a>
                </div>
                <div className="mt-2 text-center text-sm ">
                <p className="text-center text-gray-500 mt-6">
                    Bạn chưa tài khoản?{' '}
                    <a
                        onClick={toggleToRegister}
                        className="text-indigo-600 hover:underline cursor-pointer"
                    >
                        Đăng ký ngay
                    </a>
                </p>
                </div>

                {/* Close Button */}
                {toggleModal && (
                    <button
                        className="absolute top-4 right-6 text-gray-600 text-3xl"
                        onClick={toggleModal}
                    >
                        <IoClose size={24} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Login;
