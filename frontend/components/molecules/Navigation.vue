<template>
  <ul class="flex space-x-6">
    <li
      class="hover:opacity-hover cursor-pointer"
      v-for="(item, index) in items"
      :key="index"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
