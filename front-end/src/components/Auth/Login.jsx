// import { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";
// import { postLogin } from "../../services/apiService";
// import { toast } from 'react-toastify';
// import { NavLink } from 'react-router-dom';

// const Login = (props) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const HandleLogin = async () => {
//         //validate

//         //submit api 
//         let res = await postLogin(email, password)
//         if (res && res.EC === 0) {
//             toast.success("Success");
//         }
//         if (res && res.EC !== 0) {
//             toast.error("Error")
//         }
//     }

//     const handleSignUp = () => {
//         navigate('/register'); // Điều hướng tới trang /register
//     }

//     return (
//         <section >
//             <nav className="bg-blue-700 border-blue-200 px-3 sm:px-4 py-4 rounded dark:bg-gray-900">
//                 <div className="container flex flex-wrap items-center justify-between mx-auto">
//                     <NavLink to="/" className="flex items-center">
//                         <img
//                             src="https://flowbite.com/docs/images/logo.svg"
//                             className="h-12 sm:h-16"
//                             alt="Logo"
//                         />
//                     </NavLink>
//                 </div>
//             </nav>
//             <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//                 <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//                     <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
//                         Sign in to your account
//                     </h2>
//                 </div>

//                 <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//                     <form action="#" method="POST" className="space-y-6">
//                         <div>
//                             <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">
//                                 Email address
//                             </label>
//                             <div className="mt-2">
//                                 <input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     required
//                                     autoComplete="email"
//                                     value={email}
//                                     onChange={(event) => setEmail(event.target.value)}
//                                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <div className="flex items-center justify-between">
//                                 <label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-900">
//                                     Password
//                                 </label>
//                                 <div className="text-sm">
//                                     <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                                         Forgot password?
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className="mt-2">
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     required
//                                     autoComplete="current-password"
//                                     value={password}
//                                     onChange={(event) => setPassword(event.target.value)}
//                                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <button
//                                 type="submit"
//                                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                                 onClick={() => HandleLogin()}
//                             >
//                                 Sign in
//                             </button>
//                         </div>
//                     </form>
//                     <p className="mt-10 text-center text-sm text-gray-500">
//                         Not a member?{' '}
//                         <button
//                             onClick={handleSignUp}
//                             className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
//                         >
//                             Sign up
//                         </button>
//                     </p>
//                 </div>
//                 <div
//                     className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
//                     <p
//                         className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
//                         OR
//                     </p>
//                 </div>
//                 <span>
//                     <div className="flex items-center justify-center">
//                         <button type="submit" className="flex items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//                             <FcGoogle className="mr-2" /> Login with Google
//                         </button>
//                     </div>
//                 </span>
//             </div>
//         </section>
//     )
// }
// export default Login;
import { useState } from "react";
import { toast } from 'react-toastify';
import { postLogin } from "../../services/apiService";
import Register from "./Register";
import { IoClose } from 'react-icons/io5';

const Login = ({ toggleModal }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        let res = await postLogin(email, password);
        if (res && res.EC === 0) {
            toast.success("Success");
            toggleModal && toggleModal(); // Close modal on success if available
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
                        className="w-full bg-pink-500 hover:bg-pink-400 text-white font-semibold py-2 rounded-md shadow-md"
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
                    <button
                        onClick={toggleModal}
                        className="text-indigo-600 hover:underline font-semibold "
                    >
                        Dùng tài khoản khác
                    </button>
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
