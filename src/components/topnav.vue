<template>
  <div class="topnav">
    <div class="logo" >LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggle-aside" @click="toggleAside"></span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("xxx");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  .toggle-aside {
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    position:absolute;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggle-aside {
      display: inline-block;
    }
  }
}
</style>
