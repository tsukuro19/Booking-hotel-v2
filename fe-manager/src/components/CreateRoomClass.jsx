import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createRoomClass } from "../services/apiServices"; // Giả sử có hàm createRoomClass trong apiServices

const CreateRoomClassForm = () => {
    const { hotelId } = useParams(); // Lấy hotelId từ URL
    const navigate = useNavigate(); // Dùng để điều hướng
    const [formData, setFormData] = useState({
        className: "",
        basePrice: "",
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!hotelId) {
                throw new Error("Hotel ID is missing.");
            }
            // Gửi dữ liệu lên API
            await createRoomClass({ ...formData, hotelId });
            // Điều hướng trở lại danh sách Room Classes
            navigate(`/detail-room/room-classes/${hotelId}`);
        } catch (err) {
            setError(err.message || "Error creating room class.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="container mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Room Class</h2>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Class Name */}
                        <div>
                            <label htmlFor="className" className="block text-sm font-medium text-gray-700">
                                Room Class Name
                            </label>
                            <input
                                type="text"
                                id="className"
                                name="className"
                                value={formData.className}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter room class name"
                            />
                        </div>
                        {/* Base Price */}
                        <div>
                            <label htmlFor="basePrice" className="block text-sm font-medium text-gray-700">
                                Base Price
                            </label>
                            <input
                                type="number"
                                id="basePrice"
                                name="basePrice"
                                value={formData.basePrice}
                                onChange={handleChange}
                                required
                                min="0"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter base price"
                            />
                        </div>
                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Create Room Class
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateRoomClassForm;