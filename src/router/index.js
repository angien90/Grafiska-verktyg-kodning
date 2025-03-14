import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookingView from "../views/BookingView.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "Home" }
  },
  {
    path: "/fed24d-grafiska-verktyg-panterkameleonterna/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/fed24d-grafiska-verktyg-panterkameleonterna/:queryParams(.*)",
    name: "Booking",
    component: BookingView,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
