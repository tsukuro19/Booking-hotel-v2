import React from 'react';
import Header from './Header'; // Import Header component
import SearchBar from './SearchBar'; // Import SearchBar component
import videoBanner from '../assets/banner/video_banner_travel.mp4';

const Banner = () => {
    return (
        <section className="relative w-full h-[80vh] bg-blue-500 text-white">
            {/* Video background */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    src={videoBanner}
                    className="w-full h-full object-cover"
                    muted
                    autoPlay
                    playsInline
                    loop
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
            </div>

            {/* Header at the top */}
            <div className="relative z-20">
                <Header />
            </div>

            <SearchBar />
        </section>
    );
};

export default Banner;
