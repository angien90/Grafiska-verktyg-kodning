<script>
import { ref } from 'vue';

const email = ref('');
const isSubscribed = ref(false);
</script>

<template>
	<span>
		<h3>Prenumerera på vårt nyhetsbrev</h3>
		<form>
			<span class="form">
				<label class="epost" for="epost">Mailadress</label><br>
				<input class="input" type="email" id="epost" name="epost" v-model="email">
			</span>

			<span class="form">
				<input class="checkbox" type="checkbox" id="newsletter" name="newsletter" v-model="isSubscribed">
				<label for="newsletter"> Ja tack! Jag vill få nyhetsbrev från Gläntan med unika erbjudanden och inspiration om naturupplevelser.</label>
			</span>
		</form>
	</span>
</template>

<style scoped>
span {
	background-color: #AD9072;
	padding-top: 25px;
	padding-bottom: 25px;
	padding-left: 15px;
	padding-right: 15px;

}

h3 {
	font-size: 32px;
	margin-top: 0;
	margin-bottom: 25px;
	text-transform: uppercase;

}

.form {
	padding-left: 0;
	padding-right: 0;
	padding-top: 0;
	padding-bottom: 25px;
	text-align: left;	
}

.epost {
	text-align: start;
	font-size: 25px;
	text-transform: uppercase;
	width: 100%;
	padding-left: 10px;
}

.input {
	height: 40px;
	border-radius: 15px;
	width: 98%;
	background-color: #E9E2CF;
	
}

.checkbox {
  appearance: none;
  -webkit-appearance: none; /* För Safari */
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  background-color: #E9E2CF; 
  cursor: pointer;
}

</style>