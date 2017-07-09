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
  <div v-else-if="stage === 1">

    <ul class="list-group">
      <li v-for="location in locations" class="list-group-item">
        {{ location }}
      </li>
      </ul>
      <button type="button" class="btn btn-default navbar-btn">Leave Game</button>
  </div>
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
