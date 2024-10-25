import React from 'react';

//filters: đối tượng lọc
//selectedFilters: các giá trị của tùy chọn được chọn
//onSelectFilter: cập nhật trạng thái mỗi khi lọc
//map: lặp qua mảng và tạo ra mảng mới. thường dùng để tạo ra danh sách
//includes: kiểm tra xem có tồn tại trong mảng
//onChange: thực hiện hành động khi dữ liệu bị thay đổi
const Filter = ({ filters, selectedFilters, onSelectFilter }) => {
    return (
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg">
            {/* <h2 className="text-lg font-semibold mb-4">Filter</h2> */}
            {filters.map((filter) => (
                <div key={filter.name} className="mb-4">
                    <h3 className="text-md font-medium">{filter.name}</h3>
                    <div className="space-y-2">
                        {filter.options.map((option) => (
                            <label key={option.value} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={option.value}
                                    value={option.value}
                                    checked={selectedFilters.includes(option.value)}
                                    onChange={() => onSelectFilter({ type: filter.name.toLowerCase(), value: option.value })}
                                    className="mr-2"
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Filter;
