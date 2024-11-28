import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRoomClassByHotelId, deleteRoomClass } from "../services/apiServices";

const RoomClassList = () => {
    const { hotelId } = useParams();
    const [roomClasses, setRoomClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRoomClasses = async () => {
            setLoading(true);
            try {
                const response = await getRoomClassByHotelId(hotelId);
                setRoomClasses(response.data || []);
            } catch (err) {
                setError("Error fetching room classes.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (hotelId) {
            fetchRoomClasses();
        }
    }, [hotelId]);

    const handleDeleteRoomClass = async (roomClassId) => {
        try {
            console.log("Deleting room class with ID:", roomClassId);
            await deleteRoomClass(roomClassId); // Gọi API xóa Room Class
            const updatedRoomClasses = roomClasses.filter((roomClass) => roomClass.id !== roomClassId);
            setRoomClasses(updatedRoomClasses);
        } catch (error) {
            console.error("Error deleting room class", error);
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
                    <h2 className="text-2xl font-bold text-gray-800">Room Class List</h2>
                    <Link
                        to={`/detail-room/room-classes/create-room-class/${hotelId}`}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Add Room Class
                    </Link>
                </div>

                {/* Room Class List */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="flex justify-between items-center p-4">
                        <h3 className="text-xl font-semibold text-gray-700">Room Classes</h3>
                    </div>
                    <div className="border-t">
                        {roomClasses.length === 0 ? (
                            <p className="text-gray-500 text-center py-4">No Room Class available</p>
                        ) : (
                            roomClasses.map((roomClass) => (
                                <div key={roomClass.id} className="flex justify-between items-center border-b p-4 hover:bg-gray-100 transition-colors">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-700">{roomClass.className}</h4>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-700">Base Price: {roomClass.basePrice}</h4>
                                    </div>
                                    <div>
                                        <Link to={`/detail-room/room-classes/edit-room-class/${hotelId}/${roomClass.id}/${roomClass.className}`} className="text-blue-500 hover:text-blue-700 transition-colors">
                                            Edit
                                        </Link>
                                        <button className="text-red-500 hover:text-red-700 transition-colors ml-2" onClick={() => handleDeleteRoomClass(roomClass.id)}>
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

export default RoomClassList;
