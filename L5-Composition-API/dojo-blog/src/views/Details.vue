<template>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>
<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router";

export default {
  name: "Details",
  props: ["id"],
  components: {
    Spinner,
  },
  setup(props) {
    // sometimes we may not have the id on the props
    // (e.g. if the component is not a route component)
    const route = useRoute();
    const { post, error, load } = getPost(route.params.id);

    load();

    return { post, error };
  },
};
</script>

<style>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
