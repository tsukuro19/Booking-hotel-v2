import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRoomClassBedTypeByHotelId, deleteRoomClassBedType } from "../services/apiServices";
import { Link } from 'react-router-dom'; // To redirect to the "Create" page.

const ListRoomClassBedTypes = () => {
    const { hotelId } = useParams();
    const navigate = useNavigate(); // Use navigate instead of useHistory
    const [roomClassBedTypes, setRoomClassBedTypes] = useState([]);

    useEffect(() => {
        // Fetch RoomClassBedType list from the backend
        async function fetchRoomClassBedTypes() {
            try {
                const response = await getRoomClassBedTypeByHotelId(parseInt(hotelId));
                setRoomClassBedTypes(response.data);
            } catch (error) {
                console.error('Error fetching room class bed types:', error);
            }
        }
        fetchRoomClassBedTypes();
    }, [hotelId]);

    // Delete room class bed type
    const handleDelete = async (id) => {
        try {
            await deleteRoomClassBedType(parseInt(id)); // Call the delete API
            setRoomClassBedTypes(roomClassBedTypes.filter(item => item.id !== id)); // Remove from the list
        } catch (error) {
            console.error('Error deleting room class bed type:', error);
        }
    };

    // Update room class bed type (redirecting to the update page)
    const handleUpdate = (id) => {
        navigate(`/update-room-class-bed-type/${id}`); // Use navigate to redirect
    };

    console.log(roomClassBedTypes);

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">List of Room Class Bed Types</h1>

            {/* Button to Create New Room Class Bed Type */}
            <div className="mb-4 flex justify-end">
                <Link to={`/detail-room/room-classes-with-bed-types/create-room-class-bed-type/${hotelId}`}>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Create Room Class Bed Type</button>
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 text-left text-gray-600">
                            <th className="px-6 py-3 text-sm font-medium">Room Class</th>
                            <th className="px-6 py-3 text-sm font-medium">Bed Type</th>
                            <th className="px-6 py-3 text-sm font-medium">Number of Beds</th>
                            <th className="px-6 py-3 text-sm font-medium">Total Price</th>
                            <th className="px-6 py-3 text-sm font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roomClassBedTypes.map((item) => (
                            <tr key={item.id} className="border-t border-gray-200">
                                <td className="px-6 py-4 text-sm text-gray-800">{item.roomClass.className}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{item.bedType.bedTypeName}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{item.numBeds}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{item.totalPriceRoomBeds}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">
                                    <button
                                        onClick={() => handleUpdate(item.id)}
                                        className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 mr-2"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListRoomClassBedTypes;
