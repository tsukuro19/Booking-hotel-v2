import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerManager } from '../services/apiServices';
import { toast } from 'react-toastify';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    retypePassword: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    retypePassword: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    let valid = true;
    let errorMessages = {
      username: '',
      password: '',
      retypePassword: ''
    };

    if (!formData.username) {
      errorMessages.username = 'Username is required';
      valid = false;
    }

    if (!formData.password) {
      errorMessages.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      errorMessages.password = 'Password must be at least 6 characters';
      valid = false;
    }

    if (formData.password !== formData.retypePassword) {
      errorMessages.retypePassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(errorMessages);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const managerData = {
          email: formData.username,
          password: formData.password,
          retype_password: formData.retypePassword,
          username:"",
          first_name:"",
          last_name:"",
          phone_number:"",
        };
        const response = await registerManager(managerData);

        if (response.data.statusCode === 200) {
          toast.success('Registration successful!');
          navigate('/login'); // Redirect to login page after successful registration
        } else {
          toast.error(response.data.data.message);
        }
      } catch (error) {
        console.error('Error during registration:', error);
        toast.error('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Retype Password */}
          <div className="mb-4">
            <label className="block text-gray-700">Retype Password</label>
            <input
              type="password"
              name="retypePassword"
              value={formData.retypePassword}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.retypePassword && <p className="text-red-500 text-xs mt-1">{errors.retypePassword}</p>}
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
