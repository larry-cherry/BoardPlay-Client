// URL and endpoint constants
import APIURL from '../main';

// TODO: Implement register, logout, and checking auth

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false,
  },
  // Send a request to the login URL and return a promise with the body
  login(credentials) {
    return new Promise((resolve, reject) => {
      const init = {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(`${APIURL}/users/login/`, init)
        .then((res) => {
          if (res.status === 200) {
            // Success
            return res.json();
          }
          return reject('Invalid username/password');
        }, reject)
        .then((body) => {
          resolve(body);
        }, reject);
    });
  },
  register(credentials) {
    return new Promise((resolve, reject) => {
      // do something
      const init = {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(`${APIURL}/users`, init).then((res) => {
        if (res.status === 200) {
          // Success
          return res.json();
        }
        // Failed
        return reject(res.json());
      }, reject).then((body) => {
        resolve(body);
      });
    });
  },
  // To log out, we just need to remove the token (NO)
  logout() {
    const accessToken = localStorage.getItem('accessToken');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    const init = {
      method: 'POST',
      body: JSON.stringify(accessToken),
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`${APIURL}/users/logout`, init);
    this.user.authenticated = false;
  },
  checkAuth() {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.user.authenticated = true;
    } else {
      this.user.authenticated = false;
    }
    return this.user.authenticated;
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    };
  },
};
