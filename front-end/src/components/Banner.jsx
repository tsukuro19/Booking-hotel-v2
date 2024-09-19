import React from 'react';

function Banner() {
    return (
        <section className="relative bg-blue-500 text-white py-12 z-10">
            <div className="absolute inset-0">
                <img
                    src="https://example.com/your-banner-image.jpg"
                    alt="Banner"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Your Perfect Stay</h1>
                <p className="text-lg mb-8">Search for hotels and book your next getaway with ease.</p>
                <form className="w-full max-w-6xl mx-auto bg-white rounded-lg p-6 shadow-lg flex items-center gap-4">
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
        </section>
    );
}

export default Banner;
