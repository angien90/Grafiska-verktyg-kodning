<script setup>
defineProps({
  buttonText: String
});

</script>

<template>
  <button class="primary-button">{{ buttonText }}</button>
</template>

<style lang="scss" scoped>
.primary-button {
  @include primary-button;
}
</style>