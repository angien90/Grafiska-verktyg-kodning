<script setup>
import NewsletterPrenumeration from '../components/NewsletterPrenumeration.vue';
import PageInformation from '../components/PageInformation.vue';
import MainFooter from '@/components/MainFooter.vue';
</script>

<template>
  <main>
    <PageInformation />
    <NewsletterPrenumeration />
    <MainFooter />
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: $sand;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
