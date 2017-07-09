<template>
  <div id="login" class="container">
    <h1 v-bind:class="{ load: loading }">Login</h1>
    <div v-bind:class="{ load: loading }" v-if="error" class="error">
      {{error}}
    </div>
    <form v-bind:class="{ load: loading }" v-on:submit="login">
      <div class="form-group username">
        <label for="username">Username</label>
        <input v-model="username" name="username" type="text" placeholder= "Enter your username"/>
      </div>
      <div v-if="registering" class="form-group email">
        <label for="email">Email</label>
        <input v-model="email" v-bind:class="{ invalid: checkInvalidEmail() }" name="email" type="email" placeholder= "Enter your email"/>
      </div>
      <div class="form-group password">
        <label for="password">Password</label>
        <input v-model="password" v-bind:class="{ invalid: checkPasswordNotSame() }" name="password" type="password" placeholder="Enter your password" />
      </div>
      <div v-if="registering" class="form-group confirmpassword">
        <label for="password">Confirm Password</label>
        <input v-model="cpassword" v-bind:class="{ invalid: checkPasswordNotSame() }" name="confirmpassword" type="password" placeholder="Re-enter your password" />
      </div>
      <button class="btn-submit" v-if="!registering" type="submit">Login</button>
      <button class="btn-submit" v-on:click="register">Register</button>
    </form>
    <div v-if="loading" class="loading">
      <i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
import auth from '../auth';

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      error: '',
      loading: false,
      registering: false,
      email: '',
      cpassword: '',
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      const credentials = {
        username: this.username,
        password: this.password,
      };
      this.loading = true;
      auth.login(credentials)
        .then((body) => {
          localStorage.setItem('accessToken', body.id);
          localStorage.setItem('userId', body.userId);
          this.$router.push('/games');
        }, (err) => {
          this.error = err;
          this.loading = false;
        });
    },
    register(e) {
      e.preventDefault();
      if (this.registering) {
        // do something
        const credentials = {
          username: this.username,
          password: this.password,
          email: this.email,
        };
        this.loading = true;
        auth.register(credentials)
          .then(() => {
            auth.login(credentials)
              .then((body) => {
                localStorage.setItem('accessToken', body.id);
                localStorage.setItem('userId', body.userId);
                this.$router.push('/games');
              }, (err) => {
                this.error = err;
                this.loading = false;
              });
          }, (err) => {
            this.error = err.error.message;
            this.loading = false;
          });
      } else {
        this.registering = true;
      }
    },
    checkInvalidEmail() {
      return !this.email.match(/^[a-zA-Z0-9.+_-]+@[a-zA-Z]+\.[a-zA-Z]+$/) &&
          this.email;
    },
    checkPasswordNotSame() {
      return (this.cpassword !== this.password) && this.cpassword && this.password;
    },
  },
  beforeRouteEnter(to, from, next) {
    // Check auth here
    if (auth.checkAuth()) {
      console.log('authed');
      next('/games');
    } else {
      console.log('not authed');
      next();
    }
  },
};
</script>

<style scoped>
div#login form {
  display: inline-flex;
  flex-direction: column;
  margin: auto;
  position: relative;
}
div#login h1 {
  padding-bottom: .2em;
  font-size: 4em;
}
div#login form {
  font-size: 2em;
}
div.form-group label {
  display: block;
  padding-bottom: 5px;
  font-size: 35px;
}
div.form-group input {
  border: 2px solid black;
  margin: auto;
  width: 100%;
  padding: 0px;
  text-align: center;
  height: 65px;
  font-size: 40px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
div.form-group input::placeholder {
  text-indent: 1em;
  font-size: 14pt;
  text-align: center;
}
.center {
  margin: auto;
  width: 50%;
  padding: 10px;
  height: 50%;
  display:block;
}
.btn-submit {
  border: 2px solid black;
  padding: 5px;
  margin-top: 10px;
  background-color: #4CAF50;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
div.error {
  color: red;
  font-size: 2em;
}
div.loading {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
* :focus {
  outline: none;
  box-shadow: 0 0 3pt 2pt lightblue;
}
input.invalid {
  box-shadow: 0 0 3pt 2pt red;
}
.load {
  opacity: .3;
}
</style>
