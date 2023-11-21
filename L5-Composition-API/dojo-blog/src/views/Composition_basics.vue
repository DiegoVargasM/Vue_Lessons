<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Luigi is 35</button>
    <input type="text" v-model="name" />
    <button @click="age++">Increase age</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CompositionBasics",
  setup() {
    console.log("setup");

    // We can use ref to create reactive variables
    // const means the reference object is constant, but the value can change
    const name = ref("mario");
    const age = ref(30);

    const p = ref(null);

    // We can change the value of the reference object and it will be reactive
    const handleClick = () => {
      name.value = "luigi";
      age.value = 35;
    };

    return { name, age, handleClick, p };
  },
};
</script>
