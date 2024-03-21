<script setup lang="ts">
import { MenuOption } from "naive-ui";
const menuOptions: MenuOption[] = [
  {
    label: "首页",
  },
  {
    label: "页面1",
  },
];
</script>
<template>
  <n-layout-sider class="sidebar" show-trigger bordered>
    <n-menu :options="menuOptions"> </n-menu>
  </n-layout-sider>
</template>

<style lang="scss" scoped>
.sidebar {
  height: 100vh;
}
</style>
