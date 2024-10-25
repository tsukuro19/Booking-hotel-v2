// import React from "react";

// const Comments = ({ comments }) => {
//     return (
//         <div className="mt-6 space-y-4">
//             <h3 className="text-lg font-semibold">User Reviews</h3>
//             {comments.map((comment, index) => (
//                 <div
//                     key={index}
//                     className="p-4 border border-gray-200 rounded-md bg-gray-50"
//                 >
//                     <div className="flex items-center space-x-2">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                             <svg
//                                 key={star}
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill={comment.rating >= star ? "currentColor" : "none"}
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 className="w-5 h-5 text-yellow-400"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.072 6.373a1 1 0 00.95.69h6.682c.969 0 1.371 1.24.588 1.81l-5.417 3.928a1 1 0 00-.363 1.118l2.073 6.372c.3.922-.755 1.688-1.538 1.118l-5.417-3.928a1 1 0 00-1.175 0l-5.417 3.928c-.783.57-1.837-.196-1.538-1.118l2.073-6.372a1 1 0 00-.363-1.118L2.777 11.8c-.783-.57-.38-1.81.588-1.81h6.682a1 1 0 00.95-.69l2.072-6.373z"
//                                 />
//                             </svg>
//                         ))}
//                     </div>
//                     <p className="mt-2 text-gray-700">{comment.review}</p>
//                     <p className="text-sm text-gray-500">{comment.date}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Comments;

import React from "react";

const Comments = ({ comments }) => {
    return (
        <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">User Reviews</h3>
            <div className="flex space-x-4 overflow-x-auto"> {/* Sử dụng flex để hiển thị theo hàng ngang */}
                {comments.map((comment, index) => (
                    <div
                        key={index}
                        className="p-4 border border-gray-200 rounded-md bg-gray-50 min-w-[250px]" // Đảm bảo mỗi bình luận có độ rộng tối thiểu
                    >
                        {/* items-start:  căn chỉnh các phần tử con theo trục dọc trong flex */}
                        <div className="flex items-start space-x-2 mb-2"> {/* Flex để sắp xếp avatar và thông tin bên cạnh */}
                            <img
                                src="https://via.placeholder.com/40" // Placeholder cho avatar
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <span className="font-semibold">Anonymous User</span> {/* Tên người dùng */}

                                {/* Hiển thị sao bên dưới tên người dùng */}
                                <div className="flex items-center space-x-1 mb-2"> {/* Sử dụng space-x-1 để giảm khoảng cách giữa các sao */}
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg
                                            key={star}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill={comment.rating >= star ? "currentColor" : "none"}
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-4 h-4 text-yellow-400" // Giảm kích thước sao xuống còn w-4 h-4
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
                            </div>
                        </div>

                        <p className="text-gray-700">{comment.review}</p>
                        <p className="text-sm text-gray-500">{comment.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;
