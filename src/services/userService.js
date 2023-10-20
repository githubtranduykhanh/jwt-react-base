import axios from 'axios';


export const registerNewUser = async (username, email, phone, password) =>{
    return (await axios.post('http://localhost:8080/api/v1/register',{ username, email, phone, password })).data;
}


export const loginUser = async (emailPhone, password) =>{
    return (await axios.post('http://localhost:8080/api/v1/login',{ emailPhone, password })).data;
}


export const listTableUser = async () => {
    return (await axios.get('http://localhost:8080/api/v1/user')).data;
}