import React from 'react';
import { FaBed, FaBath, FaCar, FaDog } from 'react-icons/fa';
import { FaHeart, FaShareAlt } from 'react-icons/fa';

const DetailsSection = () => {
    return (
        <div className="flex container mx-auto min-h-screen">
            {/* Left Section: Details */}
            <div className="container mx-auto max-w-[64rem] p-8 ml-4">
                {/* Tiêu đề và thông tin chủ nhà */}
                <div className="pb-4">
                    <h1 className="text-3xl font-semibold">Dome hosted by Dorothy</h1>
                    <p className="text-gray-500 mt-1 py-3">3 guests · 1 bedroom · 1 bed · 1 bathroom</p>
                    <div className="border-b py-3"></div>
                </div>

                {/* Các tính năng nổi bật */}
                <div className="mt-6 py-3 flex-wrap">
                    <div className="flex items-center space-x-2 w-full md:w-1/2"> {/* Adjust width for larger screens */}
                        <span className="text-lg">🏊</span>
                        <p className="text-gray-600">Dive right in - One of the few places in the area with a pool.</p>
                    </div>
                    <div className="flex items-center space-x-2 w-full md:w-1/2"> {/* Adjust width for larger screens */}
                        <span className="text-lg">⭐</span>
                        <p className="text-gray-600">Experienced host - 720 reviews from other places.</p>
                    </div>
                </div>

                <div className="border-b py-3"></div>

                {/* Mô tả AirCover */}
                <div className="mt-6 py-3">
                    <h2 className="text-lg font-semibold text-red-500">air<span className="font-extrabold">cover</span></h2>
                    <p className="text-gray-600 mt-2">
                        Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
                    </p>
                    <button className="border border-b rounded-lg p-2 mt-4 text-blue-500">Learn more</button>
                </div>

                <div className="border-b py-3"></div>

                {/* Mô tả chi tiết nơi ở */}
                <div className="mt-6 py-3">
                    <p className="text-gray-600">
                        Adaaran Club Rannalhi is featured among the best hotels in Maldives and sits exclusively at the tip of the South Male atoll within the exotic collection of islands known as the Maldives. Its unique location offers access to pristine beaches, excellent scuba diving opportunities, and a relaxed environment with easy access to the capital city of Male.
                    </p>
                </div>

                <div className="border-b py-3"></div>

                {/* Thông tin nơi ngủ */}
                <div className="mt-6 py-3">
                    <h2 className="text-xl font-semibold">Where you'll sleep</h2>
                    <div className="border rounded-lg p-4 mt-4">
                        <p className="font-semibold">Bedroom</p>
                        <p className="text-gray-600">1 double bed</p>
                    </div>
                </div>

                <div className="border-b py-3"></div>

                {/* Tiện ích của nơi ở */}
                <div className="mt-6 py-3">
                    <h2 className="text-xl font-semibold">What this place offers</h2>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {[
                            { name: 'Wifi', icon: '🔗' },
                            { name: 'Pool', icon: '🏊' },
                            { name: 'TV', icon: '📺' },
                            { name: 'Air conditioning', icon: '❄️' },
                            { name: 'Hair dryer', icon: '💇‍♀️' },
                            { name: 'Breakfast', icon: '🍳' },
                            { name: 'Long-term stays allowed', icon: '🏡' }
                        ].map((amenity, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <span className="text-lg">{amenity.icon}</span>
                                <p>{amenity.name}</p>
                            </div>
                        ))}
                    </div>
                    <button className="border border-b rounded-lg p-2 mt-4 text-blue-500">Show all 14 amenities</button>
                </div>

                <div className="border-b py-3"></div>

            </div>

            {/* Right Section: Price and CTA */}
            <div className="mr-12">
                <aside className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full border border-gray-200">
                    {/* Giá theo đêm */}
                    <div className="border-b pb-4">
                        <p className="text-2xl font-bold text-gray-800">₹42,000 <span className="text-sm font-normal text-gray-500">night</span></p>
                    </div>

                    {/* Ngày và Khách */}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="border rounded-md p-3 text-gray-600 hover:bg-gray-100 transition duration-200">
                            <p className="text-xs font-semibold uppercase">Check-in</p>
                            <p className="text-sm">6/23/2022</p>
                        </div>
                        <div className="border rounded-md p-3 text-gray-600 hover:bg-gray-100 transition duration-200">
                            <p className="text-xs font-semibold uppercase">Check-out</p>
                            <p className="text-sm">6/23/2022</p>
                        </div>
                    </div>
                    <div className="border rounded-md p-3 mt-2 text-gray-600 hover:bg-gray-100 transition duration-200">
                        <p className="text-xs font-semibold uppercase">Guests</p>
                        <p className="text-sm">1 guest</p>
                    </div>

                    {/* Chính sách hủy phòng */}
                    <div className="mt-4">
                        <p className="text-sm font-semibold uppercase mb-2">Cancellation Policies</p>
                        <div className="border rounded-md p-3">
                            <label className="flex justify-between items-center">
                                <div>
                                    <p className="font-semibold text-gray-800">Non-refundable</p>
                                    <p className="text-gray-600">₹2,40,217 total</p>
                                </div>
                                <input type="radio" name="cancellation" defaultChecked />
                            </label>
                        </div>
                        <div className="border rounded-md p-3 mt-2 opacity-75">
                            <label className="flex justify-between items-center">
                                <div>
                                    <p className="font-semibold text-gray-800">Refundable</p>
                                    <p className="text-gray-600">₹2,66,907 total</p>
                                    <p className="text-xs text-gray-500">
                                        Free cancellation before 22 Jun. Cancel before check-in on 23 Jun for a partial refund.
                                    </p>
                                </div>
                                <input type="radio" name="cancellation" />
                            </label>
                        </div>
                    </div>

                    {/* Nút Reserve */}
                    <button className="mt-6 w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg font-semibold hover:opacity-90 transition duration-200">
                        Reserve
                    </button>
                    <p className="text-center text-gray-500 mt-2 text-sm">You won’t be charged yet</p>

                    {/* Chi tiết giá */}
                    <div className="mt-4">
                        <a href="#" className="text-blue-500 hover:underline flex items-center justify-between text-sm">
                            Show price details <span>▼</span>
                        </a>
                    </div>

                    {/* Tổng trước thuế */}
                    <div className="border-t mt-4 pt-4">
                        <p className="flex justify-between text-sm font-semibold">
                            Total before taxes <span>₹2,40,217 total</span>
                        </p>
                    </div>
                </aside>
            </div>



        </div >
    );
};

export default DetailsSection;
