import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import StarRatingFilter from '../components/Filter/StarRatingFilter';
import HotelTypesFilter from '../components/HotelTypesFilter';
import FacilitiesFilter from '../components/FacilitiesFilter';
import PriceFilter from '../components/Filter/PriceFilter';
import SearchResultsCard from '../components/SearchResultsCard';
import { getListHotelWithFeature } from '../services/apiService';

const HotelListPage = () => {
    const [hotels, setHotels] = useState([]); // State for hotel data
    const [sortOption, setSortOption] = useState("String");

    // Fetch data from API
    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await getListHotelWithFeature(); // Replace with your API endpoint
                console.log(response);
                setHotels(response); // Assuming the response contains an array of hotels
            } catch (error) {
                console.error('Error fetching hotel data:', error);
            }
        };

        fetchHotels();
    }, []); // Empty dependency array ensures it runs only once when the component mounts

    // Optional: Sorting function based on sortOption
    const sortedHotels = [...hotels].sort((a, b) => {
        if (sortOption === 'starRating') return b.starRating - a.starRating;
        if (sortOption === 'pricePerNightAsc') return a.pricePerNight - b.pricePerNight;
        if (sortOption === 'pricePerNightDesc') return b.pricePerNight - a.pricePerNight;
        return 0;
    });

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 p-14">
            <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
                <div className="space-y-5">
                    <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
                        Filter by:
                    </h3>
                    <StarRatingFilter />
                    <HotelTypesFilter />
                    <FacilitiesFilter />
                    <PriceFilter />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">
                        Hotels found
                    </span>
                    <select
                        value={sortOption}
                        onChange={(event) => setSortOption(event.target.value)}
                        className="p-2 border rounded-md"
                    >
                        <option value="">Sort by</option>
                        <option value="starRating">Star Rating</option>
                        <option value="pricePerNightAsc">Price Per Night (low to high)</option>
                        <option value="pricePerNightDesc">Price Per Night (high to low)</option>
                    </select>
                </div>
                <div className="container mx-auto p-8">
                    <div className="grid grid-cols-1 gap-8">
                        {sortedHotels.map((hotel) => (
                            <SearchResultsCard key={hotel._id} hotel={hotel} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelListPage;
