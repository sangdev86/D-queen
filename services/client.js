import axios from 'axios';
import { LOCAL } from '../Assets/utils/local';

class Api {
  needLoginAgainSubscribers = [];

  token;
  host;
  constructor(host) {
    this.host = host;
  }

  setToken(token) {
    this.token = token;
  }

  formatQuery(query) {
    let queryString = '?';
    for (const key in query) {
      if (typeof query[key] !== 'undefined' && query[key] != null) {
        queryString += `${key}=${query[key]}&`;
      }
    }
    return queryString;
  }

  async fetchData(
    api,
    method = 'GET',
    body = {},
    additionalOptions = {}
  ) {
    if (!api.includes(this.host)) {
      api = this.host + api;
    }

    try {
      const options = {
        method,
        headers: {
          Accept: 'application/json'
        },
        data: body,
        ...additionalOptions
      };
      if (typeof body === 'string') {
        options.headers['Content-Type'] = 'application/json';
      }

      if (this.token) {
        options.headers['Authorization'] = this.token;
      }

      if (LOCAL.getAccessToken()) {
        options.headers['Authorization'] =
          'Bearer ' + LOCAL.getAccessToken();
      }
      // console.log('option', options);
      try {
        const response = await axios(api, options);
        // console.log('RES', response);

        const json = response.data;

        if (
          json.status >= 200 &&
          json.status < 300 &&
          json.message === 'success'
        ) {
          return {
            data: json.data,
            code: json.status,
            message: json.message
          };
        }
      } catch (err) {
        if (err.response && err.response.data) {
          const response = err.response;
          const json = await response.data;
          // console.log(json.data);
          if (
            json.status === 401 &&
            json.message &&
            json.message === 'jwt expired'
          ) {
            try {
              const res = await this.fetchData(
                '/user/refresh-token',
                'POST',
                {
                  refreshToken: await LOCAL.getToken()
                }
              );
              console.log('res refresh', res);
              if (
                res &&
                res !== undefined &&
                LOCAL.getToken() &&
                LOCAL.getAccessToken()
              ) {
                const { token } = res.data;
                const { accessToken, refreshToken } = token;
                LOCAL.setToken({ accessToken, refreshToken });
                options.headers['Authorization'] =
                  'Bearer ' + accessToken;
                return await this.fetchData(
                  api,
                  method,
                  body,
                  options
                );
              }
            } catch (error) {
              console.log('error refresh', error);
            }
          }
        }

        throw err;
      }
    } catch (err) {
      console.log(err);
    }
  }
}

const api = new Api('https://dqueen-api.herokuapp.com/api/v1');
export default api;
