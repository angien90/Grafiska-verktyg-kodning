<script setup>
import { ref } from 'vue';

const menuOpen = ref(false); 

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
  <header class="header">
    <h1>GLÄNTAN</h1>
    <p>SOV MED STJÄRNORNA, VAKNA MED SKOGEN.</p>

      <!-- Menu -->
      <div :class="['menu-icon', { 'open': menuOpen }]" @click="toggleMenu">
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
  align-items: flex-start; 
  height: 305px;
  background-image: url('../assets/images/skog-startsidan.jpg'); 
  background-size: cover; 
  background-position: center;
  padding-left: 20px; 
  padding-right: 20px; 
  text-align: left;
  position: relative;
  padding-top: 8rem;
}

h1 {
  color: $sand;
  display: flex;
  width: 290px;
  height: 83px;
  flex-shrink: 0;
  font-family: $heading-font; 
  font-size: 5rem; 
  margin: 0px 0px 30px 0px; 
  z-index: 1; 
  box-shadow: px 1px 2px 0px rgba(0, 0, 0, 0.25);
}

p {
  color: #fff;
  width: 264px;
  height: 94px;
  font-family: 'Lilita One';
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 117%; 
  letter-spacing: -0.55px;
  margin-top: 10px; 
  margin-left: 5px;
  margin-bottom: 3.5rem;
  z-index: 1; 
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
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
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
  background:  #465c3e;
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
  margin-top: px;
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
