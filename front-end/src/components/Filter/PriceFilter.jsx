import React from 'react';

const PriceFilter = ({ minPrice, maxPrice, onPriceChange }) => {
    return (
        <div className="mb-4 p-2 bg-gray-100 rounded-md shadow-sm max-w-xs mx-auto">
            <div className="flex gap-x-4"> {/* Điều chỉnh khoảng cách giữa các trường */}
                <div className="flex-1">
                    <label htmlFor="min-price" className="block text-sm font-medium text-gray-700">Min Price</label>
                    <input
                        type="number"
                        id="min-price"
                        value={minPrice}
                        onChange={(e) => onPriceChange(e.target.value, maxPrice)}
                        className="mt-1 w-24 border-gray-300 rounded-md shadow-sm text-sm p-1"
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="max-price" className="block text-sm font-medium text-gray-700">Max Price</label>
                    <input
                        type="number"
                        id="max-price"
                        value={maxPrice}
                        onChange={(e) => onPriceChange(minPrice, e.target.value)}
                        className="mt-1 w-24 border-gray-300 rounded-md shadow-sm text-sm p-1"
                    />
                </div>
            </div>
        </div>
    );
};

export default PriceFilter;
