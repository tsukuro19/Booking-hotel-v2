import React from 'react'

const BookingForm = () => {
    return (
        <form
            // onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-5 rounded-lg border border-slate-300 p-5">
            <span className="text-3xl font-bold">Confirm Your Details</span>
            <div className="grid grid-cols-2 gap-6">
                <label className="text-gray-700 text-sm font-bold flex-1">
                    First Name
                    <input
                        className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
                        type="text"
                        readOnly
                        disabled
                    // {...register("firstName")}
                    />
                </label>

                <label className="text-gray-700 text-sm font-bold flex-1">
                    Last Name
                    <input
                        className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
                        type="text"
                        readOnly
                        disabled
                    // {...register("lastName")}
                    />
                </label>

                <label className="text-gray-700 text-sm font-bold flex-1">
                    Email
                    <input
                        className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
                        type="text"
                        readOnly
                        disabled
                    // {...register("email")}
                    />
                </label>

                <label className="text-gray-700 text-sm font-bold flex-1">
                    Address
                    <input
                        className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
                        type="text"
                        readOnly
                        disabled
                    // {...register("email")}
                    />
                </label>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-semibold">Your Price Summary</h2>
                <div className="bg-blue-200 p-4 rounded-md">
                    <div className="font-semibold text-lg">
                        {/* Total cost: {paymentIntent.totalCost.toFixed(2)} */}
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="text-xl font-semibold">Payment Details</h3>
                <div>
                    <label className="text-gray-700 text-sm font-bold flex-1">
                        <input
                            type="radio"
                            value="card"
                            // {...register("paymentMethod")}
                            defaultChecked
                        />
                        Credit Card
                    </label>
                    <label className="text-gray-700 text-sm font-bold flex-1 ml-4">
                        <input
                            type="radio"
                            value="cash"
                        // {...register("paymentMethod")}
                        />
                        Pay with Cash
                    </label>
                </div>
                <div id="payment-element-container">
                    {/* {paymentMethod === "card" && (
                <CardElement id="payment-element" className="border rounded-md p-2 text-sm"/>
            )} */}
                </div>
            </div>

            <div className="flex justify-end">
                {/* <button disabled={isLoading} type="submit" className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-md">
            {isLoading ? "Saving..." : "Confirm Booking"}
        </button> */}
                <button type="submit" className="bg-blue-600 text-white p-2 mr-5 rounded-md font-bold hover:bg-blue-500 text-md">
                    Confirm
                </button>
            </div>
        </form>
    )
}

export default BookingForm;