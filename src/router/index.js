import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BookingView from "@/views/BookingView.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "HomeView" }
  },
  {
    path: "/booking",
    name: "BookingView",
    component: BookingView,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory("/fed24d-grafiska-verktyg-panterkameleonterna/")
  routes
});

export default router;
