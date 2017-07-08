<template>
  <div id="login">
    <h2>Login</h2>
    <form>
      <label for="username">Username</label>
      <input v-model="username" name="username" type="text" />
      </br>
      <label for="password">Password</label>
      <input v-model="username" name="password" type="password" />
      </br>
      <button v-on:click="login()" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: {
    username: '',
    password: '',
  },
  methods: {
    login: () => {
      alert(`Logging in with ${this.username} and ${this.password}`);
    },
  },
};
</script>

<style>
div#login form {
  display: inline-flex;
  flex-direction: column;
}
</style>
