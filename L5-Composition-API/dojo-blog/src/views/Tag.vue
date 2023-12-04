<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-else-if="posts.length">
      <PostList :posts="tagPosts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import PostList from "../components/PostList.vue";

export default {
  name: "Tag",
  components: { Spinner, PostList },
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

    return { posts, error, tagPosts };
  },
};
</script>

<style></style>
