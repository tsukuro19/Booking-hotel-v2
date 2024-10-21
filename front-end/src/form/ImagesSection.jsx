const ImagesSection = () => {
    // Mảng chứa URL ảnh mẫu hoặc ảnh của bạn
    const images = [
        "https://via.placeholder.com/600x400", // Ảnh lớn
        "https://via.placeholder.com/300x300", // Ảnh nhỏ 1
        "https://via.placeholder.com/300x300", // Ảnh nhỏ 2
        "https://via.placeholder.com/300x300", // Ảnh nhỏ 3
        "https://via.placeholder.com/300x300", // Ảnh nhỏ 4
    ];

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-[90rem] mx-auto grid grid-cols-12 gap-6">
                {/* Ảnh lớn bên trái */}
                <div className="col-span-7">
                    <img
                        src={images[0]}
                        alt="Large Image"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* 4 ảnh nhỏ bên phải, chia thành 2x2 */}
                <div className="col-span-5 grid grid-cols-1 gap-6">
                    <div className="grid grid-cols-2 gap-4">
                        {images.slice(1, 3).map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Small Image ${index + 1}`}
                                className="w-full h-72 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                            />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {images.slice(3, 5).map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Small Image ${index + 3}`}
                                className="w-full h-72 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagesSection;
