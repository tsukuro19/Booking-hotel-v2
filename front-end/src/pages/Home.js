
import Footer from '../components/Footer'; // Đi lên 1 cấp từ pages
import Header from '../components/Header'; // Đi lên 1 cấp từ pages
import Banner from '../components/Banner'; // Đi lên 1 cấp từ pages
import { ToastContainer } from 'react-toastify';

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default Home;
