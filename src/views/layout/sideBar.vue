<template>
  <div class="sideMenu">
    <h2>我想学摄影</h2>
    <el-menu :default-active="$route.path" :router="true" class="el-menu-vertical-demo" style="border-right:0;" background-color="#fff" text-color="#333" active-text-color="#f40">
      <side-menu v-for="item in $router.options.routes[1].children" :key="item.path" :menu="item"></side-Menu>
    </el-menu>
  </div>
</template>

<script>
import sideMenu from "./sideMenu";
export default {
  name: "SideBar",
  data() {
    return {};
  },
  components: {
    sideMenu
  }
};
</script>

<style lang="scss" scoped>
h2{
  font-size: 18px;
  line-height: 60px;
  color: #333;
  text-align: center;
  background: #fff;
}
.sideMenu {
  background: #fff;
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
</style>
