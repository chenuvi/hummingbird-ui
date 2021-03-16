<template>
  <div>导航栏 | <router-link to='/'>Chenuvi</router-link> | <router-link to='/second'>Second Page</router-link></div>
  <router-view></router-view>
</template>

<script>
import Chenuvi from "./components/Chenuvi.vue";
export default {
  components: { Chenuvi }
};
</script>

<style></style>
