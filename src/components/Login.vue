<template>
  <div id="login" class = "container">
    <h1>Login</h1>
    <div v-if="error" class="error">
      {{error}}
    </div>
    <form v-on:submit="login">
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="username"  class="inp" name="username" type="text" placeholder= "Enter your username"/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" class="inp" name="password" type="password" placeholder="Enter your password" />
      </div>
      </br>
      <button>Login</button>
    </form>

        <button class= "btn-submit" v-on:click="login()">Login</button>
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
.inp{
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
.center {
    margin: auto;
    width: 50%;
    padding: 10px;
    height: 50%;
    overflow: hidden;
    display:block;
}
.btn-submit{
  border: 2px solid black;
  padding: 5px;
  margin-top: 10px;
   background-color: #4CAF50;
   border-top-left-radius: 15px;
   border-top-right-radius: 15px;
   border-bottom-right-radius: 15px;
   border-bottom-left-radius: 15px;

}
form#form {
  width: 550px;
  height: 450px;
  margin: auto;
  position: relative;

}

</style>
