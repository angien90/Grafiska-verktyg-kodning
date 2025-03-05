<script setup lang='js'>
import HomeView from './views/HomeView.vue';
</script>


<template>

<nav>
      <router-link to="/">Hem</router-link> |
      <router-link to="/about">Om oss</router-link>
    </nav>

    <router-view></router-view>

  
</template>

<style scoped>
</style>