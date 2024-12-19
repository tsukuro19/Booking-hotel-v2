import React, { useState } from "react";

const ImagesSection = () => {
    const [images, setImages] = useState([]);

    const handleImageUpload = (event) => {
        const selectedFiles = Array.from(event.target.files);
        if (images.length + selectedFiles.length > 10) {
            alert("You can only upload up to 10 images.");
            return;
        }
        setImages((prevImages) => [
            ...prevImages,
            ...selectedFiles.slice(0, 10 - prevImages.length),
        ]);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Upload Images</h3>
            <div className="mb-4">
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="mb-2 p-2 border border-gray-300 rounded"
                />
                <p className="text-sm text-gray-500">Select up to 10 images</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {images.map((image, index) => (
                    <div key={index} className="border p-2 rounded overflow-hidden">
                        <img
                            src={URL.createObjectURL(image)}
                            alt={`Uploaded ${index + 1}`}
                            className="w-full h-full object-cover rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImagesSection;
