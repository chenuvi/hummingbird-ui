<template>
  <button class="colibri-button" :class="classes" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "medium",
    },
    level: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`colibri-button-theme-${theme}`]: theme,
        [`colibri-button-size-${size}`]: size,
        [`colibri-button-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$red: red;
$grey: grey;
$radius: 4px;

.colibri-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  &.colibri-button-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.colibri-button-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.colibri-button-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.colibri-button-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  /* level */
  &.colibri-button-theme-button {
    &.colibri-button-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.colibri-button-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.colibri-button-theme-link {
    &.colibri-button-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.colibri-button-theme-text {
    &.colibri-button-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.colibri-button-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  /*disabled*/
  &[disabled] {
    cursor: not-allowed;
    color: $grey;
    &:hover {
      border-color: $grey;
    }
  }
}
</style>