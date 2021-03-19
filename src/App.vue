<template>
  <router-view></router-view>
</template>

<script>
import { provide, ref } from "vue";
import { router } from "./router";

export default {
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width >= 500 ? true : false);
    provide("xxx", asideVisible);
    router.afterEach(() => {
      if (width <= 500) {
        asideVisible.value = false;
      }
    });
  },
};
</script>

<style></style>
