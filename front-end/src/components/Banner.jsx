import React from 'react';
import SearchBar from './SearchBar';
import bannerImage from '../assets/banner/banner1.jpg';

const Banner = () => {
    return (
<<<<<<< HEAD
        <section className="relative bg-blue-500 text-white py-12 z-10">
=======
        <section className="relative w-full h-[22rem] bg-blue-500 text-white">
>>>>>>> 69564b56d6d4995942e55bd8b5f0582e688e62fe
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

export default Banner;
