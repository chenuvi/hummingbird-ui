<template>
  <div>
    <Switch v-model:value="isSwitchOn" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/switch.vue";
export default {
  components: { Switch },
  setup() {
    const isSwitchOn = ref(false);
    return { isSwitchOn };
  },
};
</script>

<style lang="scss" scoped>
</style>