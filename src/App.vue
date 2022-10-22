<template>
  <vHeader></vHeader>
  <router-view/>
  <vFooter></vFooter>
</template>

<script>
import './assets/styles/null.css';
import './assets/styles/text/h.scss';
import vHeader from "/src/components/UI/v-header.vue";
import vFooter from './components/UI/v-footer.vue';
export default {
  name: 'App',
  components: {
    vHeader,
    vFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  //width: 100vw;
}
</style>
