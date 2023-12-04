<template>
  <div class="tag">
    <h1>tags</h1>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner.vue";

export default {
  name: "Tag",
  components: { Spinner },
  setup() {
    const { posts, error, load } = getPosts();

    load();
    console.log(posts);

    return { posts, error };
  },
};
</script>

<style></style>
