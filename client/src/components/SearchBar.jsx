// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = () => {
    return (
        <div className="relative container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
            <form className="w-full max-w-6xl mx-auto bg-white rounded-lg p-6 shadow-lg flex items-center gap-4 absolute bottom-0" style={{ marginBottom: '40px' }}>
                <div className="flex-1 min-w-0">
                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        id="destination"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        placeholder="City or Hotel Name"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <label htmlFor="check-in" className="block text-sm font-medium text-gray-700">Check-In</label>
                    <input
                        type="date"
                        id="check-in"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <label htmlFor="check-out" className="block text-sm font-medium text-gray-700">Check-Out</label>
                    <input
                        type="date"
                        id="check-out"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Guests</label>
                    <input
                        type="number"
                        id="guests"
                        min="1"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="flex-shrink-0 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center"
                >
                    <i className="fas fa-search mr-2"></i> {/* Sử dụng FontAwesome hoặc icon khác */}
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
