import { getCookie, setCookies } from 'cookies-next';
import Cookies from 'js-cookie';

export const LOCAL = {
  setToken: (data) => setCookies('token', JSON.stringify(data)),
  getToken: () => {
    const token = getCookie('token');
    if (token) {
      try {
        return JSON.parse(token);
      } catch (err) {
        console.log(err);
      }
    }
    return null;
  },
  removeToken: () => Cookies.remove('token'),
  setUser: (data) => {
    return setCookies('user', JSON.stringify(data));
    // if (typeof window === 'undefined') return;
    // return localStorage.setItem('user', JSON.stringify(data));
  },
  getUser: () => {
    const user = getCookie('user');
    if (user) {
      try {
        return JSON.parse(user);
      } catch (err) {
        console.log(err);
      }
    }
    return null;
    // if (typeof window === 'undefined') return;
    // localStorage.getItem('user');
  },
  logout: () => {
    Cookies.remove('token');
    Cookies.remove('user');
  }
};
export const setAddressVN = (data) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('addressVN', JSON.stringify(data));
};

export const getAddressVN = () => {
  if (typeof window === 'undefined') return;
  const address = localStorage.getItem('addressVN');
  if (address) {
    try {
      return JSON.parse(address);
    } catch (err) {
      console.log(err);
    }
  }
  return null;
};

export const checkLogin = () => {
  return LOCAL.getToken() && LOCAL.getUser() ? true : false;
};
export const userLogin = () => {
  return LOCAL.getToken() && LOCAL.getUser() ? LOCAL.getUser() : null;
};
