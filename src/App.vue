<template>
  <router-view></router-view>
</template>

<script>
import { provide, ref } from "vue";

export default {
  setup() {
    const width = document.documentElement.clientWidth
    const asideVisible = ref( width >= 500 ? true : false);
    provide("xxx", asideVisible);
  },
};
</script>

<style></style>
