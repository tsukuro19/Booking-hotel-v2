import React from 'react'
import BookingForm from '../components/Forms/Booking/BoongkingForm'
import SearchBar from '../components/SearchBar'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'

const Booking = () => {
    const location=useLocation();
    const {state}=location;
    const hotelId={
        hotelId:state.hotelId,
        checkInDate:state.checkInDate,
        checkOutDate:state.checkOutDate,
        guests:state.guests
    }
    return (
        <>
            <div className="grid md:grid-cols-[1fr_2fr] p-4">
            <div className="grid gap-4 rounded-lg border border-slate-300 p-5 h-fit">
                <h2 className="text-xl font-bold">Booking for hotel {state.name}</h2>
                <div className="border-b py-2">
                    Location: {state.address}
                </div>
                <div className="flex justify-between">
                    <div>
                        Check-in
                         <div className="font-bold"> {state.checkInDate}</div> 
                    </div>
                    <div>
                        Check-out
                        <div className="font-bold"> {state.checkOutDate}</div>
                    </div>
                </div>
                <div className="border-t border-b py-2">
                    Total length of stay:
                    <div className="font-bold">{state.totalLength} nights</div>
                </div>
                <div>
                    Guests{" "}
                    <div className="font-bold">
                        {state.guests}
                    </div>
                </div>
            </div>
            <div>
            <BookingForm hotelId={hotelId}/>
            </div>
            </div>
        </>
    )
}

export default Booking