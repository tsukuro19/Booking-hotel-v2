import React, { useState, useEffect } from 'react';
import { FaRegUserCircle, FaLock, FaCreditCard, FaRegEye, FaRegBell, FaUsers } from 'react-icons/fa';
import { MdOutlinePrivacyTip } from "react-icons/md";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getProfileById, updateProfileById } from '../../services/apiService';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const PersonalSettings = () => {
    const [username, setUsername] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errorMessage, setErrorMessage] = useState("");  // State to store error messages
    const userId = Cookies.get("user_id");

    useEffect(() => {
        const fetchCustomerInfo = async () => {
            try {
                if (userId) {
                    const customerInfo = await getProfileById(userId);
                    setUsername(customerInfo.data.username);
                    setLastName(customerInfo.data.last_name);
                    setFirstName(customerInfo.data.first_name);
                    setPhoneNumber(customerInfo.data.phone_number);
                } else {
                    console.error("User ID not found in cookies.");
                }
            } catch (error) {
                console.error("Error fetching customer info:", error);
            }
        };

        fetchCustomerInfo();
    }, []);

    const handleUpdate = async () => {
        console.log("Update button clicked!");  // Add this log to check if it's triggered
        if (!username || !lastName || !firstName || !phoneNumber) {
            setErrorMessage("Vui lòng nhập đầy đủ thông tin.");
            return;  // Prevent further action if any required field is empty
        }

        // Check phone number length
        if (phoneNumber.length <= 10 || phoneNumber.length > 12) {
            setErrorMessage("Số điện thoại phải có từ 10 đến 12 ký tự. Vui lòng nhập lại.");
            return;  // Prevent further action if phone number is invalid
        } else {
            setErrorMessage("");  // Clear error message if phone number is valid
        }

        const updatedData = {
            username:username,
            last_name: lastName,
            first_name: firstName,
            phone_number: phoneNumber
        }; 

        try {
            const response = await updateProfileById(userId, updatedData);
            console.log("Response:", response);
            if (response.status==200) {
                toast.success("Cập nhật thành công!");
            } else {
                toast.error("Cập nhật thất bại!");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <>
            <Header />
            <div className="flex justify-center p-6 mt-24">
                <div className="flex-1 rounded-lg p-4 ml-10 max-w-2xl">
                    <h2 className="text-2xl font-bold mb-2">Thông tin cá nhân</h2>
                    <div className="border-t border-gray-300 mb-4" />

                    {/* Username */}
                    <div className="mb-4">
                        <label className="font-semibold">Tên người dùng:</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border rounded-md w-full p-2"
                            placeholder='Nhập username'
                        />
                    </div>

                    {/* Last Name */}
                    <div className="mb-4">
                        <label className="font-semibold">Họ:</label>
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="border rounded-md w-full p-2"
                            placeholder='Nhập họ'
                        />
                    </div>

                    {/* First Name */}
                    <div className="mb-4">
                        <label className="font-semibold">Tên:</label>
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="border rounded-md w-full p-2"
                            placeholder='Nhập tên'
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-4">
                        <label className="font-semibold">Số điện thoại:</label>
                        <input
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="border rounded-md w-full p-2"
                            placeholder='Nhập số điện thoại'
                        />
                    </div>

                    {/* Error Message */}
                    {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}

                    {/* Update Button */}
                    <button
                        onClick={handleUpdate}
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md w-full mt-4"
                    >
                        Update
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PersonalSettings;
