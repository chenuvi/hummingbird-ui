<template>
  <div v-for="(t, index) in titleLists" :key="index">{{ t }}</div>
  <component v-for="(c, index) in defaults" :is="c" :key="index" />
</template>

<script>
import Tab from './Tab.vue'
export default {
  name: 'Tabs',
  components: { Tab },
  setup(props, context) {
    const defaults = context.slots.default()
    console.log('defaults: ', { ...defaults })
    defaults.forEach((tag, index) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const titleLists = defaults.map((item) => {
      return item.props.title
    })
    return { defaults, titleLists }
  }
}
</script>

<style scoped>
</style>
