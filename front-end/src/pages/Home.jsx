
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner';
import HotelList from '../components/HotelList';
import HotelBooked from '../components/HotelBooked.jsx';

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <div className="bg-gray-100 min-h-screen">
                <HotelList />
            </div>
            <div className="bg-gray-100 min-h-screen">
                <HotelBooked />
            </div>

            <Footer />
        </>
    );
}

export default Home;
