import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Random from "../views/Random.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/random",
    name: "Random",
    component: Random
  },
  {
    path: "/select/:id",
    name: "Select",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Select.vue")
  },
  {
    path: "/training/:id",
    name: "Training",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "training" */ "../views/Training.vue")
  },
  {
    path: "/punches/",
    name: "Punches",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "training" */ "../views/Punch.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
