const ImagesSection = () => {
    return (
        <div className="max-w-7xl mx-auto p-8">
            {/* Container for all the images */}
            <div className="grid grid-cols-4 grid-rows-2 gap-4">
                {/* Large image */}
                <div className="col-span-2 row-span-2 relative bg-gray-300 rounded-lg h-100">
                    <div className="absolute bottom-4 left-4 text-white flex items-center">
                        <div className="bg-white rounded-full w-12 h-12"></div>
                        <div className="ml-4 text-black">
                            <p className="text-sm">Listed By:</p>
                            <p className="font-bold">John Doberman</p>
                            <p className="text-sm">For: $1000 - $5000</p>
                        </div>
                    </div>
                </div>

                {/* Small images */}
                <div className="bg-gray-300 rounded-lg h-48"></div>
                <div className="bg-gray-300 rounded-lg h-48"></div>
                <div className="bg-gray-300 rounded-lg h-48"></div>
                <div className="bg-gray-300 rounded-lg h-48 flex items-center justify-center">
                    <button className="text-xl font-bold text-black">+2<br />More<br />Photos</button>
                </div>
            </div>
        </div>
    );
};

export default ImagesSection;