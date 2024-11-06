import React, { useState } from "react";

const GuestsSection = () => {
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Guest Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-600">
                        Adults
                    </label>
                    <input
                        type="number"
                        min="1"
                        value={adults}
                        onChange={(e) => setAdults(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-600">
                        Children
                    </label>
                    <input
                        type="number"
                        min="0"
                        value={children}
                        onChange={(e) => setChildren(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default GuestsSection;
