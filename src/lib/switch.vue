<template>
  <div>
    <button @click="toggle" :class="{ checked: value }"><span></span></button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
      // this.$emit()
    };
    return { toggle };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
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
    transition: all 0.3s ease-in-out;
  }
  &.checked {
    background: blue;
  }
  &.checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>