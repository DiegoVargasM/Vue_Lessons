<template>
  <div class="home">
    <h1>Computed Values</h1>
    <input type="text" v-model="search" />
    <p>search term: {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleClick">Stop Watching</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";

export default {
  name: "ComputedValues",
  setup() {
    const search = ref("");
    const names = ref(["mario", "yoshi", "luigi", "toad", "bowser", "koopa", "peach"]);

    const stopWatch = watch(search, () => {
      console.log("watch triggered");
    });

    const stopWatchEffect = watchEffect(() => {
      console.log("watchEffect triggered", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopWatchEffect();
    };

    return { names, search, matchingNames, handleClick };
  },
};
</script>
