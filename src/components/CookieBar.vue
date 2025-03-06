<script setup>
import { ref, onMounted } from 'vue';
import PrimaryButton from './PrimaryButton.vue';
import SecondaryButton from './SecondaryButton.vue';

const showCookiePopup = ref(false);

// Kolla om användaren redan har gjort ett val
onMounted(() => {
  if (!localStorage.getItem('cookiesAccepted')) {
    showCookiePopup.value = true;
  }
});

// Spara användarens val och dölj popupen
const acceptCookies = () => {
  localStorage.setItem('cookiesAccepted', 'true');
  showCookiePopup.value = false;
};

const rejectCookies = () => {
  localStorage.setItem('cookiesAccepted', 'false');
  showCookiePopup.value = false;
};
</script>

<template>
  <div v-if="showCookiePopup" class="cookie-popup">
    <h3>Vi använder cookies</h3>
    <p>
      För att ge dig en bättre upplevelse på vår hemsida använder vi cookies. <a href="" target="_blank">Läs mer</a>
    </p>

    <span class="button-container">
      <PrimaryButton buttonText="Acceptera" @click="acceptCookies" />
      <SecondaryButton buttonText="Avvisa" @click="rejectCookies" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.cookie-popup {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: $greige;
  width: 100%;
  z-index: 1000;
}

h3 {
  font-family: $heading-font;
  font-size: 1.6rem;
  margin-bottom: 10px;
  text-transform: uppercase;
  padding-top: $spacing;
  padding-left: $spacing;
  padding-right: $spacing;
}

p {
  font-family: $body-font;
  font-size: 1rem;
  margin-top: 0;
  text-align: start;
  padding-left: $spacing;
  padding-right: $spacing;
}

a {
  color: black;
  text-decoration: underline;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 0;
}
</style>
