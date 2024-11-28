import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const SearchResultsCard = ({ hotel }) => {
    // Ensure hotel data exists and fallbacks are set
    const { imageUrls = [], name_hotel, starRating, description, features= [], id } = hotel || {};

    return (
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-8 gap-8">
            <div className="w-full h-[300px]">
                {/* Fallback to a default image if imageUrls is empty */}
                <img
                    src={imageUrls[0] || '/path/to/default-image.jpg'}
                    alt={name_hotel || "Hotel"}
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <div className="grid grid-rows-[1fr_2fr_1fr]">
                <div>
                    <div className="flex items-center">
                        <span className="flex">
                            {/* Render stars, ensuring starRating is defined */}
                            {Array.from({ length: starRating || 0 }).map((_, idx) => (
                                <AiFillStar key={idx} className="fill-yellow-400" />
                            ))}
                        </span>
                    </div>
                    <Link
                        to={`detail/${id}`}
                        className="text-2xl font-bold cursor-pointer"
                    >
                        {name_hotel || "No Name"}
                    </Link>
                </div>

                <div>
                    {/* Safely render description */}
                    <div className="line-clamp-4">{description || "No description available"}</div>
                </div>

                <div className="grid grid-cols-2 items-end whitespace-nowrap">
                    <div className="flex gap-1 items-center">
                        {/* Ensure facilities exist before using slice */}
                        {features.slice(0, 3).map((feature, idx) => (
                            <span key={idx} className="bg-slate-300 p-2 rounded-lg font-bold text-xs whitespace-nowrap">
                                {feature}
                            </span>
                        ))}
                        {features.length > 3 && (
                            <span className="text-sm">
                                +{features.length - 3} more
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <Link
                            to={`detail/${id}`}
                            className="bg-blue-600 text-white h-full p-2 font-bold text-xl max-w-fit hover:bg-blue-500"
                        >
                            View More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultsCard;
