<template>
  <div>Button 示例</div>
  <h2>示例1</h2>
  <div>
    <Button>你好</Button>
    <Button theme="button" @click="click">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h2>示例2</h2>
  <div>
    <div>
      <Button size="big">big</Button>
      <Button>default</Button>
      <Button size="small">small</Button>
    </div>
    <div>
      <Button theme="link" size="big">big</Button>
      <Button theme="link">default</Button>
      <Button size="small" theme="link">small</Button>
    </div>
    <div>
      <Button size="big" theme="text">big</Button>
      <Button theme="text">default</Button>
      <Button size="small" theme="text">small</Button>
    </div>
  </div>
  <h2>示例3</h2>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
    <h2>示例4</h2>
    <div>
      <Button disabled>禁用按钮</Button>
      <Button theme="link" disabled>禁用链接按钮</Button>
      <Button theme="text" disabled>禁用按钮</Button>
    </div>
    <h2>示例5</h2>
    <div>
      <Button loading>加载中</Button>
      <Button>加载完毕</Button>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const click = () => {
      console.log("clicked");
    };
    return { click };
  },
};
</script>