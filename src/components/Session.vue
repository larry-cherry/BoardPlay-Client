<template>
<div id="session">
  <div class="error">
    {{error}}
  </div>
  <h1>Test {{id}}</h1>

  <div class="players" v-if="stage === 0">
    <h3>Players</h3>
    <ul>
      <li v-for="player in players">
        {{player.name}}
      </li>
    </ul>
  </div>
  <div v-else-if="stage === 1">
    <ul class="list-group">
      <li v-for="location in locations" class="list-group-item">
        {{ location }}
      </li>
    </ul>
    <div class="buttons">
      <button type="button" class="btn btn-default navbar-btn">End Game</button>
      <button type="button" class="btn btn-default navbar-btn">Leave Game</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Session',
  data() {
    const id = this.$route.params.id;
    let session;
    let error = '';
    // const template = { locations: [], roles: {}, numSpys: 0 };
    fetch(`sessions/${id}`).then((f) => {
      session = f;
    }, (e) => {
      error = e;
    });
    return { error, session, id };
  },
  methods: {},
  route: {
    canActivate() {

    },
  },
};
</script>

<style>
div.buttons {
  
}
</style>
