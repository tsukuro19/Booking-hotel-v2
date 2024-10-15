import React from "react";

const AccommodationType = () => {
    const accommodationTypes = [
        { image: "https://via.placeholder.com/300", type: "Hotel" },
        { image: "https://via.placeholder.com/300", type: "Apartment" },
        { image: "https://via.placeholder.com/300", type: "House" },
        { image: "https://via.placeholder.com/300", type: "Villa" },
    ];

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-semibold mb-6 text-center">Tìm theo loại chỗ nghỉ</h2>

            <div className="relative max-w-[90rem] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {accommodationTypes.map((item, index) => (
                        <div className="flex flex-col items-center">
                            <img
                                src={item.image}
                                alt={item.type}
                                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            />
                            <p className="mt-2 text-lg font-medium">{item.type}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default AccommodationType;
