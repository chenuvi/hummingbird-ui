<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :clickOverLay="false"
    :handleOk="f1"
    :handleCancle="f2"
  >
    <template v-slot:title>
      <b>title</b>
    </template>
    <template v-slot:content>
      <p>哗啦啦</p>
      <p>淅沥沥</p>
    </template>
  </Dialog>
</template>

<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      console.log(' x.value = !x.value;: ', x.value)
      x.value = !x.value
    }
    const f1 = () => {
      return true
    }
    const f2 = () => {}
    return { x, toggle, f1, f2 }
  }
}
</script>

<style lang="scss" scoped>
</style>