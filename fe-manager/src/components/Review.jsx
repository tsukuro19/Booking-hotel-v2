import React, { useState } from 'react';

const reviewsData = [
    { guest: 'Alice Johnson', roomNumber: 305, comment: 'Great stay, very comfortable.', rating: 'Excellent' },
    { guest: 'Michael Brown', roomNumber: 402, comment: 'The room was clean, but the air conditioning didn’t work.', rating: 'Fair' },
    { guest: 'Emily Davis', roomNumber: 210, comment: 'Loved the view! Will return.', rating: 'Very Good' },
    { guest: 'John Doe', roomNumber: 410, comment: 'Very noisy at night, couldn’t sleep.', rating: 'Poor' },
    { guest: 'David Acaide', roomNumber: 320, comment: 'Very noisy at night, couldn’t sleep.', rating: 'Good' },
];

const Review = () => {
    const [guestFilter, setGuestFilter] = useState('');
    const [roomFilter, setRoomFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');

    // Apply filters to reviews data
    const filteredReviews = reviewsData.filter(review => {
        return (
            review.guest.toLowerCase().includes(guestFilter.toLowerCase()) &&
            review.roomNumber.toString().includes(roomFilter) &&
            review.rating.toLowerCase().includes(ratingFilter.toLowerCase())
        );
    });

    return (
        <div className="p-6">
            <div className="mb-4 grid grid-cols-3 gap-4">
                <input
                    type="text"
                    placeholder="Filter by Guest"
                    value={guestFilter}
                    onChange={(e) => setGuestFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Filter by Room Number"
                    value={roomFilter}
                    onChange={(e) => setRoomFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Filter by Rating"
                    value={ratingFilter}
                    onChange={(e) => setRatingFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded"
                />
            </div>

            <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Guest</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Room Number</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Comment</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredReviews.length > 0 ? (
                        filteredReviews.map((review, index) => (
                            <tr key={index} className="border-t hover:bg-gray-50">
                                <td className="px-4 py-2 text-sm text-gray-700">{review.guest}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{review.roomNumber}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{review.comment}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{review.rating}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="px-4 py-2 text-center text-gray-500">No matching reviews found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Review;
