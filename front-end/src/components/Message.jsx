import React, { useEffect, useRef, useState } from 'react';
import { PhotoIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid';
import Cookies from 'js-cookie';
import io from 'socket.io-client'; // Import socket.io-client
import { useParams } from 'react-router-dom'; // Import useParams to get managerId from URL params
import { getContentMessage, getListMessage } from '../services/apiService';

const Message = () => {
    const [managers, setManager] = useState([]);
    const [selectedManager, setSelectedManager] = useState(null);
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');
    const [currentImage, setCurrentImage] = useState(null);
    const customerId = parseInt(Cookies.get('user_id'));  // Get customerId from cookies
    const { managerId } = useParams(); // Get managerId from URL params

    const socket = useRef(null); // Socket reference

    // Fetch customers who have messages
    useEffect(() => {
        const fetchListMessage = async () => {
            if (managerId) {
                const response = await getListMessage(customerId);
                setManager(response);
            }
        };
        fetchListMessage();
    }, [customerId]);

    // Fetch messages for the selected customer
    useEffect(() => {
        if (managerId && selectedManager) {
            const fetchMessages = async () => {
                const response = await getContentMessage(selectedManager.managerId,customerId);
                setMessages(response);
            };
            fetchMessages();
        }
    }, [managerId, selectedManager]);

    // Establish socket connection
    useEffect(() => {
        socket.current = io('http://localhost:8081', {
            transports: ['websocket', 'polling'],  // Allow both websocket and polling
            withCredentials: true,  // Include cookies in the request if needed
        });

        socket.current.on('message', (data) => {
            // Handle incoming messages
            if (data.senderId !== selectedManager?.customerId) {
                setMessages((prevMessages) => [...prevMessages, data]);
            }
        });

        // Clean up socket connection on unmount
        return () => {
            if (socket.current) socket.current.disconnect();
        };
    }, [setSelectedManager]);

    // Send message handler
    const sendMessage = () => {
        if (currentMessage.trim() && socket.current) {
            const messageData = {
                senderId: customerId, // Sender is the customer now
                receiverId: managerId, // Receiver is the manager
                content: currentMessage,
                customerId: customerId,
                managerId: selectedManager.managerId,
            };
            // Emit the message to the server
            socket.current.emit('message', messageData);
            setMessages((prevMessages) => [
                ...prevMessages,
                { senderId: customerId, content: currentMessage, sentAt: new Date() },
            ]);
            setCurrentMessage('');
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar: List of Customers */}
            <div className="w-1/4 bg-white border-r border-gray-200 p-4">
                <input
                    type="text"
                    placeholder="Search name, chat, etc"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <div className="space-y-4">
                    {managers.map((manager, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedManager(manager)}
                            className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                        >
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-lg font-semibold text-white">
                                {manager.manager.first_name[0]}
                            </div>
                            <div className="ml-3 flex-1 w-full">
                                <div className="flex justify-between">
                                    <h4 className="text-gray-900 font-semibold">
                                        {manager.manager.first_name} {manager.manager.last_name}
                                    </h4>
                                </div>
                                <p className="text-gray-600 text-sm truncate overflow-hidden">
                                    {manager.manager.email}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Message Area */}
            <div className="w-3/4 p-4 flex flex-col justify-between">
                {selectedManager && (
                    <>
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-lg font-semibold text-white">
                                {selectedManager.manager.first_name[0]}
                            </div>
                            <div className="ml-3">
                                <h4 className="text-gray-900 font-semibold">
                                    {selectedManager.manager.first_name} {selectedManager.manager.last_name}
                                </h4>
                            </div>
                        </div>

                        {/* Message History */}
                        <div className="flex-1 overflow-y-auto space-y-4">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.senderId === parseInt(customerId) ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`p-3 rounded-lg max-w-xs ${msg.senderId === parseInt(customerId)
                                                ? 'bg-green-100 text-gray-900'
                                                : 'bg-gray-100 text-gray-900'
                                            }`}
                                    >
                                        <p className="text-sm">{msg.content}</p>
                                        <span className="text-xs text-gray-500 block mt-1">
                                            {new Date(msg.sentAt).toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Message Input Area */}
                        <div className="flex items-center mt-4 border-t pt-4 space-x-3">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setCurrentImage(e.target.files[0])}
                                className="hidden"
                                id="upload-image"
                            />
                            <label htmlFor="upload-image" className="cursor-pointer">
                                <PhotoIcon className="w-6 h-6 text-gray-600" />
                            </label>

                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 p-2 border border-gray-300 rounded"
                                value={currentMessage}
                                onChange={(e) => setCurrentMessage(e.target.value)}
                            />

                            <div onClick={sendMessage} className="cursor-pointer">
                                <PaperAirplaneIcon className="w-6 h-6 text-blue-500" />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Message;
