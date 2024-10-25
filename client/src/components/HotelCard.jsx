import React from "react";
import { FaHeart } from "react-icons/fa";

const HotelCard = ({ image, name, rating, location }) => {
    return (
        <div className="max-w-sm relative">
            <img className="w-full h-auto object-cover rounded-lg" src={image} alt={name} />
            <div className="absolute top-4 right-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <FaHeart size={28} />
            </div>
            <div className="px-0 py-4">
                <div className="flex justify-between items-center mb-2">
                    <div className="font-bold text-xl text-left">{name}</div>
                    <p className="text-gray-700 text-base">{rating} ★</p>
                </div>
                <p className="text-gray-900 text-base text-left">
                    {location}
                </p>
            </div>
        </div>
    );
}

export default HotelCard;
