import Footer from '../components/Footer';
import Header from '../components/Header';
import ImagesSection from '../form/ImagesSection';
import DetailsSection from '../form/DetailsSection';
import ReviewRating from '../form/ReviewRating';
import NearbyServices from '../form/NearbyServices ';

const HotelDetailsList = () => {
    return (
        <>
            <Header />
            <ImagesSection />
            <DetailsSection />
            <NearbyServices />
            <ReviewRating />
            <Footer />
        </>
    );
}

export default HotelDetailsList;
