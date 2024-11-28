import axios from 'axios';

// Validate token
export const validateToken = (token) => {
    return axios.get(`${process.env.REACT_APP_BACK_END_URL}/client/validate-token`, {
        headers: {
            authorization: `Bearer ${token}`,
        }
    });
}

// Register manager
export const registerManager = (data) => {
    return axios.post(`${process.env.REACT_APP_BACK_END_URL}/manager/auth/register`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    });
}

// Login manager
export const loginManager = (data) => {
    return axios.post(`${process.env.REACT_APP_BACK_END_URL}/manager/auth/login`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    });
}

// Create a new hotel
export const createHotel = async (dataHotel, managerId) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACK_END_URL}/manager/hotel`,
            dataHotel,
            {
                params: { managerId },
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        if (response.status === 201) {
            window.location.href = '/list-hotel';
        }
    } catch (error) {
        console.error("Error creating hotel:", error);
    }
};

// Get list of hotels
export const getHotels = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/hotel`);
        return response.data;
    } catch (error) {
        console.error("Error fetching hotels:", error);
    }
};

// Get hotel details by name
export const getHotelDetails = async (hotelName) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/hotel/${hotelName}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching hotel details:", error);
    }
};

export const getHotelDetailsById = async (hotelId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/hotel/id/${hotelId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching hotel details:", error);
    }
};

// Update hotel by name
export const updateHotel = async (hotelName, updatedData) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_BACK_END_URL}/manager/hotel/${hotelName}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating hotel:", error);
    }
};

// Delete hotel by name
export const deleteHotel = async (hotelName) => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_BACK_END_URL}/manager/hotel/${hotelName}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting hotel:", error);
    }
};


// Get list of rooms by hotel ID
export const getRoomsByHotel = async (hotelId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/room`, {
            params: { hotelId },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching rooms by hotel:", error);
    }
};

// Get room details by room number
export const getRoomByNumber = async (roomNumber) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/room/${roomNumber}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching room details:", error);
    }
};

// Update room details by room number
export const updateRoom = async (roomNumber, data) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_BACK_END_URL}/manager/room/${roomNumber}`, data);
        return response.data;
    } catch (error) {
        console.error("Error updating room:", error);
    }
};



// Get list of rooms with room class
export const getRoomsWithRoomClass = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/room/with-room-class`);
        return response.data;
    } catch (error) {
        console.error("Error fetching rooms with room class:", error);
    }
};

// Get list of rooms with floor information
export const getRoomsWithFloor = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/room/with-floor`);
        return response.data;
    } catch (error) {
        console.error("Error fetching rooms with floor details:", error);
    }
};

export const getFeaturesByHotelId = async (hotelId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/feature`, {
            params: { hotelId },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching rooms with floor details:", error);
    }
};

export const createFeature = async (featureData) => {
    console.log(featureData);
    const response = await axios.post(
        `${process.env.REACT_APP_BACK_END_URL}/manager/feature`,
        featureData,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    if (response.data.statusCode !== 201) {
        throw new Error("Failed to create feature");
    }

    return response.data;
};

export const updateFeature = async (featureId, featureData) => {
    console.log(featureData);
    const response = await axios.put(
        `${process.env.REACT_APP_BACK_END_URL}/manager/feature/${featureId}`,
        featureData,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    console.log(response);
    if (response.data.statusCode !== 200) {
        throw new Error("Failed to create feature");
    }

    return response.data;
};

export const deleteFeature = async (featureId) => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_BACK_END_URL}/manager/feature/${featureId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting room:", error);
    }
};

export const createRoomClass = async (featureData) => {
    const response = await axios.post(
        `${process.env.REACT_APP_BACK_END_URL}/manager/room-class`,
        featureData,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    if (response.data.statusCode !== 201) {
        throw new Error("Failed to create feature");
    }

    return response.data;
};

export const getRoomClassByHotelId = async (hotelId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/room-class`, {
            params: { hotelId },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching rooms with floor details:", error);
    }
};

export const updateRoomClass = async (roomClassId, roomClassData) => {
    console.log(roomClassData);
    const response = await axios.put(
        `${process.env.REACT_APP_BACK_END_URL}/manager/room-class/${roomClassId}`,
        roomClassData,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    console.log(response);
    if (response.data.statusCode !== 200) {
        throw new Error("Failed to create feature");
    }

    return response.data;
};

export const deleteRoomClass = async (roomClassId) => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_BACK_END_URL}/manager/room-class/${roomClassId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting room:", error);
    }
};

export const getRoomClassByName = async (roomClassName) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/room-class/name-class/${roomClassName}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching rooms with floor details:", error);
    }
};

