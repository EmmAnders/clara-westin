<template>
  <div
    v-if="items"
    :class="
      items.length <= 3
        ? 'flex flex-col md:flex-row space-y-12 md:space-y-0 items-center justify-center '
        : 'grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-12'
    "
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex flex-col flex-1 justify-center items-center"
    >
      <AtomsCircle class="mb-4">{{ alphabet[index] }}</AtomsCircle>
      <h4 class="subtitle mb-2">{{ item.title }}</h4>
      <p class="max-w-[200px] text-center">
        {{ item.content }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const alphabet = ref([
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "Å",
  "Ä",
  "Ö",
]);
</script>
