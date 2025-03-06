<script setup>
import { ref } from 'vue';

defineProps({
  buttonText: String,
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
  background-color: #465c3e;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
.custom-button:hover {
  background-color: #707e43;
}
.custom-button:active {
  background-color: #465c3e;
}
.custom-button:disabled {
  background-color: #6d6d6d;
  cursor: not-allowed;
}
</style>
