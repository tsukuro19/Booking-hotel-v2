//useState: là 1 hook dùng để khai báo trạng thái trong component
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Search from '../pages/Search'

const HotelPageList = () => {
    return (
        <>
            <Header />
            <div className="py-32">
                <Search />
            </div>
            <Footer />
        </>
    );
}

export default HotelPageList;
