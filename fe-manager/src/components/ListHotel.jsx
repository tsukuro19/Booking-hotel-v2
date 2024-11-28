import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEdit, FiTrash2, FiPlusCircle } from 'react-icons/fi';
import { deleteHotel, getHotels } from '../services/apiServices';

const HotelManagement = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch hotels data from API
    const fetchHotels = async () => {
      try {
        const response = await getHotels(); // Replace with your API endpoint
        setHotels(response);
      } catch (error) {
        console.error('Error fetching hotels', error);
      }
    };

    fetchHotels();
  }, []);

  const handleDelete = async (id, name) => {
    try {
      await deleteHotel(name); // Replace with your delete endpoint
      setHotels(hotels.filter(hotel => hotel.id !== id)); // Remove deleted hotel from the list
    } catch (error) {
      console.error('Error deleting hotel', error);
    }
  };

  const handleEdit = (name) => {
    navigate(`/edit-hotel/${name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
        {/* Header with Create Button */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-700">List Hotels</h2>
          <Link
            to="/register-hotel"
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
          >
            <FiPlusCircle size={20} className="mr-2" />
            Create Hotel
          </Link>
        </div>

        {/* Check if the hotel list is empty */}
        {hotels.length === 0 ? (
          <div className="text-center text-gray-500 text-xl py-16">
            No hotels available.
          </div>
        ) : (
          /* Hotel List */
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="flex border-b border-gray-200 p-4 hover:bg-gray-100 transition-colors">
                {/* Hotel Image */}
                <div className="flex-shrink-0">
                  <img
                    src={hotel.imageUrls[0]}
                    alt={hotel.name}
                    className="w-32 h-32 object-cover rounded-lg mr-4"
                  />
                </div>
                {/* Hotel Details */}
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700">{hotel.name_hotel}</h3>
                    <p className="text-gray-500">{hotel.address}</p>
                    <p className="text-gray-500">Phone: {hotel.phone_number}</p>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex space-x-4 mt-4">
                    <button
                      onClick={() => handleEdit(hotel.name_hotel)}
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      <FiEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(hotel.id, hotel.name_hotel)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelManagement;
