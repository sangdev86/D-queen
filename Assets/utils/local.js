import { getCookie, setCookies } from 'cookies-next';
import Cookies from 'js-cookie';

export const LOCAL = {
  // setAccessToken: (data) => Cookies.set('accessToken', data),
  // getAccessToken: () => Cookies.get('accessToken'),
  // setRefreshToken: (data) => Cookies.set('refreshToken', data),
  // getRefreshToken: () => Cookies.get('refreshToken'),
  // removeUser: () => {
  //   Cookies.remove('accessToken');
  //   Cookies.remove('refreshToken');
  // }
  // setToken: (data) => Cookies.set('token', data),

  // getToken: () => Cookies.get('token'),

  // removeToken: () => Cookies.remove('token'),
  // setUser: (data) => {
  //   if (typeof window === 'undefined') return;
  //   return localStorage.setItem('user', data);
  // },
  // getUser: () => {
  //   if (typeof window === 'undefined') return;
  //   localStorage.getItem('user');
  // }
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

export const checkLogin = () => {
  return LOCAL.getToken() && LOCAL.getUser() ? true : false;
};
export const userLogin = () => {
  return LOCAL.getToken() && LOCAL.getUser() ? LOCAL.getUser() : null;
};
