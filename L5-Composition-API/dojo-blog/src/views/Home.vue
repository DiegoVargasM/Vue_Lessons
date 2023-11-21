<template>
  <div class="home">
    Home
    <!-- Second, we assign the ref property  -->
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    console.log("setup");

    let name = "mario";
    let age = 30;

    // First, we need to create a reference to the element we want to target
    const p = ref(null);

    const handleClick = () => {
      console.log(p, p.value);
      p.value.classList.add("test");
      p.value.textContent = "Hello, ninjas";
    };

    return { name, age, handleClick, p };
  },
};
</script>
