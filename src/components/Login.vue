<template>
  <div id="login" class="container">
    <h1>Login</h1>
    <div v-if="error" class="error">
      {{error}}
    </div>
    <form v-on:submit="login">
      <div class="form-group username">
        <label for="username">Username</label>
        <input v-model="username"  class="inp" name="username" type="text" placeholder= "Enter your username"/>
      </div>
      <div v-if="registering" class="form-group email">
        <label for="email">Email</label>
        <input v-model="email" v-bind:class="{ invalid: checkInvalidEmail() }" class="inp" name="email" type="email" placeholder= "Enter your email"/>
      </div>
      <div class="form-group password">
        <label for="password">Password</label>
        <input v-model="password" v-bind:class="{ invalid: checkPasswordSame() }" class="inp" name="password" type="password" placeholder="Enter your password" />
      </div>
      <div v-if="registering" class="form-group confirmpassword">
        <label for="password">Confirm Password</label>
        <input v-model="confirmpassword" v-bind:class="{ invalid: checkPasswordSame() }" class="inp" name="confirmpassword" type="password" placeholder="Re-enter your password" />
      </div>
      <button v-if="!registering" class="btn-submit" type="submit">Login</button>
      <button class="btn-submit" v-on:click="register">Register</button>
    </form>
    <div v-if="loading" class="loading">
      <i class="fa fa-spinner fa-spin fa-5x fa-fw"></i>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

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
      confirmpassword: '',
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      const loginData = new FormData();
      loginData.append('username', this.username);
      loginData.append('password', this.password);
      const init = {
        method: 'POST',
        body: loginData,
      };
      this.loading = true;
      $('div#app *:not(.loading)').css('opacity', '.4');
      fetch('/users/login/', init).then((f) => {
        if (f.code === 200) {
          // Success
          localStorage.set('loginToken', '');
          this.$router.push('Games');
        } else {
          // Failed
          this.error = 'Invalid username/password';
          $('div#app *:not(.loading)').css('opacity', '1');
          this.loading = false;
        }
      }, () => {
        this.error = 'Error processing login';
      });
    },
    register(e) {
      e.preventDefault();
      this.registering = true;
      // $('')
    },
    checkInvalidEmail() {
      return !this.email.match(/^[a-zA-Z0-9.+_-]+@[a-zA-Z]+\.[a-zA-Z]+$/) &&
          this.email;
    },
    checkPasswordSame() {
      return (this.confirmpassword !== this.password) && this.password;
    },
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
.inp {
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
.inp::placeholder {
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
</style>
