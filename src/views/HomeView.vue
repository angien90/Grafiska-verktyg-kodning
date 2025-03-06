<script setup>
import NewsletterPrenumeration from '../components/NewsletterPrenumeration.vue';
import PageInformation from '../components/PageInformation.vue';
import CookieBar from '../components/CookieBar.vue';
import MainFooter from '../components/MainFooter.vue';
import MobileHeader from '../components/MobileHeader.vue';
</script>

<template>
  <MobileHeader />

  <main>
    <CookieBar />
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
