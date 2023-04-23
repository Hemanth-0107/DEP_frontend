import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserServices {
    async UpdateUser(user){
        return axios
        .put(API_URL+'user/:id',{
            fname:user.fname,
            lname:user.lname,
            email:user.email,
            password:user.password,
            profilePic:user.profilePic,
        },{headers: authHeader()})
    }
    async giveReview(user){
        console.log(user);
        return axios
        .post(API_URL+'give-rating', {
            service: user.service,
            rating: user.rating,
            description: user.description,
            file: user.file
        });
    }

    getNews(){
        return axios.get(API_URL+'news',{headers: authHeader()})
    }
    getUserBoard(){
        return axios.get(API_URL + 'user',{headers: authHeader()})
    }
    getModeratorBoard(){
        return axios.get(API_URL +'mod',{headers: authHeader()})
    }
    getAdminBoard(){
        return axios.get(API_URL + 'admin',{headers: authHeader()})
    }
    getTableData(){
        return axios.get(API_URL + 'data',{headers: authHeader()})
    }
}
const UserService = new UserServices();
export default UserService;