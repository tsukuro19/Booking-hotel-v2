
import Footer from '../components/Footer'; // Đi lên 1 cấp từ pages
import Header from '../components/Header'; // Đi lên 1 cấp từ pages
import Banner from '../components/Banner'; // Đi lên 1 cấp từ pages

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Footer />
        </>
    );
}

export default Home;