export const getBedTypesByHotelId = async (hotelId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/bed-type`, {
            params: { hotelId },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching rooms with floor details:", error);
    }
};

export const deleteBedType = async (bedTypeId) => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_BACK_END_URL}/manager/bed-type/${bedTypeId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting room:", error);
    }
};

export const createBedType = async (bedTypeData) => {
    const response = await axios.post(
        `${process.env.REACT_APP_BACK_END_URL}/manager/bed-type`,
        bedTypeData,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    if (response.data.statusCode !== 201) {
        throw new Error("Failed to create feature");
    }

    return response.data;
};


export const getBedTypesByName = async (bedTypeName) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/bed-type/${bedTypeName}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching rooms with floor details:", error);
    }
};

export const updateBedType = async (bedTypeId, bedTypeData) => {
    console.log(bedTypeData);
    const response = await axios.put(
        `${process.env.REACT_APP_BACK_END_URL}/manager/bed-type/${bedTypeId}`,
        bedTypeData,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    console.log(response);
    if (response.data.statusCode !== 200) {
        throw new Error("Failed to create feature");
    }
}

export const getFloorByHotelId = async (hotelId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/floor`, {
            params: { hotelId },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching rooms with floor details:", error);
    }
};

export const deleteFloor = async (floorId) => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_BACK_END_URL}/manager/floor/${floorId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting room:", error);
    }
};

export const createFloor = async (floorData) => {
    const response = await axios.post(
        `${process.env.REACT_APP_BACK_END_URL}/manager/floor`,
        floorData,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    console.log(response);
    if (response.status !== 201) {
        throw new Error("Failed to create feature");
    }

    return response.data;
};


export const getFloorById = async (floorId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/floor/${floorId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching rooms with floor details:", error);
    }
};
export const updateFloor = async (floorId, floorData) => {
    const response = await axios.put(
        `${process.env.REACT_APP_BACK_END_URL}/manager/floor/${floorId}`,
        floorData,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    console.log(response);
    if (response.status !== 200) {
        throw new Error("Failed to create feature");
    }
}

export const getFloorsByHotelId = async (hotelId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/floor`, {
            params: { hotelId },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching rooms with floor details:", error);
    }
};  

export const getRoomClassWithFeatures=async (hotelId) =>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/room-class-feature/${hotelId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching room classes with features:", error);
    }
}

export const deleteRoomClassFeature=async (roomClassId)=>{
    try {
        const response = await axios.delete(`${process.env.REACT_APP_BACK_END_URL}/manager/room-class-feature/${roomClassId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting room class feature:", error);
    }
}

export const createRoomClassFeature=async (roomClassFeatureData)=>{
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACK_END_URL}/manager/room-class-feature`,
            roomClassFeatureData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating room class feature:", error);
    }
}

export const getRoomClassFeatureById=async (roomClassFeatureId,hotelId)=>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/room-class-feature/${hotelId}/${roomClassFeatureId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching room class feature:", error);
    }
}

export const updateRoomClassFeature=async (roomClassFeatureId,roomClassFeatureData)=>{
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_BACK_END_URL}/manager/room-class-feature/${roomClassFeatureId}`,
            roomClassFeatureData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error updating room class feature:", error);
    }
}

export const getRoomClassBedTypeByHotelId=async (hotelId)=>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/room-class-bed-type/hotel/${hotelId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching room class bed types:", error);
    }
}

export const getRoomClassBedTypeById=async (roomClassBedTypeId)=>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/room-class-bed-type/${roomClassBedTypeId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching room class bed type:", error);
    }
}

export const deleteRoomClassBedType=async (roomClassBedTypeId)=>{
    try {
        const response = await axios.delete(`${process.env.REACT_APP_BACK_END_URL}/manager/room-class-bed-type/${roomClassBedTypeId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting room class bed type:", error);
    }
}

export const createRoomClassBedType=async (roomClassBedTypeData)=>{
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACK_END_URL}/manager/room-class-bed-type`,
            roomClassBedTypeData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating room class bed type:", error);
    }
}


export const createRoom=async (roomData)=>{
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACK_END_URL}/manager/room`,
            roomData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating room:", error);
    }
}

export const deleteRoom=async (roomNumber)=>{
    try {
        const response = await axios.delete(`${process.env.REACT_APP_BACK_END_URL}/manager/room/${roomNumber}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error deleting room:", error);
    }
}


export const getBooking=async ()=>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/booking`);
        return response.data;
    } catch (error) {
        console.error("Error deleting room:", error);
    }
}

export const updateBooking = async (bookingId, bookingData) => {
    const response = await axios.put(`${process.env.REACT_APP_BACK_END_URL}/manager/booking/${bookingId}`, bookingData);
    return response.data;
  };
  
  export const deleteBooking = async (bookingId) => {
    const response = await axios.delete(`${process.env.REACT_APP_BACK_END_URL}/manager/booking/${bookingId}`);
    return response.data;
  };
  
  export const updateRoomStatus = async (roomNumber, roomData) => {
    const response = await axios.put(`${process.env.REACT_APP_BACK_END_URL}/manager/room/${roomNumber}`, roomData);
    return response.data;
  };

  export const getListMessage = async (managerId) => {
    const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/messages/list/customers/${managerId}`);
    return response.data;
  };

  export const getContentMessage = async (managerId,customerId) => {
    const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/messages/content/${managerId}/${customerId}`);
    return response.data;
  };

