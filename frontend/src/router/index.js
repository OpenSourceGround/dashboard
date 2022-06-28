import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import Dash from "../views/Dashboard.vue";
import ToDo from "../views/ToDo.vue";
import Accounts from "../views/Accounts.vue";
import Customize from "../views/Customize.vue";
import DownloadData from "../views/DownloadData.vue";

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
    {
      path: "/settings/customize",
      component: Customize,
    },
    {
      path: "/settings/accounts",
      component: Accounts,
    },
    {
      path: "/misc/download-data",
      component: DownloadData,
    },
  ],
});

export default router;
