import axios from 'axios';


export const postLogin = (userEmail, userPassword) => {
    return axios.post(`${process.env.REACT_APP_BACK_END_URL}/client/auth/login`, {
        email: userEmail,
        password: userPassword,
    });
}

export const postRegister = (userEmail, userPassword,userRetypePassword) => {
    return axios.post(`${process.env.REACT_APP_BACK_END_URL}/client/auth/register`, {
        email: userEmail,
        password: userPassword,
        retype_password:userRetypePassword,
        username:"",
        first_name:"",
        last_name:"",
        phone_number:""
    });
}


export const validateToken = (token) => {
    // Gửi token trong header Authorization (Bearer token) thay vì body
    return axios.get(`${process.env.REACT_APP_BACK_END_URL}/client/validate-token`, {
        headers: {
            authorization: `Bearer ${token}`,  // Đảm bảo token được gửi trong header
        }
    });
}

export const getProfileById=(userId)=>{
    return axios.get(`${process.env.REACT_APP_BACK_END_URL}/client/customer-client/${userId}`);
}

export const updateProfileById=(userId,updatedData)=>{
    return axios.put(`${process.env.REACT_APP_BACK_END_URL}/client/customer-client/${userId}`,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData)
    });
}


export const getListHotel=async ()=>{
    const response=await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/hotel`);
    return response.data;
}

export const getListHotelWithFeature=async ()=>{
    const response=await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/hotel/feature`);
    return response.data;
}

export const getHotelDetailFull=async (hotelId)=>{
    const response=await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/hotel/hotel-details/${hotelId}`);
    return response;
}


export const getRoomClassBedTypeByHotelId=async (hotelId)=>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/room-class-bed-type/hotel/${hotelId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching room class bed types:", error);
    }
}

export const getRoomClassWithFeaturesByHotelId=async (hotelId) =>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/room-class-feature/${hotelId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching room classes with features:", error);
    }
}

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

export const createPaymentIntent = async (totalPrice) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACK_END_URL}/stripe/create-payment-intent`, {
            body:{
                amount: totalPrice,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching rooms with floor details:", error);
    }
};

export const createBooking = async (bookingData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACK_END_URL}/manager/booking`, bookingData);
        return response.data;
    } catch (error) {
        console.error("Error fetching rooms with floor details:", error);
    }
};

export const getListBookingByUserId=async (userId)=>{
    try{
        const response=await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/booking/customer/${userId}`);
        return response.data;
    }catch(error){
        console.error("Error fetching rooms with floor details:", error);
    }
}

export const getListMessage = async (customerId) => {
    const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/messages/list/managers/${customerId}`);
    return response.data;
  };

  export const getContentMessage = async (managerId,customerId) => {
    const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/messages/content/${managerId}/${customerId}`);
    return response.data;
  };

  export const createReview = async (commentData) => {
    const response = await axios.post(`${process.env.REACT_APP_BACK_END_URL}/manager/review`, commentData);
    return response.data;
  };

  export const updateReview = async (reviewId,commentData) => {
    const response = await axios.put(`${process.env.REACT_APP_BACK_END_URL}/manager/review/${reviewId}`, commentData);
    return response.data;
  };

  export const deleteReview = async (reviewId) => {
    const response = await axios.delete(`${process.env.REACT_APP_BACK_END_URL}/manager/review/${reviewId}`);
    return response.data;
  };

  export const getReviewHotel = async (hotelId) => {
    const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/manager/review/hotel/${hotelId}`);
    return response.data;
  };