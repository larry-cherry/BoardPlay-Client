<template>
<div id="session">
  <div class="error">
    {{error}}
  </div>
  <h3>Game Code: {{code}}</h3>
  <div class="players">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3>Players</h3>
      </div>
      <div class="panel-body">
        <ul>
          <li v-for="player in players" class="list-group-item">
            {{player}}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="buttons" v-if="stage === 0">
    <button type="button" class="btn btn-default navbar-btn">Start Game</button>
    <button type="button" class="btn btn-default navbar-btn">Leave Game</button>
  </div>
  <div class="game" v-else-if="stage === 1">
    <div class="status">
      <h6 v-on:click="hideStatus">show/hide</h6>
      <div class="statuscontent" v-bind:class="{ hidden: hiddenStatus }">
        <h3>You are {{spyStatus}} the spy!</h3>
      </div>
    </div>
    <div class="locations">
      <ul class="list-group">
        <li v-for="location in locations1" class="list-group-item">
          {{ location }}
        </li>
      </ul>
      <ul class="list-group">
        <li v-for="location in locations2" class="list-group-item">
          {{ location }}
        </li>
      </ul>
    </div>
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
    const code = this.$route.params.id;
    const stage = 1;
    const players = ['Kenny', 'Larry', 'Vasu', 'Apple'];
    const error = '';
    const locations1 = ['Airplane', 'Bank', 'Beach', 'Cathedral', 'Circus Tent', 'Corporate Party', 'Crusader Army', 'Casino', 'Day Spa', 'Embassy', 'Hospital', 'Hotel', 'Military Base', 'Movie Studio'];
    const locations2 = ['Ocean Liner', 'Passenger Train', 'Pirate Ship', 'Polar Station', 'Police Station', 'Restaurant', 'School', 'Service Station', 'Space Station', 'Submarine', 'Supermarket', 'Theater', 'University', 'World War II Squad'];
    // const template = { locations: [], roles: {}, numSpys: 0 };
    // fetch(`http://localhost:3000/api/sessions/${code}`).then(res => res.json(), err => err)
    //   .then((body) => {
    //     stage = body.stage;
    //     body.players.players.forEach((player) => {
    //       players.push(player);
    //     });
    //   }, (err) => {
    //     error = err;
    //   });
    return {
      error,
      stage,
      players,
      locations1,
      locations2,
      hiddenStatus: false,
      spyStatus: 'NOT',
      code,
    };
  },
  methods: {
    hideStatus() {
      this.hiddenStatus = !this.hiddenStatus;
    },
  },
  route: {
  },
};
</script>

<style>
div.buttons {
  display: inline-block;
}
div.buttons button {
  margin-left: 1em;
  margin-right: 1
}
div.players ul li {
  padding: .4em;
  font-size: 14pt;
}
div.players ul {
  display: inline;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
div.panel-info {
    margin: auto;
    display: inline-flex;
    flex-direction: column;
}
div.panel div.panel-body {
  padding: 1em;
}
div.panel div.panel-heading {
  padding-top: .1em;
  padding-bottom: 0;
  padding-left: 1em;
  padding-right: 1em;
}
div.locations {
  display: inline-flex;
  flex-direction: row;
}
div.locations ul li {
  margin-left: .5em;
  margin-right: .5em;
}
div.game {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
body {
  font-size: 11pt;
}
div.status {
  border-top: 1px solid #E1E1E1;
  border-bottom: 1px solid #E1E1E1;
  padding: 1em;
  margin: 1em;
}
h6 {
  cursor: pointer;
}
.hideStatus {
  opacity: 0;
}

</style>
