import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HotelCard from "./HotelCard"; // Import component HotelCard

const HotelList = () => {
    const hotels = [
        { image: "https://via.placeholder.com/300", name: "Luxury Hotel", rating: 4.5, location: "Krakhów, Ba Lan" },
        { image: "https://via.placeholder.com/300", name: "Comfort Stay", rating: 4.0, location: "Krakhów, Ba Lan" },
        { image: "https://via.placeholder.com/300", name: "Budget Inn", rating: 3.5, location: "Krakhów, Ba Lan" },
        { image: "https://via.placeholder.com/300", name: "Premium Resort", rating: 4.8, location: "Krakhów, Ba Lan" },
        { image: "https://via.placeholder.com/300", name: "Urban Hotel", rating: 4.2, location: "Krakhów, Ba Lan" },
        { image: "https://via.placeholder.com/300", name: "Seaside Villa", rating: 4.7, location: "Krakhów, Ba Lan" },
        { image: "https://via.placeholder.com/300", name: "Mountain Escape", rating: 4.7, location: "Krakhów, Ba Lan" },
        { image: "https://via.placeholder.com/300", name: "Premium Resort", rating: 4.8, location: "Krakhów, Ba Lan" },
        { image: "https://via.placeholder.com/300", name: "Urban Hotel", rating: 4.2, location: "Krakhów, Ba Lan" },
        { image: "https://via.placeholder.com/300", name: "Seaside Villa", rating: 4.7, location: "Krakhów, Ba Lan" },
        { image: "https://via.placeholder.com/300", name: "Mountain Escape", rating: 4.7, location: "Krakhów, Ba Lan" },
        { image: "https://via.placeholder.com/300", name: "Luxury Hotel", rating: 4.5, location: "Krakhów, Ba Lan" },
    ];

    return (
        <div className="container mx-auto py-8">
            <div className="relative max-w-[90rem] mx-auto">
                {/* Hiển thị các card khách sạn */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {hotels.map((hotel, index) => (
                        <div key={index} className="w-full">
                            <HotelCard
                                image={hotel.image}
                                name={hotel.name}
                                rating={hotel.rating}
                                location={hotel.location}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HotelList;
