<template>
  <div class="lg:grid lg:grid-cols-12 gap-x-14 w-full h-[50vh]">
    <AtomsImage
      class="lg:col-span-6"
      :class="reorder ? 'order-1' : ''"
      :radius="imageRadius"
    />

    <div class="lg:col-span-6 h-full">
      <div class="pb-12 pt-6 lg:pt-0">
        <h2>Voluptatem Sequi quia</h2>
        <p class="pt-4">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident
        </p>
      </div>
      <MoleculesPrimaryButton>Education hub</MoleculesPrimaryButton>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  reorder: {
    type: Boolean,
    default: false,
    required: false,
  },

  imageRadius: {
    type: String,
    require: false,
  },
});
</script>
