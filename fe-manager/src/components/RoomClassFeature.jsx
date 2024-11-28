import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRoomClassWithFeatures, deleteRoomClassFeature } from "../services/apiServices";

const RoomClassFeatureList = () => {
    const { hotelId } = useParams();  // Assuming the hotelId is provided as a param
    const [roomClasses, setRoomClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRoomClassesWithFeatures = async () => {
            setLoading(true);
            try {
                const response = await getRoomClassWithFeatures(hotelId); // Fetch data for room classes with features
                setRoomClasses(response.data || []);
            } catch (err) {
                setError("Error fetching room classes with features.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (hotelId) {
            fetchRoomClassesWithFeatures();
        }
    }, [hotelId]);


    const handleDeleteFeature = async (roomClassId, featureId) => {
        try {
            await deleteRoomClassFeature(roomClassId); // Call API to delete feature from room class
            const updatedRoomClasses = roomClasses.map((roomClass) =>
                roomClass.id === roomClassId
                    ? {
                          ...roomClass,
                          features: roomClass.features.filter(
                              (feature) => feature.id !== featureId
                          ),
                      }
                    : roomClass
            );
            setRoomClasses(updatedRoomClasses);
        } catch (error) {
            console.error("Error deleting feature", error);
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
                    <h2 className="text-2xl font-bold text-gray-800">Room Class Features</h2>
                    <Link
                        to={`/detail-room/room-classes-with-features/create-room-class-feature/${hotelId}`}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Add Feature
                    </Link>
                </div>

                {/* Room Class Features Table */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Room Class</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Features</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Base Price Room Class</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Price All Feature</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Total Price</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roomClasses.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="text-center py-4 text-gray-500">No Room Classes Available</td>
                                    </tr>
                                ) : (
                                    roomClasses.map((roomClass) => {
                                        return (
                                            <tr key={roomClass.id} className="border-t hover:bg-gray-50">
                                                <td className="px-6 py-4 text-sm text-gray-800">{roomClass.className}</td>
                                                <td className="px-6 py-4 text-sm text-gray-800">
                                                    {roomClass.features.map((feature) => (
                                                        <p key={feature.id} className="text-gray-600">{feature}</p>
                                                    ))}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800">{roomClass.basePrice}</td>
                                                <td className="px-6 py-4 text-sm text-gray-800">{roomClass.totalFeaturePrice}</td>
                                                <td className="px-6 py-4 text-sm text-gray-800">{roomClass.totalPriceRoomClassWithFeature}</td>
                                                <td className="px-6 py-4 text-sm">
                                                    <Link
                                                        to={`/edit-room-class/${hotelId}/${roomClass.roomClassId}`}
                                                        className="text-blue-500 hover:text-blue-700 mr-4"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDeleteFeature(roomClass.roomClassId, roomClass.features[0].id)} // Delete first feature for example
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomClassFeatureList;
