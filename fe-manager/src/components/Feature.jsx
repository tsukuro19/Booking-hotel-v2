import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFeaturesByHotelId, deleteFeature } from "../services/apiServices";

const FeatureList = () => {
    const { hotelId } = useParams();
    const [features, setFeatures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeatures = async () => {
            setLoading(true);
            try {
                const response = await getFeaturesByHotelId(hotelId);
                setFeatures(response.data || []);
            } catch (err) {
                setError("Error fetching features.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (hotelId) {
            fetchFeatures();
        }
    }, [hotelId]);

    const handleDeleteFeature = async (featureId) => {
        try {
            console.log("Deleting feature with ID:", featureId);
            await deleteFeature(featureId); // Gọi API xóa Feature
            const updatedFeatures = features.filter((feature) => feature.id !== featureId);
            setFeatures(updatedFeatures);
            window.location.reload();
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
                    <h2 className="text-2xl font-bold text-gray-800">Feature List</h2>
                    <Link
                        to={`/detail-room/features/create-feature/${hotelId}`}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Add Feature
                    </Link>
                </div>

                {/* Feature List */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="flex justify-between items-center p-4">
                        <h3 className="text-xl font-semibold text-gray-700">Features</h3>
                    </div>
                    <div className="border-t">
                        {features.length === 0 ? (
                            <p className="text-gray-500 text-center py-4">No Feature available</p>
                        ) : (
                            features.map((feature) => (
                                <div key={feature.id} className="flex justify-between items-center border-b p-4 hover:bg-gray-100 transition-colors">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-700">{feature.featureName}</h4>
                                        <p className="text-gray-500">Room Description: {feature.featureDescription}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-700">Price: {feature.featurePrice}</h4>
                                    </div>
                                    <div>
                                        <Link to={`/detail-room/features/edit-room/${hotelId}/${feature.id}`} className="text-blue-500 hover:text-blue-700 transition-colors">
                                            Edit
                                        </Link>
                                        <button className="text-red-500 hover:text-red-700 transition-colors ml-2" onClick={() => handleDeleteFeature(feature.id)}>
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

export default FeatureList;
