import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const occupancyData = [
    { name: 'May', value: 85 },
    { name: 'Jun', value: 65 },
    { name: 'Jul', value: 80 },
    { name: 'Aug', value: 45 },
    { name: 'Sep', value: 95 },
    { name: 'Oct', value: 85 },
    { name: 'Nov', value: 85 },
    { name: 'Dec', value: 90 },
    { name: 'Jan', value: 95 },
    { name: 'Feb', value: 90 }
  ];

  const roomTypes = [
    { type: 'Single sharing', deals: 2, total: 30, price: 568 },
    { type: 'Double sharing', deals: 2, total: 35, price: 1068 },
    { type: 'Triple sharing', deals: 0, total: 25, price: 1568 },
    { type: 'VIP Suit', deals: 0, total: 10, price: 2568 }
  ];

  const roomStatus = {
    occupied: {
      total: 104,
      clean: 90,
      dirty: 4,
      inspected: 60
    },
    available: {
      total: 20,
      clean: 30,
      dirty: 19,
      inspected: 30
    }
  };

  const feedback = [
    { name: 'Mark', room: 'A201', message: 'Food could be better.' },
    { name: 'Christian', room: 'A101', message: 'Facilities are not enough for amount paid.' },
    { name: 'Alexander', room: 'A301', message: 'Room cleaning could be better.' }
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-gray-500">Friday, November 18,2022</div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Create booking
        </button>
      </div>

      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Overview</h2>
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-500">Today's Check-in</div>
            <div className="text-2xl font-bold text-blue-600">23</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-500">Today's Check-out</div>
            <div className="text-2xl font-bold text-blue-600">13</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-500">Total In hotel</div>
            <div className="text-2xl font-bold text-blue-600">60</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-500">Total Available room</div>
            <div className="text-2xl font-bold text-blue-600">10</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-500">Total Occupied room</div>
            <div className="text-2xl font-bold text-blue-600">90</div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Rooms</h2>
        <div className="grid grid-cols-4 gap-4">
          {roomTypes.map((room) => (
            <div key={room.type} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  {room.deals > 0 && (
                    <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                      {room.deals} Deals
                    </span>
                  )}
                </div>
                <button className="text-gray-400">
                  <FiMoreVertical />
                </button>
              </div>
              <h3 className="font-medium text-gray-800 mb-2">{room.type}</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-lg font-bold text-gray-800">{room.total}</span>
                <span className="text-gray-500">/{room.total}</span>
              </div>
              <div className="text-blue-600 font-semibold">
                $ {room.price}
                <span className="text-gray-500 text-sm">/day</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Status and Statistics */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {/* Room Status */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Room status</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-600 mb-2">Occupied rooms</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total</span>
                  <span>{roomStatus.occupied.total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Clean</span>
                  <span>{roomStatus.occupied.clean}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Dirty</span>
                  <span>{roomStatus.occupied.dirty}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Inspected</span>
                  <span>{roomStatus.occupied.inspected}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-600 mb-2">Available rooms</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total</span>
                  <span>{roomStatus.available.total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Clean</span>
                  <span>{roomStatus.available.clean}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Dirty</span>
                  <span>{roomStatus.available.dirty}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Inspected</span>
                  <span>{roomStatus.available.inspected}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floor Status */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Floor status</h2>
          <div className="flex items-center justify-center h-48">
            <div className="relative w-40 h-40">
              <svg className="-rotate-90 w-40 h-40">
                <circle
                  className="text-gray-200"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="70"
                  cx="80"
                  cy="80"
                />
                <circle
                  className="text-blue-600"
                  strokeWidth="10"
                  strokeDasharray={440}
                  strokeDashoffset={88}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="70"
                  cx="80"
                  cy="80"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                80%
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span>Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
              <span>Yet to Complete</span>
            </div>
          </div>
        </div>

        {/* Customer Feedback */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Customers feedback</h2>
            <button className="text-gray-400">
              <FiMoreVertical />
            </button>
          </div>
          <div className="space-y-4">
            {feedback.map((item) => (
              <div key={item.room} className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-gray-800">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.message}</div>
                </div>
                <div className="text-sm text-gray-500">{item.room}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Occupancy Statistics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Occupancy Statistics</h2>
            <button className="px-4 py-2 text-sm border rounded-lg">Monthly</button>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={occupancyData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;