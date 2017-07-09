// URL and endpoint constants
import APIURL from '../main';

// TODO: Implement register, logout, and checking auth

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false,
  },

  // Send a request to the login URL and return a promise with the body
  login(credentials, loadingcallback) {
    return new Promise((resolve, reject) => {
      const init = {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { 'Content-Type': 'application/json' },
      };
      loadingcallback();
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

  // signup(context, creds, redirect) {
  //   context.$http.post(SIGNUP_URL, creds, (data) => {
  //     localStorage.setItem('id_token', data.id_token);
  //     localStorage.setItem('access_token', data.access_token);
  //     this.user.authenticated = true;
  //     if (redirect) {
  //       router.go(redirect);
  //     }
  //   }).error((err) => {
  //     context.error = err;
  //   })
  // },

  // To log out, we just need to remove the token
  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('access_token');
    this.user.authenticated = false;
  },

  checkAuth() {
    const jwt = localStorage.getItem('id_token');
    if (jwt) {
      this.user.authenticated = true;
    } else {
      this.user.authenticated = false;
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    };
  },
};
