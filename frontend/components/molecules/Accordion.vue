<template>
  <div class="m-accordion w-full">
    <ul class="accordion">
      <li
        class="first:border-t border-b border-light-green py-2 cursor-pointer"
        :class="{ open: isActive(index) }"
        v-for="(item, index) in items"
        :key="index"
        @click="toggleAccordion(index)"
      >
        <div class="flex items-center justify-between">
          <h4 class="uppercase font-primary">Something</h4>
          <AtomsIconsArrow
            class="transition transform ease-in-out duration-500"
            :class="isActive(index) ? '-rotate-90' : 'rotate-90'"
          />
        </div>
        <transition
          name="expand"
          @enter="transitionStart"
          @after-enter="transitionEnd"
          @before-leave="transitionStart"
          @after-leave="transitionEnd"
        >
          <div v-show="isActive(index)" class="accordion-item">
            <slot name="item" :item="item">
              {{ item }}
            </slot>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

let currentIndex = ref(null);

function toggleAccordion(index) {
  if (currentIndex.value === index) {
    currentIndex.value = null;
  } else {
    currentIndex.value = index;
  }
}

function isActive(index) {
  return currentIndex.value == index;
}

function transitionStart(el) {
  el.style.height = el.scrollHeight + "px";
}

function transitionEnd(el) {
  el.style.height = "";
}
</script>

<style lang="scss">
.m-accordion {
  .expand-enter-active,
  .expand-leave-active {
    will-change: height, opacity;
    transition: height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;
  }
  .expand-enter,
  .expand-leave-to {
    height: 0 !important;
    opacity: 0;
  }
}
</style>
