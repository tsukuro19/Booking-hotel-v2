import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [guestFilter, setGuestFilter] = useState('');
    const [roomFilter, setRoomFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    const managerId = parseInt(Cookies.get('managerId'));

    // Fetch reviews from API
    const fetchReviews = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/manager/review/${managerId}`); // Example endpoint
            setReviews(response.data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    // Apply filters to the fetched reviews
    const filteredReviews = reviews.filter(review => {
        return (
            review.hotel.name_hotel.toLowerCase().includes(guestFilter.toLowerCase()) &&
            review.hotelId.toString().includes(roomFilter) &&
            review.rating.toString().includes(ratingFilter)
        );
    });

    useEffect(() => {
        fetchReviews(); // Fetch reviews when the component is mounted
    }, [managerId]);

    return (
        <div className="p-6">
            <div className="mb-4 grid grid-cols-3 gap-4">
                <input
                    type="text"
                    placeholder="Filter by Hotel"
                    value={guestFilter}
                    onChange={(e) => setGuestFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Filter by Hotel ID"
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
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Hotel</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Rating</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredReviews.length > 0 ? (
                        filteredReviews.map((review) => (
                            <tr key={review.id} className="border-t hover:bg-gray-50">
                                <td className="px-4 py-2 text-sm text-gray-700">{review.hotel.name_hotel}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{review.rating}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{review.content}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="px-4 py-2 text-center text-gray-500">No matching reviews found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Review;
