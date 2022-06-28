import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import Dash from "../views/Dashboard.vue";
import ToDo from "../views/ToDo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/dashboard",
      component: Dash,
    },
    {
      path: "/todo",
      component: ToDo,
    },
  ],
});

export default router;
