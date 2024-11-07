import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const CreateRoom = ({ isOpen, onClose, onSubmit }) => {
  const [newRoom, setNewRoom] = useState({
    roomNumber: '',
    bedType: 'Single bed',
    roomFloor: '',
    facility: [],
    status: 'Available'
  });

  const facilityOptions = [
    'AC',
    'Shower',
    'Double bed',
    'Single bed',
    'Towel',
    'Bathtub',
    'TV',
    'WiFi',
    'Mini bar'
  ];

  const bedTypes = [
    'Single bed',
    'Double bed',
    'Triple bed',
    'VIP Suite'
  ];

  const statusOptions = [
    'Available',
    'Booked',
    'Reserved',
    'Waitlist',
    'Blocked',
    'Dirty',
    'Clean',
    'Inspected'
  ];

  const handleFacilityChange = (facility) => {
    if (newRoom.facility.includes(facility)) {
      setNewRoom({
        ...newRoom,
        facility: newRoom.facility.filter(f => f !== facility)
      });
    } else {
      setNewRoom({
        ...newRoom,
        facility: [...newRoom.facility, facility]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newRoom);
    // Reset form
    setNewRoom({
      roomNumber: '',
      bedType: 'Single bed',
      roomFloor: '',
      facility: [],
      status: 'Available'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add New Room</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FiX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            {/* Room Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Room Number
              </label>
              <input
                type="text"
                required
                value={newRoom.roomNumber}
                onChange={(e) => setNewRoom({...newRoom, roomNumber: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter room number"
              />
            </div>

            {/* Room Floor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Floor
              </label>
              <input
                type="text"
                required
                value={newRoom.roomFloor}
                onChange={(e) => setNewRoom({...newRoom, roomFloor: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter floor number"
              />
            </div>

            {/* Bed Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bed Type
              </label>
              <select
                value={newRoom.bedType}
                onChange={(e) => setNewRoom({...newRoom, bedType: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {bedTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={newRoom.status}
                onChange={(e) => setNewRoom({...newRoom, status: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Facilities */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Facilities
            </label>
            <div className="grid grid-cols-3 gap-3">
              {facilityOptions.map((facility) => (
                <label key={facility} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={newRoom.facility.includes(facility)}
                    onChange={() => handleFacilityChange(facility)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{facility}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRoom;