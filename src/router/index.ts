import Vue, { Component } from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "../store/index";

Vue.use(VueRouter)

function lazyLoader (input: () => Component | undefined) {

}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    meta: {accessLevel: 1},
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    meta: {accessLevel: 3},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
];

const router: VueRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
