<template>
  <div class="single-post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  props: ["post"],
};
</script>

<style scoped></style>
