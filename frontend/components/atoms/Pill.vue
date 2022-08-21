<template>
  <div
    class="a-pill inline-flex px-4 py-1.5 rounded-full shadow-sm"
    :class="type"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "outlined",
    required: false,
  },
});
</script>

<style lang="scss">
.a-pill {
  &.outlined {
    @apply border-thin border-theme-color;
  }

  &.contained {
    @apply bg-blue;
  }
}
</style>
