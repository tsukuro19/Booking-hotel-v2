// src/components/HotelList.jsx
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HotelCard from "./HotelCard"; // Import component HotelCard

const HotelList = () => {
    const hotels = [
        { image: "https://via.placeholder.com/300", name: "Luxury Hotel", rating: 4.5, price: 120 },
        { image: "https://via.placeholder.com/300", name: "Comfort Stay", rating: 4.0, price: 80 },
        { image: "https://via.placeholder.com/300", name: "Budget Inn", rating: 3.5, price: 60 },
        { image: "https://via.placeholder.com/300", name: "Premium Resort", rating: 4.8, price: 150 },
        { image: "https://via.placeholder.com/300", name: "Urban Hotel", rating: 4.2, price: 90 },
        { image: "https://via.placeholder.com/300", name: "Seaside Villa", rating: 4.7, price: 200 },
        { image: "https://via.placeholder.com/300", name: "Mountain Escape", rating: 4.7, price: 110, },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4; // Hiển thị 4 card mỗi trang
    const totalPages = Math.ceil(hotels.length / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const visibleHotels = hotels.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-semibold mb-6 text-center">List of highly rated hotels</h2>

            <div className="relative">
                {/* Nút mũi tên trái */}
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 0}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400 disabled:opacity-50"
                >
                    <FaArrowLeft />
                </button>

                {/* Hiển thị các card khách sạn */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {visibleHotels.map((hotel, index) => (
                        <HotelCard
                            key={index}
                            image={hotel.image}
                            name={hotel.name}
                            rating={hotel.rating}
                            price={hotel.price}
                        />
                    ))}
                </div>

                {/* Nút mũi tên phải */}
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages - 1}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400 disabled:opacity-50"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}

export default HotelList;
