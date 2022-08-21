<template>
  <button
    class="m-button flex items-center justify-between space-x-12 py-3 px-4 min-w-[210px] max-w-[300px]"
    :class="[type, direction]"
  >
    <div><slot /></div>
    <AtomsIconsArrow />
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "outlined",
    required: false,
  },

  direction: {
    type: String,
    default: "horizontal",
    required: false,
  },
});
</script>

<style lang="scss">
.m-button {
  @apply transition duration-300 ease-out;

  &.outlined {
    @apply border-thin border-theme-color;
  }

  &.contained {
    @apply bg-theme-color text-theme-bg shadow-sm;
  }

  .icon-arrow {
    @apply transition duration-300 ease-out;
  }

  &.horizontal {
    &:hover {
      .icon-arrow {
        @apply translate-x-1;
      }
    }
  }

  &.vertical {
    .icon-arrow {
      @apply transform rotate-90;
    }
    &:hover {
      .icon-arrow {
        @apply translate-y-1;
      }
    }
  }

  &:hover {
    @apply opacity-hover;
  }
}
</style>
