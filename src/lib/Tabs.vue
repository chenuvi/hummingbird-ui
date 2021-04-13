<template>
  <div class="colibri-tabs">
    <div class="colibri-tabs-nav">
      <div
        class="colibri-tabs-nav-item"
        v-for="(t, index) in titleLists"
        :key="index"
      >
        {{ t }}
      </div>
    </div>
  </div>
  <div class="colibri-tabs-content">
    <div
      class="colibri-tabs-content-item"
      v-for="(c, index) in defaults"
      :key="index"
    >
      <component :is="c" :key="index" />
    </div>
  </div>
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

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.colibri-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
        border-bottom: 1px solid $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
