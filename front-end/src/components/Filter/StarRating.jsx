// import React, { useState } from "react";

// const StarRating = ({ rating, setRating }) => {
//   const [hover, setHover] = useState(0);

//   return (
//     <div className="flex space-x-2">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <svg
//           key={star}
//           onClick={() => setRating(star)}
//           onMouseEnter={() => setHover(star)}
//           onMouseLeave={() => setHover(0)}
//           xmlns="http://www.w3.org/2000/svg"
//           fill={(hover || rating) >= star ? "currentColor" : "none"}
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className={`w-8 h-8 cursor-pointer text-yellow-400`}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.072 6.373a1 1 0 00.95.69h6.682c.969 0 1.371 1.24.588 1.81l-5.417 3.928a1 1 0 00-.363 1.118l2.073 6.372c.3.922-.755 1.688-1.538 1.118l-5.417-3.928a1 1 0 00-1.175 0l-5.417 3.928c-.783.57-1.837-.196-1.538-1.118l2.073-6.372a1 1 0 00-.363-1.118L2.777 11.8c-.783-.57-.38-1.81.588-1.81h6.682a1 1 0 00.95-.69l2.072-6.373z"
//           />
//         </svg>
//       ))}
//     </div>
//   );
// };

// export default StarRating;


import React from "react";

const StarRating = ({ rating }) => {
    return (
        <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={rating >= star ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8 text-yellow-400"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.072 6.373a1 1 0 00.95.69h6.682c.969 0 1.371 1.24.588 1.81l-5.417 3.928a1 1 0 00-.363 1.118l2.073 6.372c.3.922-.755 1.688-1.538 1.118l-5.417-3.928a1 1 0 00-1.175 0l-5.417 3.928c-.783.57-1.837-.196-1.538-1.118l2.073-6.372a1 1 0 00-.363-1.118L2.777 11.8c-.783-.57-.38-1.81.588-1.81h6.682a1 1 0 00.95-.69l2.072-6.373z"
                    />
                </svg>
            ))}
        </div>
    );
};

export default StarRating;
