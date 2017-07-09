<template>
<div id="session">
  <div class="error">
    {{error}}
  </div>

</div>
</template>

<script>
import { router } from '../main';

const id = this.$route.params.id;
let error = '';
let session;
if (!id) {
  router.go('lobby');
}
fetch(`sessions/${id}`).then((f) => {
  session = f;
}, (e) => {
  error = e;
});
export default {
  name: 'Session',
  data() {
    return { error, session };
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
