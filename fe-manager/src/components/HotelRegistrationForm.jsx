import React, { useState } from 'react';
import { createHotel } from '../services/apiServices';
import Cookies from 'js-cookie';

const HotelRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name_hotel: '',
    address: '',
    city: '',
    country: '',
    phone_number: '',
    room_quantity: '',
    description:'',
    imageUrls: [],
  });

  // Get managerId from cookies
  const managerId = Cookies.get('managerId');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData.imageUrls);
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    const readers = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });
  
    Promise.all(readers)
      .then((urls) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          imageUrls: urls,
        }));
      })
      .catch((error) => console.error('Error loading images:', error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert room_quantity to an integer before submitting
    const updatedFormData = {
      ...formData,
      room_quantity: parseInt(formData.room_quantity, 10), // Convert room_quantity to integer
    };

    const formDataToSend = new FormData();

    for (const key in updatedFormData) {
      if (key !== 'imageUrls' && updatedFormData[key]) {
        formDataToSend.append(key, updatedFormData[key]);
      }
    }

    updatedFormData.imageUrls.forEach((image) => {
      formDataToSend.append('imageUrls', image);
    });

    // Logic to handle form submission, e.g., sending data to the backend
    try {
      console.log(managerId);
      const response = await createHotel({ ...updatedFormData, managerId });
      if (response.status === 201) {
        window.location.href = '/list-hotel'; // Redirect to the hotel list page
      }
    } catch (error) {
      console.error('Error creating hotel:', error);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = formData.imageUrls.filter((_, i) => i !== index);
    setFormData({ ...formData, imageUrls: newImages });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Register New Hotel
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Hotel Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hotel Name
            </label>
            <input
              type="text"
              name="name_hotel"
              value={formData.name_hotel}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter hotel name"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter hotel address"
              required
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter city"
              required
            />
          </div>

          {/* Country */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter country"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Room Count */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Rooms
            </label>
            <input
              type="number"
              name="room_quantity"
              value={formData.room_quantity}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter number of rooms"
              required
            />
          </div>

          {/* Desscription */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Description"
              required
            />
          </div>


          {/* Image Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Hotel Images (Max 6)
            </label>
            <input
              type="file"
              name="imageUrls"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              multiple
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Register Hotel
          </button>
        </form>
      </div>
    </div>
  );
};

export default HotelRegistrationForm;
