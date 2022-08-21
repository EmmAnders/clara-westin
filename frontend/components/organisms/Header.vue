<template>
  <header class="flex justify-between items-center -mx-8 px-8 py-4">
    <div class="w-1/2">
      <AtomsLogo></AtomsLogo>
    </div>
    <div class="w-1/2 flex justify-end">
      <MoleculesNavigation :items="items"></MoleculesNavigation>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const items = ref(["Education hub", "Work with me", "About", "Contact"]);
</script>
