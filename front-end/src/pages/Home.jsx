
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner';
import HotelList from '../components/HotelList';
import HotelBooked from '../components/HotelBooked.jsx';
import PopularDestinations from '../components/PopularDestinations.jsx';
import BannerPoster from '../components/BannerPoster.jsx';
import FavoriteDestinations from '../components/FavoriteDestinations.jsx';
import AccommodationType from '../components/Types/AccommodationType.jsx';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <HotelList />
            <HotelBooked />
            <AccommodationType />
            <PopularDestinations />
            <BannerPoster />
            <FavoriteDestinations />
            <Footer />

        </>
    );
}

export default Home;
