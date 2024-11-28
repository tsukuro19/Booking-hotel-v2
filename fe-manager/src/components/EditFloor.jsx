import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFloorById, updateFloor } from "../services/apiServices"; // API services for fetching and updating floors

const UpdateFloorForm = () => {
    const { hotelId, floorId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        floorNumber: "",
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFloor = async () => {
            try {
                const response = await getFloorById(floorId);
                setFormData({
                    floorNumber: response.data.floorNumber,
                });
            } catch (err) {
                setError("Error fetching floor data.");
            }
        };

        if (floorId) {
            fetchFloor();
        }
    }, [floorId]);

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
            await updateFloor(floorId, {...formData,hotelId});
            navigate(`/detail-room/floor/${hotelId}`);
        } catch (err) {
            setError("Error updating floor.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="container mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Floor</h2>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="floorNumber" className="block text-sm font-medium text-gray-700">
                                Floor Number
                            </label>
                            <input
                                type="text"
                                id="floorNumber"
                                name="floorNumber"
                                value={formData.floorNumber}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Update Floor
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateFloorForm;
