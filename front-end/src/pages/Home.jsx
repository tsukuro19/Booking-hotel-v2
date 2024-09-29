
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner';
import HotelList from '../components/HotelList';
import HotelBooked from '../components/HotelBooked.jsx';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <HotelList />
            <HotelBooked />
            {/* <div className="bg-gray-100 min-h-screen">
                
            </div>
            <div className="bg-gray-100 min-h-screen">
                
            </div> */}
            <Footer />

        </>
    );
}

export default Home;
