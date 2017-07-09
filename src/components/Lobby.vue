<template>
<div id="lobby" class="container">
  <table class="table table-hover">
    <thead>
      <tr>
        Players
      </tr>
    </thead>
    <tbody>
    <tr v-for="player for Players">
      <td> {{ player.name }} </td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'Lobby',
  data() {
    return {
      Players: [{
        name:'Vasu',
      },
      {
        name:'Kenny',
      },
      {
        name:'Larry',
      }],
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
