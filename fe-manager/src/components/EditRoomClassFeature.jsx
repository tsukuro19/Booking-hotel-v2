import React, { useState, useEffect } from 'react';
import { getRoomClassFeatureById, updateRoomClassFeature } from "../services/apiServices";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateRoomClassWithFeature = () => {
    const { roomClassFeatureId, hotelId } = useParams();
    const [roomClasses, setRoomClasses] = useState([]);
    const [features, setFeatures] = useState([]);
    const [selectedRoomClass, setSelectedRoomClass] = useState('');
    const [selectedFeatures, setSelectedFeatures] = useState([]);

    // Fetch available room classes and features
    useEffect(() => {
        async function fetchData() {
            try {
                const roomClassFeatureResponse = await getRoomClassFeatureById(roomClassFeatureId, hotelId);
                console.log(roomClassFeatureResponse);
                const roomClassData = roomClassFeatureResponse.data.roomClass;
                const featureData = roomClassFeatureResponse.data.feature;

                setRoomClasses([roomClassData]); // Assuming only one room class in the response
                setSelectedRoomClass(roomClassData); // Set the initial selected room class
                setFeatures(featureData); // Set the features list

                // If some features are selected by default, you can set them here.
                const defaultSelectedFeatures = featureData.map(feature => feature.featureName); 
                setSelectedFeatures(defaultSelectedFeatures); // Pre-select all features (or based on some condition)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [roomClassFeatureId, hotelId]);

    // Handle room class selection
    const handleRoomClassChange = (e) => {
        setSelectedRoomClass(e.target.value);
    };

    // Handle feature selection
    const handleFeatureChange = (e) => {
        const featureName = e.target.value;
        setSelectedFeatures(prevState =>
            prevState.includes(featureName)
                ? prevState.filter(name => name !== featureName)
                : [...prevState, featureName]
        );
    };

    // Submit updated room class features
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateRoomClassFeature(roomClassFeatureId, selectedFeatures);
            alert('Room class updated successfully');
        } catch (error) {
            alert('Error updating room class');
            console.error(error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
            <h1 className="text-2xl font-bold mb-6 text-gray-700 text-center">Update Room Class with Features</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Room Class Selection */}
                <div>
                    <label className="block text-gray-600 font-medium mb-2">Select Room Class</label>
                    <select
                        onChange={handleRoomClassChange}
                        value={selectedRoomClass}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <option value="">Select Room Class</option>
                        {roomClasses.map((roomClass) => (
                            <option key={roomClass} value={roomClass}>
                                {roomClass}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Features Selection */}
                <div>
                    <label className="block text-gray-600 font-medium mb-2">Select Features</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {features.map((feature) => (
                            <div key={feature.featureName} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    value={feature.featureName}
                                    onChange={handleFeatureChange}
                                    checked={selectedFeatures.includes(feature.featureName)}
                                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label className="text-gray-700">{feature.featureName}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        Update Room Class
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateRoomClassWithFeature;
