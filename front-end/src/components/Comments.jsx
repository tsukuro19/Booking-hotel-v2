import { useState } from 'react';

const Comments = ({ comments, onUpdate, onDelete }) => {
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [updatedContent, setUpdatedContent] = useState('');
    const [updatedRating, setUpdatedRating] = useState(5); // default rating

    const handleEditClick = (commentId, content) => {
        setEditingCommentId(commentId); // Set the comment to be edited
        setUpdatedContent(content); // Set the current content in the textarea
    };

    const handleUpdateClick = () => {
        if (updatedContent.trim()) {
            onUpdate(editingCommentId, { content: updatedContent, rating: Number(updatedRating) });
            setEditingCommentId(null); // Reset editing state
            setUpdatedContent(''); // Clear the textarea
            setUpdatedRating(5); // Reset rating
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <div key={comment.id} className="mb-4 p-4 border border-gray-200 rounded">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-semibold">
                                {comment.customer.last_name} {comment.customer.first_name}
                            </h3>
                            <div className="flex">
                                {editingCommentId === comment.id ? (
                                    <button onClick={handleUpdateClick} className="text-green-500">
                                        Update
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => handleEditClick(comment.id, comment.content)}
                                            className="text-blue-500"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => onDelete(comment.id)}
                                            className="ml-2 text-red-500"
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                        {editingCommentId === comment.id ? (
                            <div className="mt-2">
                                <textarea
                                    value={updatedContent}
                                    onChange={(e) => setUpdatedContent(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded max-w-md mx-auto"
                                    placeholder="Update your comment..."
                                />
                                <select
                                    value={updatedRating}
                                    onChange={(e) => setUpdatedRating(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded mt-2 max-w-md mx-auto"
                                >
                                    <option value="1">1 Star</option>
                                    <option value="2">2 Stars</option>
                                    <option value="3">3 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="5">5 Stars</option>
                                </select>
                            </div>
                        ) : (
                            <p className="mt-2">{comment.content}</p>
                        )}
                        <p className="mt-2 text-gray-500">Rating: {comment.rating} Stars</p>
                    </div>
                ))
            ) : (
                <div>No reviews yet.</div>
            )}
        </div>
    );
};
export default Comments;
