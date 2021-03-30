<template>
  <div>
    <button class="colibri-switch" @click="toggle" :class="{ checked: value }"><span></span></button>
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
    };
    return { toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.colibri-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
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
    background: #1890ff;
  }
  &.checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>