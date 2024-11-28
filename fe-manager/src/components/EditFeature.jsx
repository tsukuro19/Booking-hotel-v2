import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateFeature } from "../services/apiServices";
import axios from "axios";

const UpdateFeatureForm = () => {
    const { hotelId, featureId } = useParams(); // Lấy hotelId và featureId từ URL
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        featureName: "",
        featureDescription: "",
        featurePrice: "",
    });

    const [error, setError] = useState(null);

    useEffect(() => {
        // Lấy dữ liệu feature hiện tại từ API khi render form
        const fetchFeature = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/manager/feature/${featureId}`
                );
                setFormData({
                    featureName: response.data.data.featureName,
                    featureDescription: response.data.data.featureDescription,
                    featurePrice: response.data.data.featurePrice,
                });
            } catch (err) {
                setError(err.message || "Error fetching feature data.");
            }
        };
        
        fetchFeature();
    }, [featureId]);

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
            if (!hotelId || !featureId) {
                throw new Error("Hotel ID or Feature ID is missing.");
            }
            // Gửi dữ liệu cập nhật lên API
            await updateFeature(featureId, { ...formData, hotelId });
            // Điều hướng trở lại danh sách Feature
            navigate(`/detail-room/features/${hotelId}`);
        } catch (err) {
            setError(err.message || "Error updating feature.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="container mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Feature</h2>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Feature Name */}
                        <div>
                            <label htmlFor="featureName" className="block text-sm font-medium text-gray-700">
                                Feature Name
                            </label>
                            <input
                                type="text"
                                id="featureName"
                                name="featureName"
                                value={formData.featureName}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter feature name"
                            />
                        </div>
                        {/* Feature Description */}
                        <div>
                            <label htmlFor="featureDescription" className="block text-sm font-medium text-gray-700">
                                Feature Description
                            </label>
                            <textarea
                                id="featureDescription"
                                name="featureDescription"
                                value={formData.featureDescription}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter feature description"
                            ></textarea>
                        </div>
                        {/* Feature Price */}
                        <div>
                            <label htmlFor="featurePrice" className="block text-sm font-medium text-gray-700">
                                Feature Price
                            </label>
                            <input
                                type="number"
                                id="featurePrice"
                                name="featurePrice"
                                value={formData.featurePrice}
                                onChange={handleChange}
                                required
                                min="0"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter feature price"
                            />
                        </div>
                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Update Feature
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateFeatureForm;
