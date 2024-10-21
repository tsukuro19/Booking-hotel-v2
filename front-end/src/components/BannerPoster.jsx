import React from 'react';

const BannerPoster = () => {
    return (
        <section className="relative w-full max-w-[80rem] mx-auto h-[30rem] bg-blue-500 text-white rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0">
                <img
                    src="https://via.placeholder.com/1920x1080"
                    alt="Banner Poster"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
        </section>
    );
}

export default BannerPoster;
