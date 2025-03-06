<script setup>
import MainLogo from '@/components/MainLogo.vue';
</script>

<template>
  <footer>
    <div class="footer-logo">
      <MainLogo />
      <h2>Gläntan</h2>
    </div>

    <div class="footer-contact">
      <p>Hitta hit</p>
      <p>Tele: +46 777 777 77</p>
      <p>Sociala medier</p>
      <div class="some-icons">
        <img
          src="@/assets/images/instagram-icon.svg"
          width="25px"
          height="25px"
          alt="Sociala medier ikon för Instagram"
        />
        <img
          src="@/assets/images/facebook-icon.svg"
          width="25px"
          height="25px"
          alt="Sociala medier ikon för Facebook"
        />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  width: 100vw;
  background-color: $skogsgron;
  color: $sand;
  font-family: $body-font;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  gap: $spacing;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.footer-logo {
  cursor: pointer;
  display: flex;
  gap: 15px;

  h2 {
    font-style: normal;
    font-family: $heading-font;
    font-weight: 400;
    text-transform: uppercase;
    font-size: pxtorem(36px);
  }
}

.footer-contact {
  line-height: 1.7rem;

  .some-icons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 5px;

    img {
      width: 100%;
      max-width: 25px;
      height: auto;
      filter: brightness(0) saturate(100%) invert(100%) sepia(62%) saturate(587%) hue-rotate(308deg) brightness(96%)
        contrast(92%);
    }
  }
}
</style>
