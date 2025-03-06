<script setup>
import { ref } from 'vue';
import HomeView from './views/HomeView.vue';
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Hem</router-link> |
      <router-link to="/about">Om oss</router-link>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 15px;
  font-size: 18px;
}

h1 {
  color: #4caf50;
}

span {
  display: block;
}
</style>
