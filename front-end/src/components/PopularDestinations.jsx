import React from "react";

const PopularDestinations = () => {
    const destinations = [
        { name: "TP. Hồ Chí Minh", imgSrc: "imageLink1", flag: "🇻🇳" },
        { name: "Đà Nẵng", imgSrc: "imageLink2", flag: "🇻🇳" },
        { name: "Vũng Tàu", imgSrc: "imageLink3", flag: "🇻🇳" },
        { name: "Hà Nội", imgSrc: "imageLink4", flag: "🇻🇳" },
        { name: "Đà Lạt", imgSrc: "imageLink5", flag: "🇻🇳" },
    ];

    return (
        <div className="bg-white py-10">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Điểm đến đang thịnh hành</h2>
                <p className="text-gray-600">Các lựa chọn phổ biến nhất cho du khách từ Việt Nam</p>
            </div>
            <div className="container max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-6 mt-8">
                {/* First Row with 2 items */}
                <div className="flex justify-center w-full">
                    <div className="flex flex-1 max-w-[46%] rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105">
                        <img
                            src={destinations[0].imgSrc}
                            alt={destinations[0].name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                {destinations[0].name} <span className="text-lg">{destinations[0].flag}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mx-3">

                    </div>
                    <div className="flex flex-1 max-w-[46%] rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105">
                        <img
                            src={destinations[1].imgSrc}
                            alt={destinations[1].name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                {destinations[1].name} <span className="text-lg">{destinations[1].flag}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Row with 3 items */}
                <div className="flex justify-center w-full">
                    {destinations.slice(2).map((destination, index) => (
                        <div
                            key={index}
                            className="flex flex-1 max-w-[30%] rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 mx-3"
                        >
                            <img
                                src={destination.imgSrc}
                                alt={destination.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    {destination.name} <span className="text-lg">{destination.flag}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularDestinations;
