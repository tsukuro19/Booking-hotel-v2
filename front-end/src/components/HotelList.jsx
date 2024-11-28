import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HotelCard from "./HotelCard"; // Import component HotelCard
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { getListHotel } from "../services/apiService";

const HotelList = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const hotelData = await getListHotel();
                setHotels(hotelData); // Update the state with the fetched data
            } catch (error) {
                setError("Failed to fetch hotels");
                console.error("Error fetching hotel list:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHotels();
    }, []);

    const handleHotelClick = (id) => {
        navigate(`/list/detail/${id}`); // Navigate to the hotel detail page
    };

    return (
        <div className="container mx-auto py-8">
            <div className="relative max-w-[90rem] mx-auto">
                {/* Display hotel cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {hotels.map((hotel, index) => (
                        <div
                            key={index}
                            className="w-full cursor-pointer"
                            onClick={() => handleHotelClick(hotel.id)} // Handle click
                        >
                            <HotelCard
                                image={hotel.imageUrls[0]}
                                name={hotel.name_hotel}
                                rating={hotel.rating || "No rating"}
                                location={`${hotel.city}, ${hotel.country}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HotelList;
