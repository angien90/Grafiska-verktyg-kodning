<script setup>
import imagePath from '/src/assets/images/hus-startsida.jpg';
</script>

<template>
	<h3>Följ stigen till lugnet - Gläntan väntar!</h3>
	<p>Djupt inne i den svenska skogen, vid en spegelblank sjö, ligger Gläntan – en plats för stillhet, återhämtning och upplevelser i naturens rytm. Här bor du i trädkojor svävande bland grenarna, vattengömslen vid sjöns kant eller glashus där natthimlen blir din utsikt.</p>
	<p>Låt vinden viska genom trädkronorna medan du slappnar av på din privata terrass. Vakna till ljudet av fågelsång och känn doften av nyskog. Här finns inga distraktioner, ingen stress – bara du, naturen och lugnet.</p>
  
	<img :src="imagePath" alt="Modernt hus ute i skogen" width="500" height="500">
  </template>

<style scoped>
h3 {
    color: blue; 
}
</style>