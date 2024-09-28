import React from 'react';
import { FaBed, FaBath, FaCar, FaDog } from 'react-icons/fa';
import { FaHeart, FaShareAlt } from 'react-icons/fa';

const DetailsSection = () => {
    return (
        <div className="flex max-w-7xl mx-auto min-h-screen">
            {/* Left Section: Details */}
            <div className="ml-10 flex-grow flex flex-col">
                {/* Property Details */}
                <div className="mt-6 flex items-center mr-28">
                    <div className="flex-grow">
                        <h1 className="text-2xl font-semibold">Well Furnished Apartment</h1>
                        <p className="text-gray-600">100 Smart Street, LA, USA</p>
                    </div>
                    <div className="flex space-x-4">
                        <button className="text-gray-600 hover:text-red-500">
                            <FaHeart size={20} />
                        </button>
                        <button className="text-gray-600 hover:text-blue-500">
                            <FaShareAlt size={20} />
                        </button>
                    </div>
                </div>

                {/* Property Features */}
                <div className="mt-4 flex space-x-4 flex-nowrap">
                    {[
                        { label: '3 Bedrooms', icon: <FaBed /> },
                        { label: '2 Bathrooms', icon: <FaBath /> },
                        { label: '3 Cars/2 Bikes', icon: <FaCar /> },
                        { label: '0 Pets Allowed', icon: <FaDog /> },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition whitespace-nowrap"
                        >
                            <div className="text-gray-600 mr-2"> {/* Thêm margin bên phải cho icon */}
                                {feature.icon}
                            </div>
                            <p className="text-left">{feature.label}</p> {/* Căn trái cho chữ */}
                        </div>
                    ))}
                </div>

                {/* Description */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Apartment Description</h2>
                    <p className="text-gray-600 mt-2 max-w-3xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu metus lacus. Sed id velit dui. Aenean vel facilisis ante. Aliquam erat volutpat. Aenean aliquet vestibulum sapien vitae auctor. Etiam luctus nulla ligula, nec consectetur augue vehicula at. Nullam ultricies sapien turpis, vel vestibulum erat convallis et. Sed consequat elit at dolor ullamcorper viverra. Ut ac diam eget nibh feugiat aliquet ac non massa. Sed sed erat finibus, egestas libero ut, rhoncus tortor. Nunc nisi lorem, luctus et mauris sed, porta gravida felis. Etiam enim ligula, faucibus nec lobortis sit amet, placerat id quam. In at purus laoreet, aliquam lacus et, dictum sem.

                        Donec congue sit amet leo vitae tincidunt. Quisque ac lacus eget dui blandit commodo. Aliquam erat volutpat. Curabitur quis porttitor tortor. Curabitur lobortis nisl lectus, ac eleifend magna imperdiet eget. Curabitur viverra pretium purus, non feugiat orci rutrum at. Morbi id suscipit turpis.                    </p>
                </div>

                {/* Amenities */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Offered Amenities</h2>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {[
                            'Kitchen', 'Television with Netflix', 'Air Conditioner',
                            'Free Wireless Internet', 'Washer', 'Balcony or Patio'
                        ].map((amenity, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                    {/* Add icon for each amenity */}
                                </svg>
                                <p>{amenity}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 border border-blue-300 rounded-lg p-2 inline-block shadow-sm text-center">
                        <button className="text-blue-500">Show All Amenities</button>
                    </div>
                </div>

                {/* Safety and Hygiene */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Safety and Hygiene</h2>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="flex items-center space-x-2">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                {/* Safety icon */}
                            </svg>
                            <p>Daily Cleaning</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                {/* Hygiene icon */}
                            </svg>
                            <p>Fire Extinguishers</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                {/* Hygiene icon */}
                            </svg>
                            <p>Disinfections and Sterilizations</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                {/* Hygiene icon */}
                            </svg>
                            <p>Smoke Detectors</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section: Price and CTA */}
            <div className="mr-7">
                <aside className="bg-white p-11 rounded-lg shadow-md">
                    <div className="border-b pb-4">
                        <p className="text-2xl font-semibold">$1000 - $2000</p>
                        <ul className="text-gray-600 mt-4">
                            <li>Short Period: $1000</li>
                            <li>Medium Period: $2000</li>
                            <li>Long Period: $3000</li>
                        </ul>
                    </div>
                    <button className="mt-6 bg-black text-white w-full py-3 rounded-lg">Reserve Now</button>
                    <div className="flex justify-between mt-4">
                        <a href="#" className="text-blue-500 hover:underline">Property Inquiry</a>
                        <a href="#" className="text-blue-500 hover:underline">Contact Host</a>
                    </div>
                </aside>
            </div >
        </div >
    );
};

export default DetailsSection;
