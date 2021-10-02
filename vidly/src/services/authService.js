import jwtDecode from 'jwt-decode';
import http from './httpService';

const apiEndPoint =  '/auth'
const tokenKey = 'token';

http.setJwt(getJwt());

export async function login(email, password) {
    const {data: token} = await http.post(apiEndPoint, { email, password });
    localStorage.setItem(tokenKey, token);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser(){
    try {
        const token = localStorage.getItem(tokenKey
);
        return jwtDecode(token);
    } 
    catch (error) {
        return null;  
    }
}

export function loginWithJwt (token){
    localStorage.setItem(tokenKey, token);
}

export function getJwt(){
    return localStorage.getItem(tokenKey);
}

export default {login, logout, getCurrentUser, loginWithJwt, getJwt};


