import axios from 'axios';
import instance from '../utils/axiosCustomize';
const postLogin = (userEmail, userPassword) => {
    return axios.post(`/api/v1/login ,
    {email:userEmail, password:userPassword }`);
}
export { postLogin }