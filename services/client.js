import axios from 'axios';

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
    // console.log('Method: ', method, 'Api', api);
    // console.log('Body', body);
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
      // } else if (body instanceof FormData) {
      //   options.headers['Content-Type'] = 'multipart/form-data';
      // }
      if (this.token) {
        options.headers['Authorization'] = this.token;
      }

      // if (getUser()) {
      //   const { AccessToken, ClientId } = getUser();
      //   options.headers['Client'] = ClientId;
      //   options.headers['X-Auth-Token'] = AccessToken;
      // }

      try {
        const response = await axios(api, options);
        // console.log('RES', response);

        const json = response.data;
        // console.log('Response of', api, json.data);
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
          console.log('response of', api, 'error', err.response.data);
          const response = err.response;
          const json = response.data;
          if (
            json.statusCode === 401 &&
            json.errors &&
            json.errors.token === 5000605
          )
            return {
              ...json,
              code: json.statusCode,
              success:
                response.status >= 200 &&
                response.status < 300 &&
                json.statusCode >= 200 &&
                json.statusCode < 300
            };
        }
        console.log('response of', api, 'error', err);
        throw err;
      }
    } catch (err) {
      console.log('Response error: ', api, err);
      // return { code: -1, errors: err, success: false };
    }
  }
}

const api = new Api('https://dqueen-api.herokuapp.com/api/v1');
export default api;
