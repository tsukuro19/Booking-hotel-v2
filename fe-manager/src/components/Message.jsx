import React, { useState } from 'react';
import { PhotoIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid';

const initialMessages = [
    { sender: 'Alice Johnson', content: 'Can I request a late check-out for Room 305?', time: '9:15 PM', type: 'received' },
    { sender: 'Hotel', content: 'Hi Alice, we can accommodate a late check-out for you. How late would you like to stay?', time: '9:20 AM', type: 'sent' },
    { sender: 'Alice Johnson', content: 'I was hoping to stay until 2 PM. Is that possible?', time: '9:22 AM', type: 'received' }
];

const customers = [
    { name: 'Alice Johnson', lastMessage: 'Can I request a late check-out for Room 305?' },
    { name: 'Michael Brown', lastMessage: 'The air conditioning in my room isn’t working.' },
    { name: 'Emily Davis', lastMessage: 'Can you confirm my airport pickup for tomorrow?' },
    { name: 'John Doe', lastMessage: 'I need extra towels and pillows in Room 410.' }
];

const Message = () => {
    const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);
    const [messages, setMessages] = useState(initialMessages);
    const [currentMessage, setCurrentMessage] = useState('');
    const [currentImage, setCurrentImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setCurrentImage(URL.createObjectURL(file));
        }
    };

    const sendMessage = () => {
        if (currentMessage || currentImage) {
            const newMessage = {
                sender: 'Hotel',
                content: currentImage ? <img src={currentImage} alt="Sent" className="max-w-full h-auto" /> : currentMessage,
                time: 'Now',
                type: 'sent'
            };
            setMessages([...messages, newMessage]);
            setCurrentMessage('');
            setCurrentImage(null);
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar: Customer List */}
            <div className="w-1/4 bg-white border-r border-gray-200 p-4">
                <input
                    type="text"
                    placeholder="Search name, chat, etc"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <div className="space-y-4">
                    {customers.map((customer, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedCustomer(customer)}
                            className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                        >
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-lg font-semibold text-white">
                                {customer.name[0]}
                            </div>
                            <div className="ml-3 flex-1 w-full">
                                <div className="flex justify-between">
                                    <h4 className="text-gray-900 font-semibold">{customer.name}</h4>
                                </div>
                                <p className="text-gray-600 text-sm truncate overflow-hidden">{customer.lastMessage}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Message Area */}
            <div className="w-2/4 p-4 flex flex-col justify-between">
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-lg font-semibold text-white">
                        {selectedCustomer.name[0]}
                    </div>
                    <div className="ml-3">
                        <h4 className="text-gray-900 font-semibold">{selectedCustomer.name}</h4>
                        <p className="text-sm text-gray-500">last seen recently</p>
                    </div>
                </div>

                {/* Message History */}
                <div className="flex-1 overflow-y-auto space-y-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`p-3 rounded-lg max-w-xs ${msg.type === 'sent' ? 'bg-green-100 text-gray-900' : 'bg-gray-100 text-gray-900'}`}
                            >
                                {typeof msg.content === 'string' ? (
                                    <p className="text-sm">{msg.content}</p>
                                ) : (
                                    msg.content
                                )}
                                <span className="text-xs text-gray-500 block mt-1">{msg.time}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input Area */}
                <div className="flex items-center mt-4 border-t pt-4 space-x-3">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="upload-image"
                    />
                    <label htmlFor="upload-image" className="cursor-pointer">
                        <PhotoIcon className="w-6 h-6 text-gray-600" /> {/* Use PhotoIcon */}
                    </label>

                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 p-2 border border-gray-300 rounded"
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                    />

                    <div onClick={sendMessage} className="cursor-pointer">
                        <PaperAirplaneIcon className="w-6 h-6 text-blue-500" /> {/* No rotation */}
                    </div>
                </div>
            </div>

            {/* Customer Profile Details */}
            <div className="w-1/4 bg-white p-4 border-l border-gray-200">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-lg font-semibold text-white mb-4">
                        {selectedCustomer.name[0]}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{selectedCustomer.name}</h4>
                    <p className="text-sm text-gray-500 mb-4">G011-987654321</p>
                </div>
                <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">ABOUT</h5>
                    <p className="text-sm text-gray-700">A frequent traveler who enjoys luxury accommodations and values exceptional customer service.</p>
                </div>
                <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">MEDIA (3)</h5>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="w-full h-20 bg-gray-200 rounded-lg"></div>
                        <div className="w-full h-20 bg-gray-200 rounded-lg"></div>
                        <div className="w-full h-20 bg-gray-200 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;
