// import React, { useState } from "react";
// import StarRating from "../components/Filter/StarRating";
// import Comments from "../components/Filter/Comments";

// const ReviewRating = () => {
//     const [rating, setRating] = useState(0);
//     const [review, setReview] = useState("");
//     const [comments, setComments] = useState([]);

//     const handleSubmit = () => {
//         if (rating > 0 && review.trim()) {
//             const newComment = {
//                 rating,
//                 review,
//                 date: new Date().toLocaleString(),
//             };
//             setComments([...comments, newComment]);
//             setReview("");
//             setRating(0);
//         } else {
//             alert("Please provide a rating and a review before submitting.");
//         }
//     };

//     return (
//         <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
//             <h2 className="text-xl font-semibold">Rate & Review</h2>

//             <StarRating rating={rating} setRating={setRating} />

//             <textarea
//                 className="w-full h-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Write your review here..."
//                 value={review}
//                 onChange={(e) => setReview(e.target.value)}
//             />

//             <button
//                 className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
//                 onClick={handleSubmit}
//             >
//                 Submit
//             </button>

//             <Comments comments={comments} />
//         </div>
//     );
// };

// export default ReviewRating;

import React from "react";
import StarRating from "../components/Filter/StarRating";
import Comments from "../components/Filter/Comments";

const ReviewRating = () => {

    const comments = [
        { rating: 4, review: "Great service and clean rooms!", date: "2023-09-23" },
        { rating: 5, review: "Amazing experience, highly recommend!", date: "2023-09-20" },
        { rating: 3, review: "Average stay, could be better.", date: "2023-09-18" },
    ];

    return (
        <div className="p-10 max-w-7xl mx-auto space-y-4">
            <h2 className="text-xl font-semibold">Guest Reviews</h2>
            {/* Hiển thị danh sách các bình luận */}

            <Comments comments={comments} />
        </div>
    );
};

export default ReviewRating;
