import axios from 'axios';
import instance from '../utils/axiosCustomize';


export const postLogin = (userEmail, userPassword) => {
    console.log(process.env.REACT_APP_BACK_END_URL);
    return axios.post(`${process.env.REACT_APP_BACK_END_URL}/client/auth/login`, {
        email: userEmail,
        password: userPassword,
    });
}

