import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash2, FiPlusCircle } from 'react-icons/fi';

const HotelManagement = () => {
  // Fake list of hotels
  const hotels = [
    { id: 1, name: 'Grand Palace Hotel', address: '123 Ocean Drive, Miami', phone: '+1 234 567 890' },
    { id: 2, name: 'Sunset Boulevard Hotel', address: '456 Sunset Blvd, Los Angeles', phone: '+1 987 654 321' },
    { id: 3, name: 'Mountain View Inn', address: '789 Mountain Rd, Denver', phone: '+1 555 123 456' },
    { id: 4, name: 'Riverside Resort', address: '101 River Rd, Boston', phone: '+1 666 789 123' },
    { id: 5, name: 'Beachside Retreat', address: '202 Beach Ave, San Diego', phone: '+1 333 555 789' }
  ];

  const handleDelete = (id) => {
    // Logic to delete hotel
    console.log('Delete hotel with ID:', id);
  };

  const handleEdit = (id) => {
    // Logic to edit hotel
    console.log('Edit hotel with ID:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
        {/* Header with Create Button */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-700">List Hotels</h2>
          <Link
            to="/register-hotel"
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
          >
            <FiPlusCircle size={20} className="mr-2" />
            Create Hotel
          </Link>
        </div>

        {/* Hotel List */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-blue-600 text-white text-left text-sm uppercase">
                <th className="px-6 py-3">Hotel Name</th>
                <th className="px-6 py-3">Address</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel) => (
                <tr key={hotel.id} className="hover:bg-gray-100 transition-colors">
                  <td className="px-6 py-4 text-gray-700">{hotel.name}</td>
                  <td className="px-6 py-4 text-gray-700">{hotel.address}</td>
                  <td className="px-6 py-4 text-gray-700">{hotel.phone}</td>
                  <td className="px-6 py-4 flex items-center space-x-4">
                    <button
                      onClick={() => handleEdit(hotel.id)}
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      <FiEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(hotel.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HotelManagement;
