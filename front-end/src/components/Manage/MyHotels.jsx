import Footer from '../Footer';
import Header from '../Header';
import { Link } from "react-router-dom";

const MyHotels = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-6 md:px-12 pt-32 pb-8">
                {/* Title and Add Button */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">Hotel of ...</h1>
                    <Link
                        to="/add-hotel"
                        className="bg-blue-600 text-white text-lg font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500 transition duration-200"
                    >
                        + Add New Hotel
                    </Link>
                </div>

                {/* Hotel Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example hotel cards */}
                    {[1, 2, 3].map((hotel, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <h2 className="text-2xl font-semibold mb-2">Hotel {hotel}</h2>
                            <p className="text-gray-600">Location: </p>
                            <p className="text-yellow-500 font-medium">Star: 4 ⭐</p>
                            <div className="flex justify-between items-center mt-4">
                                <button className="text-blue-500 hover:text-blue-700 font-medium">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MyHotels;
