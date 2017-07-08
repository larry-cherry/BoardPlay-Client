<template>
  <div id="login">
    <h1>Login</h1>
    <div v-if="error" class="error">
      {{error}}
    </div>
    <form v-on:submit="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="username" name="username" type="text" />
      </div>
      </br>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" name="password" type="password" />
      </div>
      </br>
      <button>Login</button>
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
        if(f.code === 200) {
          // Success
        } else {
          // Failed
          this.error = 'Invalid username/password';
          $('div#app *:not(.loading)').css('opacity', '1');
        }
      }, () => {
        this.error = 'Error processing login';
      });
    },
  },
};
</script>

<style scoped>
div#login form {
  display: inline-flex;
  flex-direction: column;
}
div#login h1 {
  padding-bottom: 2em;
  font-size: 4em;
}
div#login form {
  font-size: 2em;
}
div.form-group label {
  display: block;
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
</style>
