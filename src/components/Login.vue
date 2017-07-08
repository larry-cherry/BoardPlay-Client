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

  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },
  methods: {
    login(e) {
      alert(`Logging in with ${this.username} and ${this.password}`);
      e.preventDefault();
      const loginData = new FormData();
      loginData.append('username', this.username);
      loginData.append('password', this.password);
      const init = {
        method: 'POST',
        body: loginData,
      };
      fetch('/users/login/', init).then((f) => {
        console.log(f);
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
</style>
