<script>
import { ref } from 'vue';

const email = ref('');
const isSubscribed = ref(false);
</script>

<template>
	<h3>Prenumerera på vårt nyhetsbrev</h3>
	<form>
	  <label for="epost">Mailadress</label><br>
	  <input type="email" id="epost" name="epost" v-model="email">
  
	  <input type="checkbox" id="newsletter" name="newsletter" v-model="isSubscribed">
	  <label for="newsletter"> Ja tack! Jag vill få nyhetsbrev från Gläntan med unika erbjudanden och inspiration om naturupplevelser.</label>
	</form>
  </template>

<style scoped>
</style>