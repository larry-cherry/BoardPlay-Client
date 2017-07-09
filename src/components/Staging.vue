<template>
<div id="lobby" class="container">
  <h1 >Spyfall</h1>
  </br>
  </br>
  <div class="row">
    <form class="input-group" v-on:submit="join">
      <input v-model="code" type="text" class="form-control" placeholder="Enter the code to join!">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">Join!</button>
      </span>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'Lobby',
  data() {
    return {
      stage: 0,
      code: '',
    };
  },
  methods: {
    join() {
      this.$router.push(`/session/${this.code}`);
    },
  },
  route: {
    canActivate() {

    },
  },
};
</script>

<style>

.input-group {
  width: 50%;
  margin: auto;
  padding: 0px;
}

ul {
 list-style: none;
 margin: 0;
 padding: 0;
}

li {
  color: #000000;
  font-size: 13pt;
}

</style>
