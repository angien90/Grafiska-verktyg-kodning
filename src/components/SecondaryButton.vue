<script setup>
defineProps({
  buttonText: String
});

</script>

<template>
    <button class="custom-button">{{ buttonText }}</button>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.custom-button {
  width: 150px;
  height: 45px;
  background-color: #96612E; 
  color: white; 
  border: none;
  border-radius: 5px;
  font-size: 16px; 
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.custom-button:hover {
  background-color: #5A3B1F; 
}

.custom-button:active {
  background-color: #96612E;
}

.custom-button:disabled {
  background-color: #d3d3d3;
  color: #a0a0a0;
  cursor: not-allowed; 
}
</style>