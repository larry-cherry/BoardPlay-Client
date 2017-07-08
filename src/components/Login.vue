<template>
  <div id="login">
    <h1>Login</h1>
    <form>
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
      <button v-on:click="login()">Login</button>
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
    };
  },
  methods: {
    login: (e) => {
      e.preventDefault();
      console.log('here');
      alert(`Logging in with ${this.username} and ${this.password}`);
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
</style>
