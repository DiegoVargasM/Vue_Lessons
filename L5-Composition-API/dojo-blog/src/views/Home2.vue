<template>
  <div class="home">
    <h1>Home 2</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Home2",
  setup() {
    const ninjaOne = ref({ name: "Pepe", age: 30 });

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    return { ninjaOne, updateNinjaOne };
  },
};
</script>
