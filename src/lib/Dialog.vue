<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="colibri-dialog-overlay" @click="handleClickOverlay"></div>
      <div class="colibri-dialog-wrapper">
        <div class="colibri-dialog">
          <header>
            <slot name="title"> 标题 </slot>
            <span class="colibri-dialog-close" @click="closeDialog"></span>
          </header>
          <main>
            <slot name="content">
              <p>内容1</p>
              <p>内容233333</p>
            </slot>
          </main>
          <footer>
            <Button @click="ok">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script>
import Button from './Button.vue'
export default {
  components: {
    Button
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    clickOverLay: {
      type: Boolean,
      default: true
    },
    cancel: {
      type: Function
    },
    ok: {
      type: Function
    }
  },
  setup(props, context) {
    const closeDialog = () => {
      context.emit('update:visible', false)
    }
    const handleClickOverlay = () => {
      if (props.clickOverLay) {
        closeDialog()
      }
    }
    const ok = () => {
      if (props.ok && props.ok !== false) {
        closeDialog()
      }
    }
    const cancel = () => {}
    return { closeDialog, handleClickOverlay, ok, cancel }
  }
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.colibri-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    .colibri-dialog-close {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;

      &::before,
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        background: black;
        width: 100%;
        top: 50%;
        left: 50%;
      }
      &::before {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
}
</style>