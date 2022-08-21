<template>
  <div
    :style="{
      'background-image': 'url(' + 'https://source.unsplash.com/random' + ')',
      'background-size': 'cover',
      'background-position': 'center',
    }"
    class="a-image h-full"
    :class="radius"
  ></div>
</template>

<script setup>
const props = defineProps({
  radius: {
    type: String,
    default: "top-left",
    required: false,
  },
});
</script>

<style lang="scss">
.a-image {
  @apply rounded-md;
  box-shadow: 0 0 0 0.5px currentColor;

  &.top-left {
    @apply rounded-tl-[80px];
  }
  &.top-right {
    @apply rounded-tr-[80px];
  }

  &.bottom-left {
    @apply rounded-bl-[80px];
  }

  &.bottom-right {
    @apply rounded-br-[80px];
  }
}
</style>
