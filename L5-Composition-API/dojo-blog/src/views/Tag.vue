<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-else-if="posts.length" class="layout">
      <PostList :posts="tagPosts" />
      <TagCloud :posts="posts" />
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
import TagCloud from "../components/TagCloud.vue";

export default {
  name: "Tag",
  components: { Spinner, PostList, TagCloud },
  setup() {
    const { posts, error, load } = getPosts();
    load();

    const route = useRoute();
    const tag = route.params.tag;
    console.log(tag, "tag");

    //array of posts that have the tag
    const tagPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    console.log(tagPosts, "tagPosts");

    return { posts, error, tagPosts };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
