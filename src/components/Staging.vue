<template>
<div id="lobby" class="container">
  <div v-if="stage === 0">
    <h3>Players</h3>
    <ul>
      <li v-for="player in players">
        {{player.name}}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Lobby',
  data() {
    return {
      players: [{
        name: 'Vasu',
      },
      {
        name: 'Kenny',
      },
      {
        name: 'Larry',
      }],
      currentLocation: 'Library',
      locations: [],
      role: 'spy',
    };
  },
  methods: {},
  route: {
    canActivate() {

    },
  },
};
</script>

<style>

</style>
