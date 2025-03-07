<script setup>

import BookingCards from "../components/BookingCards.vue";
import MainFooter from "../components/MainFooter.vue";
import MobileHeader from "../components/MobileHeader.vue";
</script>

<template>

   <NewMobileHeader />

  <div>
    <NavBar />
    <BookingCards />
    <MainFooter />
  </div>
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
