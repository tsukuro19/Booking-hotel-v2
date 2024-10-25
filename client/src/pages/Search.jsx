import React, { useState } from 'react'
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import StarRatingFilter from '../components/StarRatingFilter';
import HotelTypesFilter from '../components/HotelTypesFilter';
import FacilitiesFilter from '../components/FacilitiesFilter';
import PriceFilter from '../components/PriceFilter';
import SearchResultsCard from '../components/SearchResultsCard';

const Search = () => {

    const hotels = [
        {
            _id: '1',
            name: 'Luxury Hotel',
            type: 'Hotel',
            starRating: 5,
            imageUrls: ['https://cf.bstatic.com/xdata/images/hotel/square600/424557466.webp?k=b7b88398677da9104c9f58e2efc0297a779e468da114f387d216126ceb359056&o='],
            description: 'A luxury hotel with the best services and comfort.',
            facilities: ['Wi-Fi', 'Swimming Pool', 'Spa', 'Gym'],
            pricePerNight: 200,
        },
        {
            _id: '2',
            name: 'Beach Resort',
            type: 'Resort',
            starRating: 4,
            imageUrls: ['https://cf.bstatic.com/xdata/images/hotel/square600/387095222.webp?k=bd4fa4a8f0c125fa9bd75ce99d7e600b70b3a105512e83620583cf0b27c3b833&o='],
            description: 'A beach resort with a beautiful ocean view.',
            facilities: ['Wi-Fi', 'Beach Access', 'Free Breakfast', 'Spa'],
            pricePerNight: 150,
        },
        {
            _id: '3',
            name: 'City Inn',
            type: 'Inn',
            starRating: 3,
            imageUrls: ['https://via.placeholder.com/400x300'],
            description: 'A comfortable city inn located near major attractions.',
            facilities: ['Wi-Fi', 'Free Parking', 'Breakfast Included'],
            pricePerNight: 80,
        },
        {
            _id: '4',
            name: 'Mountain Lodge',
            type: 'Lodge',
            starRating: 4,
            imageUrls: ['https://via.placeholder.com/400x300'],
            description: 'A lodge located in the mountains with scenic views.',
            facilities: ['Wi-Fi', 'Hiking Trails', 'Spa', 'Bar'],
            pricePerNight: 120,
        },
        {
            _id: '5',
            name: 'Budget Motel',
            type: 'Motel',
            starRating: 2,
            imageUrls: ['https://via.placeholder.com/400x300'],
            description: 'A budget-friendly motel for short stays.',
            facilities: ['Wi-Fi', 'Free Parking'],
            pricePerNight: 50,
        }
    ];
    const [sortOption, setSortOption] = useState("String");

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 p-14">
            <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
                <div className="space-y-5">
                    <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
                        Filter by:
                    </h3>
                    <StarRatingFilter
                    // selectedStars={selectedStars}
                    // onChange={handleStarsChange}
                    />
                    <HotelTypesFilter
                    // selectedHotelTypes={selectedHotelTypes}
                    // onChange={handleHotelTypesChange}
                    />
                    <FacilitiesFilter
                    // selectedFacilities={selectedFacilities}
                    // onChange={handleFacilityChange}
                    />
                    <PriceFilter
                    // selectedPrice={selectedPrice}
                    // onChange={(value?: number) => setSelectedPrice(value)}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">
                        Hotels found
                        {/* {hotelData?.pagination.total} Hotels found */}
                        {/* {search.destination ? ` in ${search.destination}` : ""} */}
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
                {/* {hotelData?.data.map((hotel) => (
                    <SearchResultsCard hotel={hotel} />
                ))} */}
                <div className="container mx-auto p-8">
                    <h1 className="text-3xl font-bold mb-8">Search Results</h1>
                    <div className="grid grid-cols-1 gap-8">
                        {hotels.map((hotel) => (
                            <SearchResultsCard key={hotel._id} hotel={hotel} />
                        ))}
                    </div>
                </div>

                {/* {hotelData?.pagination.total !== 0 && (
                    <div>
                        <Pagination
                            page={hotelData?.pagination.page || 1}
                            pages={hotelData?.pagination.pages || 1}
                            onPageChange={(page) => setPage(page)}
                        />
                    </div>
                )} */}
            </div>
        </div>
    );
}

export default Search