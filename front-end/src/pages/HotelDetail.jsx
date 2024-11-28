import Footer from '../components/Footer';
import Header from '../components/Header';
import ImagesSection from '../form/ImagesSection';
import DetailsSection from '../form/DetailsSection';
import { useEffect, useState } from 'react';
import { getHotelDetailFull, createReview, updateReview, deleteReview, getReviewHotel } from '../services/apiService';
import { useParams } from 'react-router-dom';
import Comments from "../components/Comments";
import Cookies from 'js-cookie';

const HotelDetail = () => {
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [rating, setRating] = useState(1);
    const customerId = parseInt(Cookies.get('user_id'));

    useEffect(() => {
        const fetchHotelFullDetail = async () => {
            try {
                const response = await getHotelDetailFull(hotelId);
                const responseComment = await getReviewHotel(hotelId);
                console.log(responseComment);
                if (response && response.data) {
                    setHotel(response.data);
                    setComments(responseComment || []);
                } else {
                    console.error('No hotel data found in the response');
                    setHotel(null);
                }
            } catch (error) {
                console.error('Error fetching hotel details:', error);
                setHotel(null);
            }
        };
        fetchHotelFullDetail();
    }, [hotelId]);

    const handleNewComment = async () => {
        if (newComment) {
            try {
                const dataRequest = {
                    content: newComment,
                    rating: rating,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    customerId: parseInt(customerId),
                    hotelId: parseInt(hotelId),
                };
                const response = await createReview(dataRequest);
                if (response && response.data) {
                    setComments([response.data, ...comments]); // Add new comment to the list
                    setNewComment(''); // Reset input field
                }
            } catch (error) {
                console.error('Error creating comment:', error);
            }
        }
    };

    const handleUpdateComment = async (commentId, updatedComment) => {
        try {
            const dataRequest = {
                content: updatedComment.content,
                rating: updatedComment.rating,
                updatedAt: new Date(),
                customerId: parseInt(customerId),
                hotelId: parseInt(hotelId),
            };
            const response = await updateReview(commentId, dataRequest);
            if (response && response.data) {
                setComments(comments.map(comment => comment.id === commentId ? response.data : comment));
                window.location.reload();
            }
        } catch (error) {
            console.error('Error updating comment:', error);
        }
    };

    const handleDeleteComment = async (commentId) => {
        try {
            const response = await deleteReview(commentId);
            if (response && response.status === 200) {
                setComments(comments.filter(comment => comment.id !== commentId));
                window.location.reload();
            }
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    if (!hotel) {
        return <div>Loading hotel details...</div>;
    }

    const hotelInformation = {
        name: hotel.name_hotel,
        address: hotel.address,
        description: hotel.description,
        bedTypes: hotel.bedTypes,
        basePrice: hotel.roomClassesPrice[0],
        features: hotel.features,
        hotelId: hotelId,
        managerId: hotel.manager.id,
    };

    const images = hotel.image.map(image => image.imageUrl);

    return (
        <>
            <Header />
            <div className="py-32 px-6 md:px-16">
                <ImagesSection hotelInformation={images} />
                <DetailsSection hotelInformation={hotelInformation} />

                {/* Comments Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>

                    <div className="mb-6">
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Write your review..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <div className="mt-4 flex justify-between items-center">
                            <select
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value={1}>1 Star</option>
                                <option value={2}>2 Stars</option>
                                <option value={3}>3 Stars</option>
                                <option value={4}>4 Stars</option>
                                <option value={5}>5 Stars</option>
                            </select>
                            <button
                                onClick={handleNewComment}
                                className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                            >
                                Submit Review
                            </button>
                        </div>
                    </div>

                    <Comments
                        comments={comments}
                        onUpdate={handleUpdateComment}
                        onDelete={handleDeleteComment}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HotelDetail;
