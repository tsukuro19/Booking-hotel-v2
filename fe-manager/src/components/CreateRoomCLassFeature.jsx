import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import { getRoomClassByHotelId, getFeaturesByHotelId, createRoomClassFeature } from "../services/apiServices"; // Replace with your actual API functions

const CreateRoomClassFeatureForm = () => {
    const { hotelId } = useParams();
    const navigate = useNavigate(); // Initialize useNavigate
    const [roomClasses, setRoomClasses] = useState([]);
    const [features, setFeatures] = useState([]);
    const [selectedRoomClass, setSelectedRoomClass] = useState("");
    const [selectedFeatures, setSelectedFeatures] = useState([]); // Array to hold selected feature IDs
    const [featureName, setFeatureName] = useState(""); // Additional feature details (optional)
    const [featureDescription, setFeatureDescription] = useState(""); // Optional
    const [featurePrice, setFeaturePrice] = useState(""); // Optional
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRoomClasses = async () => {
            setLoading(true);
            try {
                const response = await getRoomClassByHotelId(hotelId); // Fetch room classes for the hotel
                console.log(response);
                setRoomClasses(response.data || []);
            } catch (err) {
                setError("Error fetching room classes.");
                console.error(err);
            }finally {
                setLoading(false);
            }
        };

        const fetchFeatures = async () => {
            setLoading(true);
            try {
                const response = await getFeaturesByHotelId(hotelId); // Fetch available features for the hotel
                setFeatures(response.data || []);
            } catch (err) {
                setError("Error fetching features.");
                console.error(err);
            }finally {
                setLoading(false);
            }
        };

        if (hotelId) {
            fetchRoomClasses();
            fetchFeatures();
        }
    }, [hotelId]);

    const handleFeatureSelection = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedFeatures((prev) => [...prev, value]);
        } else {
            setSelectedFeatures((prev) => prev.filter((id) => id !== value));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedRoomClass || selectedFeatures.length === 0) {
            setError("Please select a room class and at least one feature.");
            return;
        }

        try {
            // Combine the selected features with additional feature details (if any)
            const requestJSON = {
                roomClassId:parseInt(selectedRoomClass),
                featureId:selectedFeatures.map((id) => parseInt(id)),
            }

            await createRoomClassFeature(requestJSON);

            // Redirect after success using navigate
            navigate(`/detail-room/room-classes-with-features/${hotelId}`);
        } catch (err) {
            setError("Error adding feature to room class.");
            console.error(err);
        }
    };

    if (loading) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Add Features to Room Class</h2>
                </div>

                {/* Form for adding feature */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit}>
                        {/* Room Class Selector */}
                        <div className="mb-4">
                            <label htmlFor="roomClass" className="block text-sm font-semibold text-gray-700">
                                Room Class
                            </label>
                            <select
                                id="roomClass"
                                value={selectedRoomClass}
                                onChange={(e) => setSelectedRoomClass(e.target.value)}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                            >
                                <option value="">Select a Room Class</option>
                                {roomClasses.map((roomClass) => (
                                    <option key={roomClass.id} value={roomClass.id}>
                                        {roomClass.className}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Available Features (Multi-select or checkboxes) */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700">Select Features</label>
                            <div className="mt-2 space-y-2">
                                {features.map((feature) => (
                                    <div key={feature.id} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`feature-${feature.id}`}
                                            value={feature.id}
                                            onChange={handleFeatureSelection}
                                            className="mr-2"
                                        />
                                        <label htmlFor={`feature-${feature.id}`} className="text-gray-700">
                                            {feature.featureName} ({feature.featurePrice} USD)
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Add Features
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateRoomClassFeatureForm;
