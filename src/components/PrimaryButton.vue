<script setup>
import { ref } from 'vue';

defineProps({
  buttonText: String
});

const isDisabled = ref(false);
</script>

<template>
    <button class="custom-button" :disabled="isDisabled">
        {{ buttonText }}
    </button>
</template>

<style scoped>
.custom-button {
  width: 150px;
  height: 45px;
  background-color: #465C3E;
  color: white; 
  border: none;
  border-radius: 5px;
  font-size: 16px; 
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.custom-button:hover {
  background-color:  #707E43; 
}
.custom-button:active {
  background-color: #465C3E;
}
.custom-button:disabled {
  background-color: #6D6D6D;
  cursor: not-allowed; 
}
</style>