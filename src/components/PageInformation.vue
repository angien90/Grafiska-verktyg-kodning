<script setup>
import SecondaryButton from './SecondaryButton.vue';
import imagePath from '/src/assets/images/hus-startsida.jpg';
</script>

<template>
  <span>
    <h3>Följ stigen till lugnet - Gläntan väntar!</h3>
    <p>
      Djupt inne i den svenska skogen, vid en spegelblank sjö, ligger Gläntan – en plats för stillhet, återhämtning och
      upplevelser i naturens rytm. Här bor du i trädkojor svävande bland grenarna, vattengömslen vid sjöns kant eller
      glashus där natthimlen blir din utsikt.
    </p>
    <p>
      Låt vinden viska genom trädkronorna medan du slappnar av på din privata terrass. Vakna till ljudet av fågelsång
      och känn doften av nyskog. Här finns inga distraktioner, ingen stress – bara du, naturen och lugnet.
    </p>

    <SecondaryButton buttonText="Boka rum" />

    <img :src="imagePath" alt="Modernt hus ute i skogen" width="500" height="500" />
  </span>
</template>

<style scoped>
span {
  background-color: #e9e2cf;
  padding-top: 25px;
  padding-bottom: 25px;
}

h3 {
  font-size: 32px;
  margin-top: 0;
  margin-bottom: 25px;
  text-transform: uppercase;
  padding-left: 25px;
  padding-right: 25px;
}

p {
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 25px;
  text-align: start;
  padding-left: 25px;
  padding-right: 25px;
}

img {
  width: 100%;
  height: auto;
  margin-top: 25px;
}
</style>
