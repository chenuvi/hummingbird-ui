<template>
  <router-view></router-view>
</template>

<script>
import { provide, ref } from "vue";

export default {
  setup() {
    const asideVisible = ref(false);
    provide("xxx", asideVisible);
  },
};
</script>

<style></style>
