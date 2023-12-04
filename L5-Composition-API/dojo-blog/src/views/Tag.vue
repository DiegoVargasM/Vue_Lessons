<template>
  <div class="tag">
    <h1>tags</h1>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "Tag",
  components: { Spinner },
  setup() {
    const { posts, error, load } = getPosts();
    load();

    const route = useRoute();
    const tag = route.params.tag;
    console.log(tag, "tag");

    //array of posts that have the tag
    const tagPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(tag));
    });

    console.log(tagPosts, "tagPosts");

    return { posts, error };
  },
};
</script>

<style></style>
