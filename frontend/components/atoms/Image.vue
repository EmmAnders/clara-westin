<template>
  <div class="a-image h-[300px] w-full" :class="radius">
    <img
      class="h-full w-full cover"
      src="https://source.unsplash.com/random"
      alt=""
    />
  </div>
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
  img {
    @apply rounded-md;
    box-shadow: 0 0 0 0.5px currentColor;
  }

  &.top-left {
    img {
      @apply rounded-tl-[80px];
    }
  }
  &.top-right {
    img {
      @apply rounded-tr-[80px];
    }
  }

  &.bottom-left {
    img {
      @apply rounded-bl-[80px];
    }
  }

  &.bottom-right {
    img {
      @apply rounded-br-[80px];
    }
  }
}
</style>
