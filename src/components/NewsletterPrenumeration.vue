<script>
import PrimaryButton from './PrimaryButton.vue';
import { ref } from 'vue';

export default {
  components: {
    PrimaryButton,
  },
};

const email = ref('');
const isSubscribed = ref(false);
</script>

<template>
  <span class="grid-layout">
    <h3>Prenumerera på vårt nyhetsbrev</h3>
    <form>
      <span class="form-1">
        <label class="epost" for="epost">Mailadress</label><br />
        <input class="input" type="email" id="epost" name="epost" v-model="email" />
      </span>

      <span class="form-2">
        <input class="checkbox" type="checkbox" id="newsletter" name="newsletter" v-model="isSubscribed" />
        <label class="newsletter-information" for="newsletter">
          Ja tack! Jag vill få nyhetsbrev från Gläntan med unika erbjudanden och inspiration om naturupplevelser.</label
        >
      </span>

      <PrimaryButton buttonText="Prenumerera" />
    </form>
  </span>
</template>

<style lang="scss" scoped>
.grid-layout {
  background-color: $greige;
  padding-left: $spacing;
  padding-right: $spacing;
  margin-bottom: $spacing;
}

form {
  @media (min-width: 834px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto;
    align-items: start;
  }
}

h3 {
	font-family: $heading-font;
	font-size: 2rem;
	margin-bottom: $spacing;
	text-transform: uppercase;
  text-align: center;
	padding-top: $spacing;
	padding-left: $spacing;
	padding-right: $spacing;
  display: block;
  

  	@media (min-width: 1512px) {
      grid-column: 1 / span 4; 
    	font-size: 2.5rem;
	}
}

.form-1 {
  padding-left: 10px;
  padding-right: 0;
  padding-top: 0;
  padding-bottom: $spacing;
  text-align: left;
  grid-template-rows: auto auto;
  gap: $spacing;
  width: 100%;
  
  @media (min-width: 834px) {
    grid-column: 1 / span 2;
  }

	@media (min-width: 1512px) { 
	}
}

.epost {
  font-family: $heading-font;
  text-align: start;
  font-size: $spacing;
  text-transform: uppercase;
  width: 100%;

  @media (min-width: 834px) {
    grid-column: 1 / span 2;
  } 
}

.input {
  height: 40px;
  border-color: 1px solid $sand;
  border-radius: 15px;
  border: 1px solid $sand;
  width: 100%;
  background-color: $sand;

  @media (min-width: 834px) {
    grid-column: 1 / span 2;
  }
}

.form-2 {
  display: flex;
  align-items: start;
  gap: 10px;
  padding-top: $spacing;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 834px) {
    grid-column: 3 / span 2;
    padding-left: $spacing;
    
  }
}

.checkbox {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  background-color: $sand;
  border: 1px solid $skogsgron;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.checkbox:checked::after {
  content: '✔';
  font-size: 18px;
  color: #333;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.newsletter-information {
  font-family: $body-font;
  font-size: 1.1rem;
  line-height: 1.4;
  flex: 1;

  @media (min-width: 834px) {
    grid-column: 3 / span 2;
  }
}

.primary-button{
  @media (min-width: 834px) {
    grid-column: 1 / span 4;
  }
}
</style>
