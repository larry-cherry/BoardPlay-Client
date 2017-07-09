<template>
<div id="session">
  <h2>Code: {{$route.param.id}}</h2>
</div>
</template>

<script>
export default {
  name: 'Session',
  data() {
    return {};
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
