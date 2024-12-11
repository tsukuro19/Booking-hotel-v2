const DetailsSection = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Name", "City", "Country", "Price Per Night", "Description"].map((field, index) => (
                    <label key={index} className="flex flex-col">
                        <span className="text-sm font-medium text-gray-600">{field}</span>
                        {field === "Description" ? (
                            <textarea
                                rows={5}
                                className="border rounded py-2 px-3 mt-1 text-gray-700"
                                placeholder={`Enter ${field.toLowerCase()}`}
                            ></textarea>
                        ) : (
                            <input
                                type={field === "Price Per Night" ? "number" : "text"}
                                className="border rounded py-2 px-3 mt-1 text-gray-700"
                                placeholder={`Enter ${field.toLowerCase()}`}
                            />
                        )}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default DetailsSection;
