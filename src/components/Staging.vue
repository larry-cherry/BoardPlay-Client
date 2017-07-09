<template>
<div id="lobby" class="container">
</div>
</template>

<script>
export default {
  name: 'Lobby',
  data() {
    return {
      stage: 1,
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
      locations: ['A', 'B', 'C'],
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
