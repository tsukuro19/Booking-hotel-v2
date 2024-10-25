import React from 'react';

const FavoriteDestinations = () => {
    const destinations = [
        { name: 'Bình Dương', time: '15 phút lái xe', img: 'https://via.placeholder.com/64' },
        { name: 'Phú Yên', time: '15 phút lái xe', img: 'https://via.placeholder.com/64' },
        { name: 'Gia Lai', time: '15 phút lái xe', img: 'https://via.placeholder.com/64' },
        { name: 'Vĩnh Long', time: '15 phút lái xe', img: 'https://via.placeholder.com/64' },
        { name: 'Thừa Thiên - Huế', time: '15 phút lái xe', img: 'https://via.placeholder.com/64' },
        { name: 'Trà Vinh', time: '15 phút lái xe', img: 'https://via.placeholder.com/64' },
        { name: 'Thanh Hóa', time: '15 phút lái xe', img: 'https://via.placeholder.com/64' },
        { name: 'Bình Thuận', time: '15 phút lái xe', img: 'https://via.placeholder.com/64' },
    ];

    return (
        <div className="container max-w-[84rem] mx-auto px-8 py-8">
            <h2 className="text-2xl font-bold mb-6">Explore nearby</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {destinations.map((destination, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <img
                            src={destination.img}
                            alt={destination.name}
                            className="w-32 h-32 rounded-lg object-cover"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">{destination.name}</h3>
                            <p className="text-sm text-gray-500">{destination.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavoriteDestinations;
