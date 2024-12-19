import React from 'react';

const ImagesSection = ({ hotelInformation }) => {
    const images = hotelInformation || []; // Đảm bảo an toàn khi không có dữ liệu

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-[90rem] mx-auto grid grid-cols-12 gap-6">
                {/* Ảnh lớn bên trái */}
                <div className="col-span-7">
                    <div className="relative">
                        <img
                            src={images[0]}
                            alt="Large Image"
                            className="w-full h-[500px] object-cover rounded-lg shadow-lg mx-auto transition-transform transform hover:scale-105"
                        />
                    </div>
                </div>

                {/* 4 ảnh nhỏ bên phải */}
                <div className="col-span-5 grid grid-cols-2 gap-4">
                    {images.slice(1, 5).map((img, index) => (
                        <div key={index} className="relative">
                            <img
                                src={img}
                                alt={`Small Image ${index + 1}`}
                                className="w-full h-[240px] object-cover rounded-lg shadow-md mx-auto transition-transform transform hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImagesSection;
