import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner';
import HotelList from '../components/HotelList';
// import HotelBooked from '../components/HotelBooked'; Không sử dụng nữa
import PopularDestinations from '../components/PopularDestinations';
import BannerPoster from '../components/BannerPoster';
import FavoriteDestinations from '../components/FavoriteDestinations';
import AccommodationType from '../components/Types/AccommodationType';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <HotelList />
            {/* <HotelBooked /> */}
            <PopularDestinations />
            <Footer />
        </>
    );
}

export default Home;
