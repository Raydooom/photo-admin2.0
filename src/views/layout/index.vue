<template>
  <div>
    <side-bar></side-bar>
    <topbar></topbar>
    <transition name="slide" mode="out-in">
      <div class="router-view">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import sideBar from "./sideBar";
import topbar from "@/components/topbar";

export default {
  components: {
    sideBar,
    topbar
  }
};
</script>

<style lang="scss">
.slide-leave-active,
.slide-enter-active {
  transition: opacity 0.4s;
}
.slide-enter {
  opacity: 0;
  transform: translateZ(-30px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateZ(-30px);
}
.router-view {
  padding: 15px 0;
  padding-left: 215px;
  width: calc(100% - 215px);
}
</style>
