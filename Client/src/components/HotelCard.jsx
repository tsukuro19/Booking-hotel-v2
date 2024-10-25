// src/components/HotelCard.jsx
import React from "react";

const HotelCard = ({ image, name, rating, price }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-48 object-cover" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {rating} ★
                </p>
                <p className="text-gray-900 font-semibold text-lg">
                    ${price} / night
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Book Now
                </button>
            </div>
        </div>
    );
}

export default HotelCard;
