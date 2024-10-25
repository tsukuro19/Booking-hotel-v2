
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
        <div className="max-w-[90rem] mx-auto space-y-4 ">
            <Comments comments={comments} />
        </div>
    );
};

export default ReviewRating;
