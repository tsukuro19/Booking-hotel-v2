import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getRoomClassByHotelId, getFloorByHotelId, createRoom } from "../services/apiServices"; // Update with actual service functions

const CreateRoom = () => {
    const { hotelId } = useParams(); // Get hotelId from URL params
    const navigate = useNavigate(); // Use navigate for redirecting after creating

    // State variables to hold form input values
    const [roomClassId, setRoomClassId] = useState('');
    const [floorId, setFloorId] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [roomStatus, setRoomStatus] = useState('');
    const [numBeds, setNumBeds] = useState('');
    const [totalPriceRoomBeds, setTotalPriceRoomBeds] = useState('');
    const [roomClasses, setRoomClasses] = useState([]); // For room class dropdown
    const [floors, setFloors] = useState([]); // For floor dropdown

    // Fetch room classes and floors when the component mounts
    useEffect(() => {
        async function fetchData() {
            try {
                const roomClassesData = await getRoomClassByHotelId(hotelId); // Fetch room classes from API
                const floorsData = await getFloorByHotelId(hotelId); // Fetch floors from API
                setRoomClasses(roomClassesData.data);
                setFloors(floorsData.data);
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
                roomClassId:parseInt(roomClassId),
                floorId:parseInt(floorId),
                roomNumber:roomNumber,
                hotelId:parseInt(hotelId)
            };
            await createRoom(data); // Call the create API
            navigate(`/detail-room/${hotelId}`); // Redirect to the room list
        } catch (error) {
            console.error('Error creating room:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Create Room</h1>
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

                {/* Floor Dropdown */}
                <div className="mb-4">
                    <label htmlFor="floorId" className="block text-sm font-medium text-gray-700">Floor</label>
                    <select
                        id="floorId"
                        value={floorId}
                        onChange={(e) => setFloorId(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    >
                        <option value="">Select Floor</option>
                        {floors.map((floor) => (
                            <option key={floor.id} value={floor.id}>
                                {floor.floorNumber}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Room Number Input */}
                <div className="mb-4">
                    <label htmlFor="roomNumber" className="block text-sm font-medium text-gray-700">Room Number</label>
                    <input
                        id="roomNumber"
                        type="text"
                        value={roomNumber}
                        onChange={(e) => setRoomNumber(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Create Room
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateRoom;
