import Footer from '../components/Footer';
import Header from '../components/Header';
import ImagesSection from '../form/ImagesSection';
import DetailsSection from '../form/DetailsSection';
// import ReviewRating from '../form/ReviewRating';
// import NearbyServices from '../form/NearbyServices ';
import Comments from "../components/Comments";

const HotelDetailsList = () => {
    const comments = [
        {
            rating: 4,
            review: "Great hotel with excellent service.",
            date: "2023-09-21"
        },
        {
            rating: 5,
            review: "Absolutely loved the experience!",
            date: "2023-09-15"
        },
        {
            rating: 3,
            review: "Good stay but a bit noisy at night.",
            date: "2023-09-10"
        }
    ];

    return (
        <>
            <Header />
            <div className="py-32">
                <ImagesSection />
                <DetailsSection />
                {/* <NearbyServices /> */}
                {/* <ReviewRating /> */}
                <Comments comments={comments} />
            </div>
            <Footer />
        </>
    );
}

export default HotelDetailsList;
