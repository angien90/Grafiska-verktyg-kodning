<script setup>
import NewsletterPrenumeration from '../components/NewsletterPrenumeration.vue';
import PageInformation from '../components/PageInformation.vue';
import Header from '../components/MobileHeader.vue';
</script>

<template>
    
    <Header /> 

    <main>
      <PageInformation />
      <NewsletterPrenumeration />
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
