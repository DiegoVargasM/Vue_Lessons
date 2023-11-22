<template>
  <div class="home">
    <h1>Welcome to the Home page!</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      { title: "My first post", body: "Lorem ipsum.", id: 1 },
      { title: "My second post", body: "Lorem ipsum.", id: 2 },
    ]);

    return { posts };
  },
};
</script>
