// NearbyServices.jsx
import React from 'react';

const NearbyServices = () => {
    // Sample data for nearby hotels
    const hotels = [
        { id: 1, name: 'Hotel Paradise', distance: '500m', location: '123 Street, City' },
        { id: 2, name: 'Sunshine Inn', distance: '800m', location: '456 Avenue, City' },
        { id: 3, name: 'Ocean View Hotel', distance: '1km', location: '789 Road, City' },
    ];

    return (
        <div className="p-10 max-w-7xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Nearby Hotels</h2>
            <div className="flex space-x-4">
                {hotels.map((hotel) => (
                    <div
                        key={hotel.id}
                        className="border border-gray-300 rounded p-4 shadow-sm hover:shadow-md transition w-64"
                    >
                        <h3 className="text-lg font-semibold">{hotel.name}</h3>
                        <p className="text-gray-500">{hotel.location}</p>
                        <p className="text-gray-700">Distance: {hotel.distance}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NearbyServices;
