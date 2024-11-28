import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createBedType } from "../services/apiServices";

const CreateBedTypeForm = () => {
    const { hotelId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        bedTypeName: "",
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
            await createBedType({ ...formData, hotelId });
            navigate(`/detail-room/bed-types/${hotelId}`);
        } catch (err) {
            setError(err.message || "Error creating bed type.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="container mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Bed Type</h2>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="typeName" className="block text-sm font-medium text-gray-700">
                                Bed Type Name
                            </label>
                            <input
                                type="text"
                                id="bedTypeName"
                                name="bedTypeName"
                                value={formData.bedTypeName}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter bed type name"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Create Bed Type
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateBedTypeForm;
