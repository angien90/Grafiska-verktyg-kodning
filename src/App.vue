<script setup>
import { ref } from 'vue';
import NewsletterPrenumeration from './components/NewsletterPrenumeration.vue';
import PageInformation from './components/PageInformation.vue';
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

    <h1>HOLA!</h1>
    <PageInformation />
    <NewsletterPrenumeration />
  </div>
</template>

<style>
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
  margin: 20px 0;
}
</style>