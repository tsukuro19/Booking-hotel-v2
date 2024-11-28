import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { deleteRoom, getHotelDetailsById, getRoomsByHotel } from '../services/apiServices'; // Update these service functions as needed

const DetailRoom = () => {
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState(null);
    const [rooms, setRooms] = useState([]); // Ensure rooms is always an array
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null); // Optional error state

    useEffect(() => {
        const fetchHotelDetails = async () => {
            try {
                setLoading(true); // Set loading to true when fetching data
                const hotelData = await getHotelDetailsById(parseInt(hotelId));
                setHotel(hotelData);

                const roomData = await getRoomsByHotel(hotelId);
                setRooms(roomData.data || []); // Default to empty array if no rooms
            } catch (error) {
                setError('Error fetching hotel details');
                console.error('Error fetching hotel details', error);
            } finally {
                setLoading(false); // Set loading to false when done fetching
            }
        };

        fetchHotelDetails();
    }, [hotelId]);

    if (loading) {
        return <div>Loading...</div>; // Show loading message
    }

    if (error) {
        return <div>{error}</div>; // Show error message if there's an issue
    }

    const handleDeleteRoom = async (roomId) => {
        try {
            await deleteRoom(parseInt(roomId)); // Call the API to delete the room
            // Update the state without reloading the page
            setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
            window.location.reload(); // Refresh the page
        } catch (error) {
            console.error('Error deleting room', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="container mx-auto">
                {/* Hotel Header */}
                {hotel && (
                    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                        <h2 className="text-3xl font-bold text-gray-700 mb-4">{hotel.name_hotel}</h2>
                        <p className="text-xl text-gray-500">{hotel.address}</p>
                        <p className="text-gray-500">Phone: {hotel.phone_number}</p>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between w-full mb-8">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1 mx-1">
                        <Link to={`/detail-room/features/${hotelId}`}>List Features</Link>
                    </button>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1 mx-1">
                        <Link to={`/detail-room/room-classes/${hotelId}`}>List Room Classes</Link>
                    </button>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1 mx-1">
                        <Link to={`/detail-room/bed-types/${hotelId}`}>List Bed Types</Link>
                    </button>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1 mx-1">
                        <Link to={`/detail-room/floor/${hotelId}`}>List Floor</Link>
                    </button>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1 mx-1">
                        <Link to={`/detail-room/room-classes-with-features/${hotelId}`}>List Room Classes with Features</Link>
                    </button>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1 mx-1">
                        <Link to={`/detail-room/room-classes-with-bed-types/${hotelId}`}>List Room Classes with Bed Types</Link>
                    </button>
                </div>

                {/* Room List */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="flex justify-between items-center p-4">
                        <h3 className="text-xl font-semibold text-gray-700">Rooms</h3>
                        <Link to={`/detail-room/create-room/${hotelId}`} className="text-green-500 hover:text-green-700 transition-colors">
                            Create Room
                        </Link>
                    </div>
                    <div className="border-t">
                        {rooms.length === 0 ? (
                            <p className="text-gray-500 text-center py-4">No rooms available</p>
                        ) : (
                            rooms.map((room) => (
                                <div 
                                    key={room.id} 
                                    className={`flex justify-between items-center border-b p-4 ${room.roomStatus ? 'bg-green-50' : 'bg-red-50'} hover:bg-gray-100 transition-colors`}
                                >
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-700">
                                            {room.roomClass.className} - Room {room.roomNumber}
                                        </h4>
                                        <p className="text-gray-500">Floor: {room.floor.floorNumber}</p>
                                        <p className={`text-sm ${room.roomStatus ? 'text-green-600' : 'text-red-600'}`}>
                                            {room.roomStatus ? 'Available for booking' : 'Not available'}
                                        </p>
                                        <p className="text-gray-500">Available From: {new Date(room.dayAvailableFrom).toLocaleDateString()}</p>
                                    </div>
                                    <div>
                                        <Link to={`/detail-room/edit-room/${room.id}`} className="text-blue-500 hover:text-blue-700 transition-colors">
                                            Edit
                                        </Link>
                                        <button 
                                            className="text-red-500 hover:text-red-700 transition-colors ml-2" 
                                            onClick={() => handleDeleteRoom(room.roomNumber)} // Use room.id here
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailRoom;
