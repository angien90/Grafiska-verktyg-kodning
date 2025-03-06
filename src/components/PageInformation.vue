<script setup>
import PrimaryButton from './PrimaryButton.vue';
import imagePath from '/src/assets/images/hus-startsida.jpg';
</script>

<template>
	<h3>Följ stigen till lugnet - Gläntan väntar!</h3>
	<p>Djupt inne i den svenska skogen, vid en spegelblank sjö, ligger Gläntan – en plats för stillhet, återhämtning och upplevelser i naturens rytm. Här bor du i trädkojor svävande bland grenarna, vattengömslen vid sjöns kant eller glashus där natthimlen blir din utsikt.</p>
	<p>Låt vinden viska genom trädkronorna medan du slappnar av på din privata terrass. Vakna till ljudet av fågelsång och känn doften av nyskog. Här finns inga distraktioner, ingen stress – bara du, naturen och lugnet.</p>

	<PrimaryButton buttonText="Boka rum" />

	<img :src="imagePath" alt="Modernt hus ute i skogen" width="500" height="500">
</template>

<style lang="scss" scoped>

h3 {
	font-family: $heading-font;
	font-size: 2rem;
	margin-bottom: $spacing;
	text-transform: uppercase;
	padding-top: $spacing;
	padding-left: $spacing;
	padding-right: $spacing;
}

p {
	font-family: $body-font;
	font-size: 1rem;
	margin-top: 0;
	margin-bottom: $spacing;
	text-align: start;
	padding-left: $spacing;
	padding-right: $spacing;
}

img {
	width: 100%;
	height: auto;
	margin-top: $spacing;
	margin-bottom: $spacing;
}

</style>