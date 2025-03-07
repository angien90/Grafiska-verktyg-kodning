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
      <p><a href="https://www.google.com/maps" target="_blank">Hitta hit</a></p>
      <p>Tele: <a href="tel:+4677777777">+46 777 777 77</a></p>
      <p>Sociala medier</p>
      <div class="some-icons">
        <a href="https://www.instagram.com/" target="_blank">
          <img
            src="@/assets/images/instagram-icon.svg"
            width="25px"
            height="25px"
            alt="Sociala medier ikon för Instagram"
          />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img
            src="@/assets/images/facebook-icon.svg"
            width="25px"
            height="25px"
            alt="Sociala medier ikon för Facebook"
          />
        </a>
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

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      border-bottom: 1px solid $sand;
    }
  }

  .some-icons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 5px;

    a {
      border: none;
    }

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
