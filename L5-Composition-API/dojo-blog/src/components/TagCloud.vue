<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }"> # {{ tag }} </router-link>
    </div>
  </div>
</template>

<script>
import useTags from "../composables/useTags";

export default {
  name: "TagCloud",
  props: ["posts"],
  setup(props) {
    const { tags } = useTags(props.posts);
    console.log(tags, "tags");
    return { tags };
  },
};
</script>

<style scoped></style>
