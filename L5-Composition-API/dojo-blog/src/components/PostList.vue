<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
import { onMounted, onUpdated, onUnmounted } from "vue";

export default {
  name: "PostList",
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    onMounted(() => console.log("component mounted"));
    onUpdated(() => console.log("component updated"));
    onUnmounted(() => console.log("component unmounted"));
  },
};
</script>

<style scoped></style>
