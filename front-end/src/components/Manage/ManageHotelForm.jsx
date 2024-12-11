import Footer from '../Footer';
import Header from '../Header';
import DetailsSection from "./DetailsSection";
import FacilitiesSection from "./FacilitiesSection";
import GuestsSection from "./GuestsSection";
import ImagesSection from "./ImagesSection";
import TypeSection from "./TypeSection";

const ManageHotelForm = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            {/* Main Content */}
            <div className="container mx-auto px-6 md:px-12 py-12 pt-32">
                <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Manage Hotel</h1>

                {/* Sections with consistent spacing */}
                <div className="space-y-8">
                    <DetailsSection />
                    <TypeSection />
                    <FacilitiesSection />
                    <GuestsSection />
                    <ImagesSection />
                    <span className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl disabled:bg-gray-500"
                        >
                            Save
                        </button>
                    </span>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ManageHotelForm;
