<template>
  <div id="app">
    <router-view></router-view>
    <!-- <loading-spinner v-show="$store.getters.loadingStatus"></loading-spinner> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {};
  },
  watch: {
    $route() {
      //设置网页头信息
    
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$_init();
    });
  },
  methods: {
    $_init() {
      //菊花图状态
      // this.$store.dispatch('changeLoadingStatus', false);
    }
  }
};
</script>

<style>
</style>
