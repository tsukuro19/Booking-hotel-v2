import React from 'react';
import SearchBar from './SearchBar';
import videoBanner from '../assets/banner/video_banner_travel.mp4';

const Banner = () => {
    return (
        <section className="relative w-full h-[30rem] bg-blue-500 text-white z-10">

            <div className="absolute inset-0 overflow-hidden">
                <video
                    src={videoBanner}
                    className="w-full h-full object-cover"
                    muted
                    autoPlay
                    loop
                    type="video_banner_travel/mp4"
                ></video>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="relative flex flex-col justify-end h-full">
                <SearchBar />
            </div>
        </section>
    );
}

export default Banner;
