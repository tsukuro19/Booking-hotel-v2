import React, { useEffect, useState } from 'react';
import { FiFilter, FiSearch } from 'react-icons/fi';
import Cookies from 'js-cookie';
import { getBooking, updateBooking, deleteBooking, updateRoomStatus } from '../services/apiServices'; // Replace with your API services
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Guest = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState({});
  const [selectedStatus, setSelectedStatus] = useState({});

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const responseBooking = await getBooking();
        setBookings(responseBooking);
      } catch (error) {
        toast.error('Error fetching bookings!');
        console.error('Error fetching bookings', error);
      }
    };

    fetchBookings();
  }, []);

  const handleStatusChange = (bookingId, newStatus) => {
    setSelectedStatus((prev) => ({ ...prev, [bookingId]: newStatus }));
  };

  const handleRoomChange = (bookingId, roomId) => {
    setSelectedRoom((prev) => ({ ...prev, [bookingId]: roomId }));
  };

  const handleUpdate = async (booking) => {
    const updatedBooking = {
      ...booking,
      bookingStatus: selectedStatus[booking.id] || booking.bookingStatus,
      roomId: parseInt(selectedRoom[booking.id] || booking.hotel.rooms[0].id),
    };

    const dataBookingResponse = {
      checkIn: new Date(updatedBooking.checkIn),
      checkOut: new Date(updatedBooking.checkOut),
      bookingStatus: updatedBooking.bookingStatus,
      hotelId: updatedBooking.hotelId,
      bookingAmount: updatedBooking.bookingAmount,
      customerId: updatedBooking.customerId,
      numGuests: updatedBooking.numGuests,
      bookingType: updatedBooking.bookingType,
    };

    const dataRoomResponse = {
      roomStatus: false,
      dayAvailableFrom: new Date(updatedBooking.checkOut),
      hotelId: updatedBooking.hotelId
    }

    try {
      await updateBooking(updatedBooking.id, dataBookingResponse);
      await updateRoomStatus(parseInt(updatedBooking.roomId), dataRoomResponse);
      toast.success('Booking updated successfully!');
      window.location.reload();
    } catch (error) {
      toast.error('Error updating booking!');
      console.error('Error updating booking', error);
    }
  };

  const handleDelete = async (bookingId) => {
    try {
      await deleteBooking(bookingId);
      setBookings((prev) => prev.filter((b) => b.id !== bookingId));
      toast.success('Booking deleted successfully!');
    } catch (error) {
      toast.error('Error deleting booking!');
      console.error('Error deleting booking', error);
    }
  };

  const handleRoomStatusUpdate = async (roomId, newStatus) => {
    try {
      await updateRoomStatus(roomId, { roomStatus: newStatus });
      toast.success('Room status updated successfully!');
    } catch (error) {
      toast.error('Error updating room status!');
      console.error('Error updating room status', error);
    }
  };

  return (
    <div className="p-6">
      <ToastContainer />
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Guests</h2>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Room</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Check-In</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Check-Out</th>

              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Total Amount</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Booking Type</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="px-6 py-3">
                  {booking.customer.last_name} {booking.customer.first_name}
                </td>
                <td className="px-6 py-3">
                  <select
                    value={selectedRoom[booking.id] || booking.hotel.rooms[0].id}
                    onChange={(e) => handleRoomChange(booking.id, e.target.value)}
                    className="border border-gray-300 rounded-lg px-2 py-1"
                  >
                    {booking.hotel.rooms
                      .filter((room) => room.roomStatus)
                      .map((room) => (
                        <option key={room.id} value={room.id}>
                          Room {room.roomNumber}
                        </option>
                      ))}
                  </select>
                </td>
                <td className="px-6 py-3">
                  {new Date(booking.checkIn).toLocaleDateString('en-GB')}
                </td>
                <td className="px-6 py-3">
                  {new Date(booking.checkOut).toLocaleDateString('en-GB')}
                </td>
                <td className="px-6 py-3">{booking.bookingAmount} USD</td>
                <td className="px-6 py-3">{booking.bookingType}</td>
                <td className="px-6 py-3">
                  <select
                    value={selectedStatus[booking.id] || booking.bookingStatus}
                    onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                    className={`border border-gray-300 rounded-lg px-2 py-1 ${(selectedStatus[booking.id] || booking.bookingStatus) === 'PENDING'
                      ? 'bg-yellow-500 text-black'
                      : (selectedStatus[booking.id] || booking.bookingStatus) === 'REFUNDED'
                        ? 'bg-red-500 text-white'
                        : 'bg-green-500 text-white'
                      }`}
                  >
                    <option value="PENDING">Pending</option>
                    <option value="REFUNDED">Refunded</option>
                    <option value="CONFIRMED">Confirmed</option>
                  </select>
                </td>
                <td className="px-6 py-3 flex gap-2">
                  <button
                    onClick={() => handleUpdate(booking)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(booking.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Guest;
