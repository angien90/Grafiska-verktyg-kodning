<script setup>
import { ref } from "vue";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <div id="app"></div>
  <router-view />
</template>

<style scoped>
nav {
  display: flex;
  gap: 15px;
  font-size: 1.1rem;
}

h1 {
  color: #4caf50;
}

span {
  display: block;
}
</style>
