<template>
  <div>
    <el-submenu v-if="menu.isMenu && menu.children && menu.children.length" :index="menu.path">
      <i :class="menu.icon"></i>
      <span slot="title">{{menu.meta.title}}</span>
      <menu-item v-for="item in menu.children" :key="item.path" :menu="item"></menu-item>
    </el-submenu>
    <el-menu-item v-if="menu.isMenu && !menu.children" :index="menu.path">
      <i :class="menu.icon"></i>
      <span slot="title">{{menu.meta.title}}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    menu: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
