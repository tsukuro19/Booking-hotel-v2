import axios from 'axios';

export const validateToken = (token) => {
    // Gửi token trong header Authorization (Bearer token) thay vì body
    return axios.get(`${process.env.REACT_APP_BACK_END_URL}/client/validate-token`, {
        headers: {
            authorization: `Bearer ${token}`,  // Đảm bảo token được gửi trong header
        }
    });
}


export const registerManager=(data)=>{
    return axios.post(`${process.env.REACT_APP_BACK_END_URL}/manager/auth/register`,data,{
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const loginManager=(data)=>{
    return axios.post(`${process.env.REACT_APP_BACK_END_URL}/manager/auth/login`,data,{
        headers: {
            "Content-Type": "application/json",
        }
    })
}