// import React from 'react';

// const Types = ({ types, selectedType, onSelectType }) => {
//     return (
//         <div className="mb-4">
//             <div className="flex flex-row space-x-4">
//                 {types.map((type) => (
//                     <div key={type.value} className="relative flex items-center cursor-pointer">
//                         <input
//                             type="radio"
//                             id={type.value}
//                             name="type"
//                             value={type.value}
//                             checked={selectedType === type.value}
//                             onChange={() => onSelectType(type.value)}
//                             className="absolute opacity-0 w-0 h-0"
//                         />
//                         <label htmlFor={type.value} className="flex items-center space-x-2">
//                             <span className="w-4 h-4 bg-white inline-block mr-2" />
//                             {type.label}
//                         </label>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Types;

import React from 'react';

const Types = ({ types, selectedType, onSelectType }) => {
    return (
        <div className="mb-4">
            <div className="flex flex-row items-center space-x-4">
                {types.map((type, index) => (
                    <React.Fragment key={type.value}>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
                                onSelectType(type.value);
                            }}
                            className={`cursor-pointer inline-block px-4 py-2 rounded-md ${selectedType === type.value ? 'bg-gray-200' : 'bg-white'
                                } hover:underline`}
                        >
                            {type.label}
                        </a>
                        {/* Chèn dấu chấm nhỏ, nhưng không hiển thị sau phần tử cuối cùng */}
                        {index < types.length - 1 && (
                            <span className="text-gray-500">•</span>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Types;
