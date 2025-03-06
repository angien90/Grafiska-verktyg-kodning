<script setup>
import { ref } from 'vue';


const menuOpen = ref(false); // För att hålla reda på om menyn är öppen

// Funktion för att toggla menyn
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>


<template>
    <header class="header">
      <h1>GLÄNTAN</h1>
      <p>SOV MED STJÄRNORNA, VAKNA MED SKOGEN.</p>

      <!-- Menu -->
      <div class="menu-icon" @click="toggleMenu">
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
  justify-content: center; /* Justera texten till vänster */
  align-items: flex-start; /* Centrera text vertikalt */
  height: 305px; /* Full höjd på skärmen */
  background-image: url('../assets/images/skog-startsidan.jpg'); /* Din bakgrundsbild */
  background-size: cover; /* Täcker hela elementet utan att förvrängas */
  background-position: center; /* Centrerar bilden både horisontellt och vertikalt */
  padding-left: 20px; /* För att få ett litet mellanrum till vänster */
  padding-right: 20px; /* Om du vill ha lite avstånd på höger sida */
  text-align: left; /* Justera texten till vänster */
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
  font-size: 5rem; /* Storlek på Gläntan */
  margin: 0px 0px 30px 0px; /* Lägg till margin-bottom för att skapa mer utrymme mellan h1 och p */
  z-index: 1; /* Gör så att texten ligger framför bilden */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

p {
  color: #fff;
  width: 264px;
  height: 94px;
  font-family: "Lilita One";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 117%; /* 29.25px */
  letter-spacing: -0.55px;
  margin-top: 10px; /* Lägg till ett mellanrum mellan h1 och p */
  margin-left: 5px;
  margin-bottom: 3.5rem;
  z-index: 1; /* Gör så att texten ligger framför bilden */
}

.menu-icon {
  position: absolute;
  top: 20px; 
  right: 20px; 
  display: flex;
  flex-direction: column;
  gap: 1px;
  cursor: pointer;
  z-index: 2; 
}

.bar {
  width: 44px;
  height: 10px;
  flex-shrink: 0;
  background-color: $sand; 
  border-radius: 50px;
  transition: 0.3s;
}

.mobile-menu {
  position: absolute;
  top: 60px;
  right: 10px;
  background:  #465c3e;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 1rem;
  width: 150px;
  z-index: 1;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu li {
  padding: 10px 0;
  text-align: center;
  font-size: 18px;
  color: $sand; 
}

.mobile-menu a {
  text-decoration: none;
  color: $sand; 
}

.mobile-menu a:hover {
  text-decoration: underline;
}

</style>
  