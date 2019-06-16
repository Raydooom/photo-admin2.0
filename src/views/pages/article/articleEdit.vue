<template>
  <article-body :id="id"></article-body>
</template>

<script>
import articleBody from "./articleAdd";
export default {
  data() {
    return {
      id: ""
    };
  },
  mounted() {
    this.id = this.$route.params.id;
  },
  components: { articleBody }
};
</script>

<style>
</style>
