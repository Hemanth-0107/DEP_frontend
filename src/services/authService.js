import axios from "axios"

const API_URL = 'http://localhost:8080/api/auth/';

class AuthServices{
    async refreshToken(){
        const refreshToken = localStorage.getItem('refreshToken');
        if(!refreshToken) return Promise.reject('No refresh token found');
        return axios
        .post(API_URL+'refreshToken', {refreshToken})
        .then(res=>{
            if (res.data.accessToken && res.data.refreshToken) {
                localStorage.setItem("user", JSON.stringify(res.data));
                localStorage.setItem("refreshToken", res.data.refreshToken);
                return res.data;
              }
            else{
                return Promise.reject('Refresh Token missing data')
            }
        })
        .catch((err) => {
            localStorage.removeItem("user");
            localStorage.removeItem("refreshToken");
            return Promise.reject(err);
          });
    }

    async login(user){
        return axios
        .post(API_URL+'signin', {
            email:user.email,
            password: user.password
        })
        .then( res =>{
            if(res.data.accessToken){
                localStorage.setItem('user',JSON.stringify(res.data));
            }
            else if(res.data.refreshToken){
                localStorage.setItem('refreshToken',res.data.refreshToken);
            }
            return res.data;
        });
        
    }

    logout(){
        localStorage.removeItem('user');
        localStorage.removeItem('refreshToken');
    }

    async register(user){
        return axios
        .post(API_URL+'signup', {
            fname: user.fname,
            lname: user.lname,
            email: user.email,
            password: user.password,
            country: user.country,
            city: user.city,
            state: user.state,
            street: user.street,
            website: user.website,
            about: user.about,
            pincode:user.pincode
        });
    }


     getCurrentUser(){
        const userStr =localStorage.getItem("user");
        if(userStr){
            return JSON.parse(userStr);
        }
        return null;
    }
}
const AuthService = new AuthServices();
export default  AuthService;
