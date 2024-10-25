import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS của React Datepicker
import { registerLocale } from 'react-datepicker';
import vi from 'date-fns/locale/vi'; // Để sử dụng ngôn ngữ tiếng Việt
registerLocale('vi', vi); // Đăng ký locale tiếng Việt

const SearchBar = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showCalendars, setShowCalendars] = useState(false); // Điều khiển hiển thị lịch

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <div className="relative container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
            <form className="w-full max-w-6xl mx-auto bg-white rounded-full p-6 shadow-md flex items-center gap-4 relative"
            // style={{ marginBottom: '40px', marginTop: '500px', backgroundColor: '#fff' }}>
            >

                {/* Location */}
                <div className="flex-1 min-w-0">
                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        id="destination"
                        className="mt-1 block w-full border border-gray-300 rounded-full shadow-sm px-4 py-2 focus:ring-pink-500 focus:border-pink-500"
                        placeholder="Where are you going?"
                    />
                </div>

                {/* Check in / Check out */}
                <div className="flex-1 min-w-0 relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check in / Check out</label>
                    <div className="flex justify-between">
                        <div className="flex-1 cursor-pointer border border-gray-300 rounded-full shadow-sm px-4 py-2"
                            onClick={() => setShowCalendars(!showCalendars)}>
                            <span className="block text-gray-500">{startDate ? startDate.toLocaleDateString() : "Add dates"}</span>
                        </div>
                        <div className="flex-1 cursor-pointer border border-gray-300 rounded-full shadow-sm px-4 py-2"
                            onClick={() => setShowCalendars(!showCalendars)}>
                            <span className="block text-gray-500">{endDate ? endDate.toLocaleDateString() : "Add dates"}</span>
                        </div>
                    </div>

                    {/* Calendar */}
                    {showCalendars && (
                        <div className="absolute flex bg-white border rounded-lg shadow-lg z-10 p-4 space-x-4">
                            <div className="flex-1">
                                <DatePicker
                                    selected={startDate}
                                    onChange={date => {
                                        handleDateChange([date, endDate]);
                                        setShowCalendars(false); // Đóng lịch sau khi chọn
                                    }}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    inline // Hiển thị lịch Check in
                                    locale="vi"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="flex-1">
                                <DatePicker
                                    selected={endDate}
                                    onChange={date => {
                                        handleDateChange([startDate, date]);
                                        setShowCalendars(false); // Đóng lịch sau khi chọn
                                    }}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    inline // Hiển thị lịch Check out
                                    locale="vi"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Guests */}
                <div className="flex-1 min-w-0">
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Guests</label>
                    <input
                        type="number"
                        id="guests"
                        min="1"
                        className="mt-1 block w-full border border-gray-300 rounded-full shadow-sm px-4 py-2 focus:ring-pink-500 focus:border-pink-500"
                        placeholder="Add guests"
                    />
                </div>

                {/* Search Button */}
                <button
                    type="submit"
                    className="flex-shrink-0 bg-pink-500 text-white py-3 px-6 rounded-full hover:bg-pink-600 flex items-center justify-center shadow-lg"
                >
                    <i className="fas fa-search mr-2"></i> Search
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
