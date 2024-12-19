import { hotelTypes } from "../../config/hotel-options-config";

const TypeSection = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Type</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotelTypes.map((type, index) => (
                    <div
                        key={index}
                        className="cursor-pointer bg-blue-200 text-blue-800 text-sm rounded-full px-4 py-2 font-semibold hover:bg-blue-300"
                    >
                        {type}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TypeSection;
