import React from 'react';
import SearchBar from './SearchBar';
import bannerImage from '../assets/banner/banner1.jpg';

const Banner = () => {
    return (

        <section className="relative w-full h-[22rem] bg-blue-500 text-white z-10">

            <div className="absolute inset-0">
                <img
                    src={bannerImage}
                    alt="Banner"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative flex flex-col justify-end h-full">
                <SearchBar />
            </div>
        </section>
    );
}

export default Banner
