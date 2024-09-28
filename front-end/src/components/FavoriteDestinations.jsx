import React from 'react';

const FavoriteDestinations = () => {
    const destinations = [
        { name: 'Bình Dương', stays: '106 chỗ nghỉ' },
        { name: 'Phú Yên', stays: '247 chỗ nghỉ' },
        { name: 'Gia Lai', stays: '104 chỗ nghỉ' },
        { name: 'Vĩnh Long', stays: '44 chỗ nghỉ' },
        { name: 'Thừa Thiên - Huế', stays: '530 chỗ nghỉ' },
        { name: 'Trà Vinh', stays: '19 chỗ nghỉ' },
        { name: 'Thanh Hóa', stays: '263 chỗ nghỉ' },
        { name: 'Bình Thuận', stays: '762 chỗ nghỉ' },
        { name: 'Quảng Bình', stays: '277 chỗ nghỉ' },
        { name: 'Thành phố Đà Nẵng', stays: '2,515 chỗ nghỉ' },
        { name: 'Cần Thơ', stays: '362 chỗ nghỉ' },
        { name: 'Hà Nội', stays: '3,985 chỗ nghỉ' },
        { name: 'Cà Mau', stays: '53 chỗ nghỉ' },
        { name: 'Hà Tĩnh', stays: '50 chỗ nghỉ' },
        { name: 'Khu vực TP. Hồ Chí Minh', stays: '5,643 chỗ nghỉ' },
        { name: 'Bạc Liêu', stays: '26 chỗ nghỉ' },
        { name: 'Vịnh Hạ Long', stays: '1,377 chỗ nghỉ' },
        { name: 'Ninh Thuận', stays: '167 chỗ nghỉ' },
        { name: 'Đắk Lắk', stays: '134 chỗ nghỉ' }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Các điểm đến được chúng tôi ưa thích</h2>
            <div className="flex space-x-4 mb-6">
                <button className="px-4 py-2 border rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">Khu vực</button>
                <button className="px-4 py-2 border rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">Thành phố</button>
                <button className="px-4 py-2 border rounded-full bg-gray-200">Địa điểm được quan tâm</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {destinations.map((destination, index) => (
                    <div key={index} className="text-left">
                        <h3 className="text-lg font-semibold">{destination.name}</h3>
                        <p className="text-sm text-gray-500">{destination.stays}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavoriteDestinations;
