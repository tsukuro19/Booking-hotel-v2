import React, { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';

const Room = () => {
  const roomData = [
    { 
      id: '#001', 
      bedType: 'Double bed', 
      roomFloor: 'Floor - 1',
      facility: 'AC, shower, Double bed, towel bathtub, TV',
      status: 'Available' 
    },
    { 
      id: '#002', 
      bedType: 'Single bed', 
      roomFloor: 'Floor - 2',
      facility: 'AC, shower, Double bed, towel bathtub, TV',
      status: 'Booked' 
    },
    { 
      id: '#003', 
      bedType: 'VIP', 
      roomFloor: 'Floor - 1',
      facility: 'AC, shower, Double bed, towel bathtub, TV',
      status: 'Booked' 
    },
    { 
      id: '#004', 
      bedType: 'VIP', 
      roomFloor: 'Floor - 1',
      facility: 'AC, shower, Double bed, towel bathtub, TV',
      status: 'Reserved' 
    },
    { 
      id: '#005', 
      bedType: 'Single bed', 
      roomFloor: 'Floor - 1',
      facility: 'AC, shower, Double bed, towel bathtub, TV',
      status: 'Reserved' 
    },
    { 
      id: '#006', 
      bedType: 'Double bed', 
      roomFloor: 'Floor - 2',
      facility: 'AC, shower, Double bed, towel bathtub, TV',
      status: 'Waitlist' 
    },
    { 
      id: '#007', 
      bedType: 'Double bed', 
      roomFloor: 'Floor - 3',
      facility: 'AC, shower, Double bed, towel bathtub, TV',
      status: 'Reserved' 
    },
    { 
      id: '#008', 
      bedType: 'Single bed', 
      roomFloor: 'Floor - 5',
      facility: 'AC, shower, Double bed, towel bathtub, TV',
      status: 'Blocked' 
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'available':
        return 'bg-blue-100 text-blue-600';
      case 'booked':
        return 'bg-red-100 text-red-600';
      case 'reserved':
        return 'bg-green-100 text-green-600';
      case 'waitlist':
        return 'bg-orange-100 text-orange-600';
      case 'blocked':
        return 'bg-yellow-100 text-yellow-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Room</h2>
      </div>

      {/* Room Status Filters */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            All room(100)
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-lg border hover:bg-gray-50">
            Available room(20)
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-lg border hover:bg-gray-50">
            Booked(80)
          </button>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add room
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Room number</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Bed type</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Room floor</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Room facility</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {roomData.map((room) => (
              <tr key={room.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{room.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{room.bedType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{room.roomFloor}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{room.facility}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(room.status)}`}>
                    {room.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-400 hover:text-gray-500">
                    <FiMoreVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t">
          <div className="flex-1 flex justify-center">
            <nav className="relative z-0 inline-flex shadow-sm -space-x-px">
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-blue-600 hover:bg-gray-50">1</button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">2</button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">3</button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">4</button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">5</button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">6</button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">7</button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;