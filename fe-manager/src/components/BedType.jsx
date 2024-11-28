import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBedTypesByHotelId, deleteBedType } from "../services/apiServices";

const BedTypeList = () => {
    const { hotelId } = useParams();
    const [bedTypes, setBedTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBedTypes = async () => {
            setLoading(true);
            try {
                const response = await getBedTypesByHotelId(hotelId);
                setBedTypes(response.data || []);
            } catch (err) {
                setError("Error fetching bed types.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (hotelId) {
            fetchBedTypes();
        }
    }, [hotelId]);

    const handleDeleteBedType = async (bedTypeId) => {
        try {
            await deleteBedType(bedTypeId);
            const updatedBedTypes = bedTypes.filter((bedType) => bedType.id !== bedTypeId);
            setBedTypes(updatedBedTypes);
        } catch (error) {
            console.error("Error deleting bed type", error);
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
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Bed Type List</h2>
                    <Link
                        to={`/detail-room/bed-types/create-bed-type/${hotelId}`}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Add Bed Type
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="border-t">
                        {bedTypes.length === 0 ? (
                            <p className="text-gray-500 text-center py-4">No Bed Types available</p>
                        ) : (
                            bedTypes.map((bedType) => (
                                <div key={bedType.id} className="flex justify-between items-center border-b p-4 hover:bg-gray-100 transition-colors">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-700">{bedType.bedTypeName}</h4>
                                    </div>
                                    <div>
                                        <Link to={`/detail-room/bed-types/edit-bed-type/${hotelId}/${bedType.id}/${bedType.bedTypeName}`} className="text-blue-500 hover:text-blue-700 transition-colors">
                                            Edit
                                        </Link>
                                        <button className="text-red-500 hover:text-red-700 transition-colors ml-2" onClick={() => handleDeleteBedType(bedType.id)}>
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

export default BedTypeList;
