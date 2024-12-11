import { hotelFacilities } from "../../config/hotel-options-config";

const FacilitiesSection = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Facilities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotelFacilities.map((facility, index) => (
                    <div
                        key={index}
                        className="cursor-pointer bg-green-200 text-green-800 text-sm rounded-md px-4 py-2 font-semibold hover:bg-green-300"
                    >
                        {facility}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacilitiesSection;
