import React, { useState } from 'react';
import { FaBed, FaBath, FaCar, FaDog } from 'react-icons/fa';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const DetailsSection = (hotelInformation) => {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState(1);
    const navigate = useNavigate();
    const { name, address, description, bedTypes, basePrice, features, hotelId,managerId } = hotelInformation.hotelInformation;

    const handleReserve = () => {
        if (!checkInDate || !checkOutDate || checkInDate > checkOutDate || checkInDate === checkOutDate || guests < 1) {
            toast.warning('Please select both Check-in and Check-out dates.');
            return;
        }
        const authToken = Cookies.get('authToken');
        if (!authToken) {
            toast.warning('Please log in to proceed with booking.');
        } else {
            navigate('/booking', {
                state: {
                    checkInDate,
                    checkOutDate,
                    guests,
                    address,
                    totalLength: Math.ceil(new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24),
                    hotelId,
                    name,
                    features
                }
            });
        }
    };

    const handleMessageWithManager = () => {
        navigate(`/message/${managerId}`);
    };

    return (
        <div className="flex container mx-auto max-w-[84rem]">
            <ToastContainer />

            {/* Left Section: Details */}
            <div className="container mx-auto max-w-[50rem] p-8 ml-4">
                <div className="pb-4">
                    <h1 className="text-3xl font-semibold">{name}</h1>
                    <p className="text-gray-500 mt-1 py-3">{address}</p>
                    <div className="border-b py-3"></div>
                </div>

                {/* Description */}
                <div className="mt-6 py-3">
                    <h1 className="text-3xl font-semibold">Description</h1>
                    <p className="text-gray-600 mt-1 py-3">{description || "Not have description"}</p>
                </div>
                <div className="border-b py-3"></div>

                {/* Bed Types */}
                <div className="mt-6 py-3">
                    <h2 className="text-xl font-semibold">Where you'll sleep</h2>
                    <div className="border rounded-lg p-4 mt-4">
                        <p className="font-semibold">Bedroom</p>
                        {bedTypes?.length > 0 ? bedTypes.map((bed, index) => (
                            <p className="text-gray-600" key={index}>{bed}</p>
                        )) : <p className="text-gray-600">Không có thông tin nơi ngủ</p>}
                    </div>
                </div>
                <div className="border-b py-3"></div>

                {/* Features */}
                <div className="mt-6 py-3">
                    <h2 className="text-xl font-semibold">What this place offers</h2>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {features.map((amenity, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <p>{amenity}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-b py-3"></div>
            </div>

            {/* Right Section: Price and CTA */}
            <div className="mr-12">
                <aside className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full border border-gray-200">
                    <div className="border-b pb-4">
                        {basePrice ? (
                            <p className="text-2xl font-bold text-gray-800">${basePrice} <span className="text-sm font-normal text-gray-500">night</span></p>
                        ) : (
                            <p className="text-2xl font-bold text-gray-800">No price available</p>
                        )}
                        <p className="text-gray-500 mt-1">The price shown here is the low price of 1 room</p>
                    </div>

                    {/* Check-in, Check-out, and Guests */}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="border rounded-md p-3 text-gray-600 hover:bg-gray-100 transition duration-200">
                            <label className="text-xs font-semibold uppercase" htmlFor="check-in">Check-in</label>
                            <input
                                id="check-in"
                                type="date"
                                value={checkInDate}
                                onChange={(e) => setCheckInDate(e.target.value)}
                                className="text-sm border-none focus:outline-none"
                            />
                        </div>
                        <div className="border rounded-md p-3 text-gray-600 hover:bg-gray-100 transition duration-200">
                            <label className="text-xs font-semibold uppercase" htmlFor="check-out">Check-out</label>
                            <input
                                id="check-out"
                                type="date"
                                value={checkOutDate}
                                onChange={(e) => setCheckOutDate(e.target.value)}
                                className="text-sm border-none focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="border rounded-md p-3 mt-2 text-gray-600 hover:bg-gray-100 transition duration-200">
                        <label className="text-xs font-semibold uppercase" htmlFor="guests">Guests</label>
                        <input
                            id="guests"
                            type="number"
                            min="1"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="text-sm border-none focus:outline-none mt-2"
                        />
                    </div>

                    {/* Reserve Button */}
                    <button
                        className="mt-6 w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg font-semibold hover:opacity-90 transition duration-200"
                        onClick={handleReserve}
                    >
                        Reserve
                    </button>

                    {/* Message with Manager Button */}
                    <button
                        className="mt-4 w-full py-2 rounded-lg bg-blue-500 text-white text-lg font-semibold hover:opacity-90 transition duration-200"
                        onClick={handleMessageWithManager}
                    >
                        Message with Manager
                    </button>
                </aside>
            </div>
        </div>
    );
};

export default DetailsSection;
