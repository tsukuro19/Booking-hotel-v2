import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginManager } from '../services/apiServices'; // Import the login API function
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data={
                email:username,
                password:password
            }
            const response = await loginManager(data);
            console.log(response);
            if (response.data.statusCode === 200) {
                // Save the token in cookies
                Cookies.set('authTokenManager', response.data.data.token);
                Cookies.set('managerId', response.data.data.managerId);
                toast.success('Login successful!');
                navigate('/dashboard'); // Redirect to dashboard after successful login
            } else {
                toast.error(response.data.data.message || 'Invalid username or password');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('Login failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/your-background-image.jpg')" }}>
            <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
                <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Hotel Management Login</h2>
                    {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-medium">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-medium">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                required
                            />
                        </div>

                        <button type="submit" className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300">
                            Login
                        </button>
                        <div className="text-center">
                            <p className="text-sm">
                                Don't have an account?{' '}
                                <Link to="/register" className="text-blue-500 hover:underline">
                                    Register here
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
