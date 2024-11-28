import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getListBookingByUserId } from "../../services/apiService";

const ListBooking = () => {
    const userId = Cookies.get('user_id');
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await getListBookingByUserId(userId);
                setBookings(response);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };
        fetchBookings();
    }, [userId]);

    return (
        <>
            <Header />

            <main className="bg-gray-100 min-h-screen p-6 mt-24">
                {bookings.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bookings.map((booking, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                            >
                                <h2 className="text-xl font-semibold mb-2">
                                    {booking.hotel.name_hotel}
                                </h2>
                                <p className="text-gray-600">
                                    <span className="font-bold">Address: </span>
                                    {booking.hotel.address}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-bold">Guests: </span>
                                    {booking.numGuests}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-bold">Check-in: </span>
                                    {new Date(booking.checkIn).toLocaleDateString()}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-bold">Check-out: </span>
                                    {new Date(booking.checkOut).toLocaleDateString()}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-bold">Amount: </span>
                                    ${booking.bookingAmount.toLocaleString()}
                                </p>
                                <p className={`mt-2 text-sm font-semibold ${
                                     booking.bookingStatus === 'CONFIRMED'
                                        ? 'text-green-600'
                                        : booking.bookingStatus === 'CANCELLED'
                                        ? 'text-red-600'
                                        : 'text-yellow-600'
                                }`}>
                                    Status: {booking.bookingStatus}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">No bookings found.</p>
                )}
            </main>

            <Footer />
        </>
    );
};

export default ListBooking;
