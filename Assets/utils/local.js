import { getCookie, setCookies, removeCookies } from 'cookies-next';

export const LOCAL = {
  setToken: ({ accessToken, refreshToken }) => {
    setCookies('accessToken', JSON.stringify(accessToken));
    setCookies('refreshToken', JSON.stringify(refreshToken));
  },
  getAccessToken: () => {
    const token = getCookie('accessToken');
    if (token) {
      try {
        return JSON.parse(token);
      } catch (err) {
        console.log(err);
      }
    }
    return null;
  },
  getToken: () => {
    const token = getCookie('refreshToken');
    if (token) {
      try {
        return JSON.parse(token);
      } catch (err) {
        console.log(err);
      }
    }
    return null;
  },
  removeToken: () => {
    removeCookies('accessToken');
    removeCookies('refreshToken');
  },
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
    removeCookies('accessToken');
    removeCookies('refreshToken');
    removeCookies('user');
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
