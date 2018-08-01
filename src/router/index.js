
import Vue from "vue";
import Router from "vue-router";
import qs from "qs";
import { Toast } from "mint-ui";
const HelloWorld = resolve => { require(["@/views/home"], resolve); };

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});
