<template>
  <div class="doc-page">
    <Topnav />
    <div class="topnav">
      <div class="logo"></div>
      <div class="menu"></div>
    </div>
    <div class="content">
      <aside class="aside" v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/swich">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main class="main">主内容</main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/topnav.vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("xxx");
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
.doc-page {
  .content {
    display: flex;
    .aside {
      background: lightgreen;
      width: 150px;
      padding: 20px 16px;
      position: relative;
    }
    .main {
      flex-grow: 1;
      order: 1;
      background: red;
    }
  }
}
</style>
