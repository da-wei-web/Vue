import VueRouter from "vue-router";
import Vue from "vue";

// 安装插件
Vue.use(VueRouter);

// 创建VueRouter对象
let routes = [
    // 路由映射关系，一个路由对应一个组件
];

const router = new VueRouter({
    routes
});

// 导出router
export default router;