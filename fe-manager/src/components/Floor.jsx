import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFloorsByHotelId, deleteFloor } from "../services/apiServices"; // API services for managing floors

const FloorList = () => {
    const { hotelId } = useParams();
    const [floors, setFloors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFloors = async () => {
            setLoading(true);
            try {
                const response = await getFloorsByHotelId(hotelId);
                setFloors(response.data || []);
            } catch (err) {
                setError("Error fetching floors.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (hotelId) {
            fetchFloors();
        }
    }, [hotelId]);

    const handleDeleteFloor = async (floorId) => {
        try {
            console.log("Deleting floor with ID:", floorId);
            await deleteFloor(floorId); // Call the API to delete a floor
            const updatedFloors = floors.filter((floor) => floor.id !== floorId);
            setFloors(updatedFloors);
        } catch (error) {
            console.error("Error deleting floor", error);
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
                    <h2 className="text-2xl font-bold text-gray-800">Floors List</h2>
                    <Link
                        to={`/detail-room/floor/create-floor/${hotelId}`}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Add Floor
                    </Link>
                </div>

                {/* Floor List */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="flex justify-between items-center p-4">
                        <h3 className="text-xl font-semibold text-gray-700">Floors</h3>
                    </div>
                    <div className="border-t">
                        {floors.length === 0 ? (
                            <p className="text-gray-500 text-center py-4">No Floors available</p>
                        ) : (
                            floors.map((floor) => (
                                <div key={floor.id} className="flex justify-between items-center border-b p-4 hover:bg-gray-100 transition-colors">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-700">Floor Number: {floor.floorNumber}</h4>
                                    </div>
                                    <div>
                                        <Link to={`/detail-room/floor/edit-floor/${hotelId}/${floor.id}`} className="text-blue-500 hover:text-blue-700 transition-colors">
                                            Edit
                                        </Link>
                                        <button className="text-red-500 hover:text-red-700 transition-colors ml-2" onClick={() => handleDeleteFloor(floor.id)}>
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

export default FloorList;
