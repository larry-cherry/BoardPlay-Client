<template>
<div id="games">
  <h1>Games</h1>
  <div class="gameselector">
    <div class="panel panel-default gamepanel" v-for="game in games">
      <div class="panel-body">
        <h2>{{game.name}}</h2>
        <h3>{{game.type}}</h3>
        <button v-on:click="create(game.id)" class="btn">Create Game</button>
        <button v-on:click="join(game.id)" class="btn">Join Game</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import auth from '../auth';
// import APIURL from '../main';

export default {
  name: 'Games',
  data() {
    const games = [{
      name: 'spyfall classic',
      type: 'spyfall',
      id: 0,
    },
    {
      name: 'spyfall resort',
      type: 'spyfall',
      id: 1,
    }];
    return { games };
  },
  methods: {
    create() {
      // const init = {
      //   method: 'POST',
      //   body: JSON.stringify(this.games[gameid]),
      //   headers: { 'Content-Type': 'application/json' },
      // };
      // fetch(`${APIURL}/session/create`, init).then();
      this.$router.push('session/AF24D');
    },
    join() {
      this.$router.push('staging/');
    },
  },
  beforeRouteEnter(to, from, next) {
    // Check auth here
    if (auth.checkAuth()) {
      next();
    } else {
      next('/');
    }
  },
};
</script>

<style>
div.gameselector div.panel {
  padding: 2em;
  display: inline-block;
  margin: 1em;
  max-width: 40em;
  max-height: 40em;
  border-radius: 2em;
}
</style>
