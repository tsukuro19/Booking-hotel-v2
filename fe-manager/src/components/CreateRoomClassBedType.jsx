import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getRoomClassByHotelId, getBedTypesByHotelId, createRoomClassBedType } from "../services/apiServices"; // Update with actual service functions

const CreateRoomClassBedType = () => {
    const { hotelId } = useParams(); // Get hotelId from URL params
    const navigate = useNavigate(); // Use navigate for redirecting after creating

    // State variables to hold form input values
    const [roomClassId, setRoomClassId] = useState('');
    const [bedTypeId, setBedTypeId] = useState('');
    const [numBeds, setNumBeds] = useState('');
    const [totalPriceRoomBeds, setTotalPriceRoomBeds] = useState('');
    const [roomClasses, setRoomClasses] = useState([]); // For room class dropdown
    const [bedTypes, setBedTypes] = useState([]); // For bed type dropdown

    // Fetch room classes and bed types when the component mounts
    useEffect(() => {
        async function fetchData() {
            try {
                const roomClassesData = await getRoomClassByHotelId(hotelId); // Fetch room classes from API
                const bedTypesData = await getBedTypesByHotelId(hotelId); // Fetch bed types from API
                setRoomClasses(roomClassesData.data);
                setBedTypes(bedTypesData.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [hotelId]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                roomClassId,
                bedTypeId,
                numBeds,
                totalPriceRoomBeds
            };
            await createRoomClassBedType(data); // Call the create API
            navigate(`/detail-room/room-classes-with-bed-types/${hotelId}`); // Redirect to the room class bed types list
        } catch (error) {
            console.error('Error creating room class bed type:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Create Room Class Bed Type</h1>
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-md">
                {/* Room Class Dropdown */}
                <div className="mb-4">
                    <label htmlFor="roomClassId" className="block text-sm font-medium text-gray-700">Room Class</label>
                    <select
                        id="roomClassId"
                        value={roomClassId}
                        onChange={(e) => setRoomClassId(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    >
                        <option value="">Select Room Class</option>
                        {roomClasses.map((roomClass) => (
                            <option key={roomClass.id} value={roomClass.id}>
                                {roomClass.className}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Bed Type Dropdown */}
                <div className="mb-4">
                    <label htmlFor="bedTypeId" className="block text-sm font-medium text-gray-700">Bed Type</label>
                    <select
                        id="bedTypeId"
                        value={bedTypeId}
                        onChange={(e) => setBedTypeId(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    >
                        <option value="">Select Bed Type</option>
                        {bedTypes.map((bedType) => (
                            <option key={bedType.id} value={bedType.id}>
                                {bedType.bedTypeName}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Number of Beds Input */}
                <div className="mb-4">
                    <label htmlFor="numBeds" className="block text-sm font-medium text-gray-700">Number of Beds</label>
                    <input
                        id="numBeds"
                        type="number"
                        value={numBeds}
                        onChange={(e) => setNumBeds(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                </div>

                {/* Total Price Input */}
                <div className="mb-4">
                    <label htmlFor="totalPriceRoomBeds" className="block text-sm font-medium text-gray-700">Total Price of Room Beds</label>
                    <input
                        id="totalPriceRoomBeds"
                        type="number"
                        value={totalPriceRoomBeds}
                        onChange={(e) => setTotalPriceRoomBeds(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Create Room Class Bed Type
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateRoomClassBedType;
