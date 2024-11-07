import React, { useState } from 'react';

const bookings = [
    { name: 'Lewis', startDate: '2024-05-03', endDate: '2024-05-05', status: 'Due-in' },
    { name: 'Mark', startDate: '2024-06-02', endDate: '2024-06-06', status: 'Checked-out' },
    { name: 'Tate', startDate: '2024-05-01', endDate: '2024-06-10', status: 'Checked-out' },
    { name: 'Bruce', startDate: '2024-07-02', endDate: '2024-07-04', status: 'Due-out' },
    { name: 'Andrew', startDate: '2024-02-08', endDate: '2024-02-11', status: 'Due-out' },
    { name: 'Mave', startDate: '2024-01-08', endDate: '2024-02-11', status: 'Checked-in' },
];

const statusStyles = {
    'Due-in': 'bg-orange-100 text-orange-800',
    'Checked-out': 'bg-blue-100 text-blue-800',
    'Due-out': 'bg-red-100 text-red-800',
    'Checked-in': 'bg-green-100 text-green-800',
};

const getDaysInMonth = (year, month) => {
    const days = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
};

const FrontDesk = () => {
    const [search, setSearch] = useState('');
    const [selectedMonth, setSelectedMonth] = useState(null);
    const months = Array.from({ length: 12 }, (_, i) =>
        new Date(2024, i).toLocaleString('default', { month: 'short' })
    );

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-4">
                    {Object.keys(statusStyles).map((status) => (
                        <div key={status} className={`px-3 py-1 rounded ${statusStyles[status]}`}>
                            {status.replace('-', ' ')}
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    placeholder="Search by name"
                    className="border p-2 rounded"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Create Booking</button>
            </div>

            {/* Monthly View */}
            <div className="grid grid-cols-12 gap-2 mb-4">
                {months.map((month, i) => (
                    <div
                        key={i}
                        className={`text-center font-medium p-2 cursor-pointer rounded ${selectedMonth === i ? 'bg-blue-200' : 'hover:bg-gray-200'
                            }`}
                        onClick={() => setSelectedMonth(i === selectedMonth ? null : i)}
                    >
                        {month}
                    </div>
                ))}
            </div>

            {/* Daily View of Selected Month */}
            {selectedMonth !== null && (
                <div className="grid grid-cols-[repeat(31,1fr)] gap-1 mb-4">
                    {getDaysInMonth(2024, selectedMonth).map((day) => (
                        <div
                            key={day}
                            className="flex items-center justify-center p-1 border rounded bg-gray-100 hover:bg-gray-200"
                        >
                            {day}
                        </div>
                    ))}
                </div>
            )}

            {/* Display Bookings */}
            <div className="relative">
                {selectedMonth !== null &&
                    bookings
                        .filter((booking) => {
                            const start = new Date(booking.startDate);
                            return (
                                start.getMonth() === selectedMonth &&
                                booking.name.toLowerCase().includes(search.toLowerCase())
                            );
                        })
                        .map((booking, index) => {
                            const start = new Date(booking.startDate).getDate();
                            const end = new Date(booking.endDate).getDate();
                            const colSpan = end - start + 1;

                            return (
                                <div
                                    key={index}
                                    className={`absolute p-2 rounded ${statusStyles[booking.status]}`}
                                    style={{
                                        left: `${(start - 1) * 100 / 31}%`, // Adjusting left dynamically
                                        width: `${colSpan * 100 / 31}%`,   // Adjusting width dynamically
                                        top: `${index * 50}px`,            // Adjusting vertical spacing
                                    }}
                                >
                                    {/* {`${booking.name} - Room ${booking.room}`} */}
                                    {/* {`Room ${booking.room}`} */}
                                    {booking.name}
                                </div>
                            );
                        })}
            </div>
        </div>
    );
};

export default FrontDesk;
