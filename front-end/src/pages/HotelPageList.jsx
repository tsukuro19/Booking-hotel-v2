import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HotelListPage from './HotelListOnPage'; // Import HotelList instead of Search
import SearchBar from '../components/SearchBar';

const HotelPageList = () => {
    return (
        <>
            <Header />
            {/* Adding margin-top to ensure SearchBar doesn't overlap the header */}
            <div className="pt-32">
                <SearchBar />
            </div>
            <div className="py-32">
                <HotelListPage /> {/* Using HotelList component here */}
            </div>
            <Footer />
        </>
    );
};

export default HotelPageList;
