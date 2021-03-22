<template>
  <div>
    <button @click="toggle" :class="{ checked: checked }"><span></span></button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return { checked, toggle };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h2 * 2;
  border: none;
  background: blue;
  outline: none;
  border-radius: $h/2;
  position: relative;
  span {
    width: $h2;
    height: $h2;
    border-radius: $h2/2;
    top: 2px;
    left: 2px;
    position: absolute;
    background: white;
    transition: all .3s ease-in-out;
  }
  &.checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>