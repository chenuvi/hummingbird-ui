<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>Hummingbird UI</h1>
      <h2>一个简明的 UI 框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <router-link to="/doc"> 开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/topnav.vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
