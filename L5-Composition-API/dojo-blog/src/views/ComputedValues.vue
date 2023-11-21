<template>
  <div class="home">
    <h1>Computed Values</h1>
    <div v-for="name in names" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "ComputedValues",
  setup() {
    const names = ref(["mario", "yoshi", "luigi", "toad", "bowser", "koopa", "peach"]);

    const name = computed(() => {});

    return { names };
  },
};
</script>
