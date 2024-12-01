import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import UserView from "../views/UserView.vue";
import UserByIdView from "@/views/UserByIdView.vue";
import UserEditView from "@/views/UserEditView.vue";
import HomeView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/user",
    name: "users",
    component: UserView,
  },
  {
    path: "/user/:id",
    name: "userById",
    component: UserByIdView,
    props: true,
  },
  {
    path: "/user/edit/:id",
    name: "editUser",
    component: UserEditView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
