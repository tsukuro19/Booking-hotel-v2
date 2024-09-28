//useState: là 1 hook dùng để khai báo trạng thái trong component
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HotelList from '../components/HotelList';
import Types from '../components/Types/Types';
import PriceFilter from '../components/Filter/PriceFilter';
import Filter from '../components/Filter/Filter';
import DropdownFilter from '../components/Filter/DropdownFilter';

// Các loại mẫu (Types)
const types = [
    { value: 'hotel', label: 'Hotel' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'house', label: 'House' },
    { value: 'villa', label: 'Villa' },
    { value: 'homestay', label: 'Homestay' },
];

// Các filter mẫu (sẽ có thêm PriceFilter)
const filters = [
    {
        name: 'Rating',
        options: [
            { value: '1', label: '1 Star' },
            { value: '2', label: '2 Stars' },
            { value: '3', label: '3 Stars' },
            { value: '4', label: '4 Stars' },
            { value: '5', label: '5 Stars' },
        ],
    },
];

const HotelPageList = () => {
    //setSelectedType: hàm dùng để thay đổi giá trị của selectedType. Mỗi khi hàm đc gọi sẽ cập nhật lại giá trị của selectedType cho setSelectedType
    const [selectedType, setSelectedType] = useState('');
    const [selectedFilters, setSelectedFilters] = useState([]);
    //Khai báo trạng thái minPrice với giá trị khởi tạo là chuỗi rỗng. setMinPrice là hàm dùng để cập nhật giá trị của minPrice.
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [isFilterVisible, setIsFilterVisible] = useState(false); // Trạng thái hiển thị bộ lọc

    // Hàm xử lý khi nhấn nút Filter
    const toggleFilterVisibility = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    //handleTypeChange: xử lý sự thay đổi của type và cập nhật giá trị của type
    const handleTypeChange = (type) => setSelectedType(type);

    //prev: là selectedFilters (lưu trữ các giá trị đã được chọn từ trước)
    const handleFilterChange = (filter) => {
        setSelectedFilters((prev) => {
            //==: So sánh giá trị, bỏ qua kiểu dữ liệu.
            //===: So sánh cả giá trị và kiểu dữ liệu (so sánh chặt chẽ).
            //ví dụ: 5 == '5';  // true
            //       5 === '5'; // false
            if (filter.type === 'price') {
                // Xử lý bộ lọc giá
                return prev.filter(f => f.type !== 'price').concat(filter);
            } else {
                // Xử lý bộ lọc khác
                // True: giữ lại tất cả các bộ lọc khác và loại bỏ giá trị hiện tại (filter.value)
                // False: tạo bản sao của prev, nối thêm giá trị của bộ lọc hiện tại (filter.value) vào danh sách bản sao
                return prev.includes(filter.value) ? prev.filter(f => f !== filter.value) : [...prev, filter.value];
            }
        });
    };

    //hàm sẽ đc gọi khi bị thay đổi giá trị min, max
    const handlePriceChange = (min, max) => {
        setMinPrice(min);
        setMaxPrice(max);
        //xử lý và cập nhật lại
        handleFilterChange({ type: 'price', min, max });
    };

    return (
        <>
            <Header />
            <main className="container mx-auto p-6">
                <div className="flex items-center justify-between mb-4">
                    <Types types={types} selectedType={selectedType} onSelectType={handleTypeChange} />
                    <button
                        onClick={toggleFilterVisibility}
                        className="bg-white text-black font-bold px-6 py-2 rounded-full border border-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75 ml-auto"
                    >
                        {isFilterVisible ? 'Filters' : 'Filters'}
                    </button>
                </div>

                {isFilterVisible && (
                    <div className="mt-4 flex flex-col items-end"> {/* Sử dụng items-end để căn phải */}
                        {/* Use DropdownFilter for each filter */}
                        <DropdownFilter title="Price">
                            <PriceFilter
                                minPrice={minPrice}
                                maxPrice={maxPrice}
                                onPriceChange={handlePriceChange}
                            />
                        </DropdownFilter>

                        <DropdownFilter title="Rating">
                            <Filter
                                filters={filters}
                                selectedFilters={selectedFilters}
                                onSelectFilter={handleFilterChange}
                            />
                        </DropdownFilter>
                    </div>
                )}
            </main>
            {/* <div className="bg-gray-100 min-h-screen">
                
            </div> */}
            <HotelList />
            <Footer />
        </>
    );
}

export default HotelPageList;
