import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { createBooking, getFeaturesByHotelId, getProfileById, getRoomClassBedTypeByHotelId, getRoomClassWithFeaturesByHotelId } from '../../../services/apiService';
import { CardElement, PaymentElement } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const BookingForm = (bookingInfo) => {
    const {hotelId,checkInDate,checkOutDate,guests}=bookingInfo.hotelId;
    const [infoCustomer, setInfoCustomer] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    });
    const [roomClassBedType, setRoomClassBedType] = useState([]);
    const [roomClassFeature, setRoomClassFeature] = useState([]);
    const [features, setFeatures] = useState([]);
    const [selectedRoomClass, setSelectedRoomClass] = useState(null);
    const [selectedBedType, setSelectedBedType] = useState(null);
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [selectedFeaturesAdd, setSelectedFeaturesAdd] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('oneTimePayment');  // default payment method
    const userId = Cookies.get('user_id');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProfileById(userId);
                const responseRoomClassBedType = await getRoomClassBedTypeByHotelId(hotelId);
                const responseRoomClassFeature = await getRoomClassWithFeaturesByHotelId(hotelId);
                const responseFeature = await getFeaturesByHotelId(hotelId);
                const data = response.data;
                setRoomClassBedType(responseRoomClassBedType.data);
                setRoomClassFeature(responseRoomClassFeature.data);
                setFeatures(responseFeature.data);
                setInfoCustomer({
                    firstName: data.first_name,
                    lastName: data.last_name,
                    email: data.email,
                    phoneNumber: data.phone_number,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [userId, hotelId]);

    useEffect(() => {
        let price = 0;

        // Add price for selected features
        selectedFeatures.forEach(feature => {
            if (feature?.totalPriceRoomClassWithFeature) {
                price += feature.totalPriceRoomClassWithFeature;
            }
        });

        if (selectedFeaturesAdd) {
            selectedFeaturesAdd.forEach(feature => {
                if (feature?.totalPriceRoomClassWithFeature) {
                    price += feature.totalPriceRoomClassWithFeature;
                }
            });
        }

        setTotalPrice(price);
    }, [selectedRoomClass, selectedBedType, selectedFeatures, selectedFeaturesAdd]);

    const handleFeatureChange = (e) => {
        const feature = features.find(f => parseInt(f.id) === parseInt(e.target.value));
        setSelectedFeaturesAdd(prev =>
            e.target.checked
                ? [...prev, feature]
                : prev.filter(f => parseInt(f.id) !== feature.id)
        );
    };

    const handleRoomClassChange = (e) => {
        const roomClass = roomClassBedType.find(room => room.id === parseInt(e.target.value));
        if (roomClass) {
            setSelectedRoomClass(roomClass);
        }
    };

    const handleRoomClassFeatureChange = (e) => {
        const feature = roomClassFeature.find(f => parseInt(f.roomClassId) === parseInt(e.target.value));
        setSelectedFeatures(prev =>
            e.target.checked
                ? [...prev, feature]
                : prev.filter(f => parseInt(f.roomClassId) !== feature.id)
        );
    };

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);  // Update payment method state
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(paymentMethod === 'fiftyPercentPayment'){
            totalPrice=totalPrice*0.5;
        }
        const bookingData = {
            checkIn: new Date(checkInDate),
            checkOut: new Date(checkOutDate),
            bookingStatus: 'PENDING',
            bookingType: paymentMethod, // Add the selected payment method
            bookingAmount: totalPrice,
            customerId: parseInt(userId),
            hotelId: parseInt(hotelId),
            numGuests:guests
        };

        const response=await createBooking(bookingData);
        console.log(response.status);
        if (response.status==200) {
            toast.success('Booking successful!');
            navigate('/account/list-booking');
        }else{
            toast.error('Booking failed!');
        }
    };

    return (
        <form className="grid grid-cols-1 gap-5 rounded-lg border border-slate-300 p-5" onSubmit={handleSubmit}>
            <span className="text-3xl font-bold">Confirm Your Details</span>
            <div className="grid grid-cols-2 gap-6">
                <label className="text-gray-700 text-sm font-bold flex-1">
                    First Name
                    <input
                        className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
                        type="text"
                        readOnly
                        disabled
                        value={infoCustomer.firstName}
                    />
                </label>
                <label className="text-gray-700 text-sm font-bold flex-1">
                    Last Name
                    <input
                        className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
                        type="text"
                        readOnly
                        disabled
                        value={infoCustomer.lastName}
                    />
                </label>
                <label className="text-gray-700 text-sm font-bold flex-1">
                    Email
                    <input
                        className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
                        type="text"
                        readOnly
                        disabled
                        value={infoCustomer.email}
                    />
                </label>
                <label className="text-gray-700 text-sm font-bold flex-1">
                    Phone Number
                    <input
                        className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
                        type="text"
                        readOnly
                        disabled
                        value={infoCustomer.phoneNumber}
                    />
                </label>
            </div>

            {/* Room Class Selection */}
            <section className="mt-5">
                <h2 className="text-xl font-semibold">Select Room Class Bed Type</h2>
                <select
                    className="w-full mt-2 p-2 border rounded"
                    onChange={handleRoomClassChange}
                >
                    <option value="">Select Room Class Bed Type</option>
                    {roomClassBedType.map((roomClassObject) => (
                        <option key={roomClassObject.id} value={roomClassObject.id}>
                            {roomClassObject.roomClass.className || 'Unknown Room Class'} - ${roomClassObject.totalPriceRoomBeds.toLocaleString() || '0.00'}
                        </option>
                    ))}
                </select>
            </section>

            {/* Features Selection */}
            <section className="mt-5">
                <h2 className="text-xl font-semibold">Select Room Class Services</h2>
                {roomClassFeature.map(feature => (
                    <div key={feature.id} className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            value={feature.roomClassId}
                            onChange={handleRoomClassFeatureChange}
                            className="mr-2"
                        />
                        <span>{feature.className} - [{feature.features.map(f => f).join(', ')}] - ${feature.totalPriceRoomClassWithFeature.toLocaleString() || '0.00'} included in room price</span>
                    </div>
                ))}
            </section>

            {/* Add Feature Selection */}
            <section className="mt-5">
                <h2 className="text-xl font-semibold">Select Add Services</h2>
                {features.map(feature => (
                    <div key={feature.id} className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            value={feature.id}
                            onChange={handleFeatureChange}
                            className="mr-2"
                        />
                        <span>{feature.featureName} - {feature.featureDescription} - ${feature.featurePrice?.toLocaleString() || '0.00'}</span>
                    </div>
                ))}
            </section>

            {/* Price Summary */}
            <div className="space-y-2 mt-5">
                <h2 className="text-xl font-semibold">Your Price Summary</h2>
                <div className="bg-blue-200 p-4 rounded-md">
                    <div className="font-semibold text-lg">
                        Total: ${totalPrice.toLocaleString()}
                    </div>
                </div>
            </div>

            {/* Payment Details */}
            <div className="space-y-2 mt-5">
                <h3 className="text-xl font-semibold">Payment Details</h3>
                <div>
                    <label className="text-gray-700 text-sm font-bold">Payment Method</label>
                    <div className="flex items-center mt-2">
                        <input
                            type="radio"
                            id="oneTimePayment"
                            name="paymentMethod"
                            value="oneTimePayment"
                            checked={paymentMethod === 'oneTimePayment'}
                            onChange={handlePaymentChange}
                            className="mr-2"
                        />
                        <label htmlFor="oneTimePayment">One-time payment</label>
                    </div>
                    <div className="flex items-center mt-2">
                        <input
                            type="radio"
                            id="fiftyPercentPayment"
                            name="paymentMethod"
                            value="fiftyPercentPayment"
                            checked={paymentMethod === 'fiftyPercentPayment'}
                            onChange={handlePaymentChange}
                            className="mr-2"
                        />
                        <label htmlFor="fiftyPercentPayment">50% payment upfront</label>
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded mt-5 w-full"
            >
                Confirm Booking
            </button>
        </form>
    );
};

export default BookingForm;
