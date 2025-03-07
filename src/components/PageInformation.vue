<script setup>
import { computed } from 'vue';
import PrimaryButton from './PrimaryButton.vue';
import imagePath from '/src/assets/images/hus-startsida.jpg';

const showExtraImages = computed(() => window.innerWidth >= 834);
</script>

<template>
	<span class="container">
		<div class="grid-layout">
			<img class="forest-top":src="imagePath" alt="Modernt stuga ute i skogen" width="500" height="500">

		<div class="first-paragraph">
			<h3>Följ stigen till lugnet - Gläntan väntar!</h3>
			<p>Djupt inne i den svenska skogen, vid en spegelblank sjö, ligger Gläntan – en plats för stillhet, återhämtning och upplevelser i naturens rytm. Här bor du i trädkojor svävande bland grenarna, vattengömslen vid sjöns kant eller glashus där natthimlen blir din utsikt.</p>
		</div>

		<div class="second-paragraph">
			<p>Låt vinden viska genom trädkronorna medan du slappnar av på din privata terrass. Vakna till ljudet av fågelsång och känn doften av nyskog. Här finns inga distraktioner, ingen stress – bara du, naturen och lugnet.</p>
			<PrimaryButton class="button-tablet-desktop" buttonText="Boka rum" @click="$router.push('/booking')" />	
		</div>
			<img class="fireplace" v-if="showExtraImages" src="/src/assets/images/eldstad-startsida.jpg" alt="Modern stuga med eldstad och kök" width="500" height="500">

			<PrimaryButton class="button-mobile" buttonText="Boka rum" @click="$router.push('/booking')" />			
			
			<img class="forest-botton":src="imagePath" alt="Modernt stuga ute i skogen" width="500" height="500">
      		<img class="lake" v-if="showExtraImages" src="/src/assets/images/sjö-startsida.jpg" alt="En kajak med två personer på en lugn sjö ute i skogen" width="500" height="500">
		</div>
	</span>
</template>

<style lang="scss" scoped>
.grid-layout {
	display: grid;
	grid-template-columns: 1fr 1fr; 
	grid-template-rows: auto auto; 
	gap: 1.56rem;
	align-items: center;

  @media (max-width: 834px) {
    display: flex;
    flex-direction: column;
  }
}

.first-paragraph {

@media (max-width: 834px) {
	grid-column: 2; // Andra kolumnen (höger)
	grid-row: 1; // Första raden
	}
}

.second-paragraph {

	@media (max-width: 834px) {
	grid-column: 1; // Andra kolumnen (höger)
	grid-row: 1; // Första raden
	}
}


.forest-top {
	display: none;

	@media (min-width: 834px) {
		display: block;
		grid-column: 1;
  		grid-row: 1;
		height: 330px; 
		width: 345px;
		object-fit: cover;
		margin-top: $spacing;
		justify-self: center;
	}

	@media (min-width: 1512px) {
		display: block;
		height: 350px;
		width: 620px;
	}
}

h3 {
	font-family: $heading-font;
	font-size: 2rem;
	margin-bottom: $spacing;
	text-transform: uppercase;
	padding-top: $spacing;
	padding-left: $spacing;
	padding-right: $spacing;

	@media (min-width: 834px) { 
	
	}

  	@media (min-width: 1512px) { 
    	font-size: 2.5rem;
	}
}

p {
	font-family: $body-font;
	font-size: 1rem;
	margin-top: 0;
	text-align: start;
	padding-left: $spacing;
	padding-right: $spacing;

	@media (min-width: 834px) {
		font-size: 1,25rem;
	}

	@media (min-width: 1512px) { 
		font-size: 2.56rem;
	}
}



.fireplace {
	display: none;

	@media (min-width: 834px) {
		height: 270px;
		width: 430px;
		display: block;
		justify-self: center;
	}

	@media (min-width: 1512px) {
		display: block;
		height: 380px;
		width: 750px;
	}
}

.forest-botton {
	width: 100%;
	height: 350px;
	object-fit: cover;
	margin-bottom: $spacing;

	@media (min-width: 834px) {
		display: none;
	}

	@media (min-width: 1512px) {
		display: none;
	}

.lake{
	display:none;

	@media (min-width: 834px) {
		display: block;
		width: 100%;
		height: 225px;
		object-fit: cover;
		margin-bottom: $spacing;
		grid-column: span 2;
	}

	@media (min-width: 1512px) {
		height: 235px;
	}
}

.button-mobile {
	display:block;

	@media (min-width: 834px) {
		display: none
	};
}

.button-tablet-desktop {
	display:none;

	@media (min-width: 834px) {
		display: block;
	}
}


</style>
