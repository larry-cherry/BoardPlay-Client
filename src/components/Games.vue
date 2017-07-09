<template>
<div id="games">
  <h1>Games</h1>
  <div class="gameselector">
    <div class="panel panel-default gamepanel" v-for="game in games">
      <div class="panel-body">
        <h2>{{game.name}}</h2>
        <h3>{{game.type}}</h3>
        <button v-on:click="create(game.id)" class="btn">Create Game</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import auth from '../auth';

export default {
  name: 'Games',
  data() {
    return {
      games: [{
        name: 'spyfall classic',
        type: 'spyfall',
        id: 0,
      },
      {
        name: 'spyfall resort',
        type: 'spyfall',
        id: 1,
      }],
    };
  },
  methods: {

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
