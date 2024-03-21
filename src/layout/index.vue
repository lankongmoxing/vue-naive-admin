<script lang="ts" setup>
import Sider from "./components/Sider/index.vue";
import Header from "./components/Header/index.vue";
import Content from "./components/Content/index.vue";
</script>
<template>
  <n-layout has-sider>
    <Sider></Sider>
    <n-layout>
      <Header></Header>
      <Content></Content>
    </n-layout>
  </n-layout>
</template>

<style lang="scss">
.layout {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: skyblue;
  display: flex;

  .menu {
    width: 20vw;
    background-color: red;
  }
}
</style>
