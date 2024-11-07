import React, { useState } from 'react';
import { FiMoreVertical, FiFilter } from 'react-icons/fi';
import CreateRoom from './CreateRoom';

const Room = () => {
  const [showModalCreateRoom, setShowModalCreateRoom] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  const filterOptions = [
    { value: 'all', label: 'All Rooms', count: 100 },
    { value: 'available', label: 'Available', count: 20 },
    { value: 'booked', label: 'Booked', count: 30 },
    { value: 'reserved', label: 'Reserved', count: 15 },
    { value: 'waitlist', label: 'Waitlist', count: 10 },
    { value: 'blocked', label: 'Blocked', count: 5 },
    { value: 'dirty', label: 'Dirty', count: 10 },
    { value: 'clean', label: 'Clean', count: 8 },
    { value: 'inspected', label: 'Inspected', count: 2 }
  ];

  // Filter rooms based on selected filter
  const filteredRooms = roomData.filter(room => {
    if (selectedFilter === 'all') return true;
    return room.status.toLowerCase() === selectedFilter.toLowerCase();
  });

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
      case 'dirty':
        return 'bg-gray-100 text-gray-600';
      case 'clean':
        return 'bg-emerald-100 text-emerald-600';
      case 'inspected':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const handleCreateRoom = (newRoomData) => {
    // Xử lý thêm phòng mới vào danh sách
    console.log('New Room Data:', newRoomData);
    // Thêm logic gọi API hoặc thêm vào state ở đây
    setShowModalCreateRoom(false);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Room</h2>
      </div>

      {/* Action Bar */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={() => setSelectedFilter('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedFilter === 'all' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-700 border hover:bg-gray-50'
          }`}
        >
          All Rooms (100)
        </button>

        <div className="flex items-center gap-4">
          {/* Filter Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <FiFilter />
              <span>Filter Status</span>
            </button>
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border overflow-hidden z-10">
                {filterOptions.map((option) => (
                  <div 
                    key={option.value}
                    className={`px-4 py-2 cursor-pointer flex justify-between items-center ${
                      selectedFilter === option.value ? 'bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      setSelectedFilter(option.value);
                      setIsFilterOpen(false);
                    }}
                  >
                    <span>{option.label}</span>
                    <span className="text-sm text-gray-500">({option.count})</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={() => setShowModalCreateRoom(true)} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add room
          </button>
        </div>
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
            {filteredRooms.map((room) => (
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

      {/* Create Room Modal */}
      <CreateRoom
        isOpen={showModalCreateRoom}
        onClose={() => setShowModalCreateRoom(false)}
        onSubmit={handleCreateRoom}
      />
    </div>
  );
};

export default Room;