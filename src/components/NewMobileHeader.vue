<script setup>
import { ref } from "vue";
import PrimaryButton from "./PrimaryButton.vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
  <header class="header">
    <div class="header-content">
      <h1>VÅRA RUM</h1>
      <PrimaryButton buttonText="Boka nu!" @click="$router.push('/booking')" />
    </div>

    <!-- Menu -->
    <div :class="['menu-icon', { open: menuOpen }]" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <!-- Mobile-menu -->
    <nav v-if="menuOpen" class="mobile-menu">
      <ul>
        <li><router-link to="/">Hem</router-link></li>
        <li>Om oss</li>
        <li><router-link to="/booking">Boka Rum</router-link></li>
        <li>Kontakta oss</li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 305px;
  background-image: url("../assets/images/skog-våra-rum.jpg");
  background-size: cover;
  background-position: center;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  padding-top: 3rem;
}

h1 {
  color: #000;
  font-family: "Lilita One";
  font-size: 36px;
  font-weight: 400;
  letter-spacing: -0.792px;
  margin: 0px 0px 10px 0px;
}

.primary-button {
  margin-top: 0;
  margin-bottom: 0;
}

.header-content {
  width: 320px;
  height: 180px;
  flex-shrink: 0;
  background-color: $sand;
  padding: 20px;
  border-radius: 8px; /* Rundade hörn */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.menu-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 2;
}

.bar {
  width: 44px;
  height: 10px;
  flex-shrink: 0;
  background-color: $sand;
  border-radius: 50px;
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}

.menu-icon.open .bar:nth-child(1) {
  transform: translateY(15px) rotate(45deg);
}

.menu-icon.open .bar:nth-child(2) {
  opacity: 0;
}

.menu-icon.open .bar:nth-child(3) {
  transform: translateY(-15px) rotate(-45deg);
}

.mobile-menu {
  position: absolute;
  top: 0px;
  right: 0px;
  background: #465c3e;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  height: 100vh;
  width: 75vw;
  z-index: 1;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu li {
  padding: 10px 0;
  text-align: left;
  font-size: 18px;
  color: $sand;
  width: 216px;
  height: 54px;
  font-size: 36px;
  font-family: "Lilita One";
  font-style: normal;
  letter-spacing: -0.792px;
  line-height: 150%;
  font-weight: 400;
}

.mobile-menu a {
  text-decoration: none;
  color: $sand;
}

.mobile-menu a:hover {
  text-decoration: underline;
}
</style>
