import axios from 'axios';


export const registerNewUser = async (username, email, phone, password) =>{
    return (await axios.post('http://localhost:8080/api/v1/register',{ username, email, phone, password })).data;
}


export const loginUser = async (emailPhone, password) =>{
    return (await axios.post('http://localhost:8080/api/v1/login',{ emailPhone, password })).data;
}


export const listTableUser = async () => {
    return (await axios.get('http://localhost:8080/api/v1/user/read')).data;
}

export const listTableUserPageLimit = async (page,limit) => {
    return (await axios.get(`http://localhost:8080/api/v1/user/read?page=${page}&limit=${limit}`)).data;
}


export const deteteUser = async (id) => {
    return (await axios.delete('http://localhost:8080/api/v1/user/delete',{ data:{ id } })).data;
}