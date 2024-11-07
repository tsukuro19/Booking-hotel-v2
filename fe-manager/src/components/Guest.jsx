import React, { useState } from 'react';
import { FiFilter, FiSearch, FiMoreVertical } from 'react-icons/fi';

const Guest = () => {
  const guestData = [
    { id: '#5644', name: 'Alexander', roomNumber: 'A647', totalAmount: '$ 467', amountPaid: '$ 200', status: 'Clean' },
    { id: '#6112', name: 'Pegasus', roomNumber: 'A456', totalAmount: '$ 645', amountPaid: '$ 250', status: 'Dirty' },
    { id: '#6141', name: 'Martin', roomNumber: 'A645', totalAmount: '$ 686', amountPaid: '$ 400', status: 'Dirty' },
    { id: '#6535', name: 'Cecil', roomNumber: 'A684', totalAmount: '$ 8413', amountPaid: '$ 2500', status: 'Inspected' },
    { id: '#6541', name: 'Luke', roomNumber: 'B464', totalAmount: '$ 841', amountPaid: '$ 400', status: 'Clean' },
    { id: '#9846', name: 'Yadrin', roomNumber: 'C648', totalAmount: '$ 684', amountPaid: '$ 300', status: 'Clean' },
    { id: '#4921', name: 'Kiand', roomNumber: 'D644', totalAmount: '$ 984', amountPaid: '$ 513', status: 'Pick up' },
    { id: '#9841', name: 'Turen', roomNumber: 'B641', totalAmount: '$ 984', amountPaid: '$ 600', status: 'Dirty' },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'clean':
        return 'bg-blue-100 text-blue-600';
      case 'dirty':
        return 'bg-red-100 text-red-600';
      case 'inspected':
        return 'bg-green-100 text-green-600';
      case 'pick up':
        return 'bg-orange-100 text-orange-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Guests</h2>
      </div>

      {/* Actions Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Check in
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
            Check out
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <FiFilter />
            Filter
          </button>
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by room number"
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Reservation ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Room Number</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Total amount</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Amount paid</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {guestData.map((guest) => (
              <tr key={guest.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{guest.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{guest.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{guest.roomNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{guest.totalAmount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{guest.amountPaid}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(guest.status)}`}>
                    {guest.status}
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

export default Guest;