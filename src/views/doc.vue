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
            <router-link to="/doc/switch">Switch 组件</router-link>
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

      <main class="main">
        <router-view></router-view>
      </main>
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
  display: flex;
  flex-direction: column;
  height: 100vh;
  .content {
    display: flex;
    flex-grow: 1;
    .aside {
      width: 150px;
      height: 100%;
      padding: 20px 16px;
      position: relative;
       background: lightyellow;
      flex-shrink: 0;
      @media (max-width: 500px) {
        position: fixed;
      }
    }
    .main {
      flex-grow: 1;
      order: 1;
       background: white;
      padding: 16px;
    }
  }
}
</style>
