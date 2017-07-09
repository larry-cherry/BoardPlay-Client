<template>
<div id="session">
  <div class="error">
    {{error}}
  </div>
  <h1>Test {{id}}</h1>
  <div>

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

</style>
