<script setup>
defineProps({
  buttonText: String,
  disabled: Boolean
});
</script>

<template>
  <button :disabled="disabled" class="primary-button" :class="{ disabled: disabled }" type="submit">
    {{ buttonText }}
  </button>
</template>

<style lang="scss" scoped>
.primary-button {
  @include primary-button;
  
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>