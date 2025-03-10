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
        <label class="newsletter-information" for="newsletter">Ja tack! Jag vill få nyhetsbrev från Gläntan med unika erbjudanden och inspiration om naturupplevelser.</label>
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

h3 {
    font-family: $heading-font;
    font-size: 2.25rem;
    margin-bottom: $spacing;
    text-transform: uppercase;
    text-align: center;
    padding-top: $spacing;
    padding-left: $spacing;
    padding-right: $spacing;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;

  	@media (min-width: 1512px) {
      grid-column: 1 / span 4; 
	}
}

form {
  @media (min-width: 834px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: start;
  }
}

.form-1 {
  padding-left: 10px;
  padding-bottom: $spacing;
  text-align: left;
  width: 100%;
  
  @media (min-width: 834px) {
    grid-column: 1 / span 2;
    margin-left: 40px;
  }
}

.epost {
  font-family: $heading-font;
  font-size: 1.5rem;
  text-align: start;
  font-size: $spacing;
  text-transform: uppercase;
  width: 100%;

  @media (min-width: 834px) {
    grid-column: 1 / span 2;
    margin-left: 5px;
  } 
}

.input {
  height: 40px;
  width: 100%;
  border-color: 1px solid $sand;
  border-radius: 15px;
  border: 1px solid $sand;
  background-color: $sand;
  padding: 8px;

  @media (min-width: 834px) {
    grid-column: 1 / span 2;
    width: 90%;
  }

  @media (min-width: 1512px) {
    width: 70%;
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
    margin-right: 40px;
    padding-left: $spacing;
    padding-top: 0;
    align-self: center;
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
