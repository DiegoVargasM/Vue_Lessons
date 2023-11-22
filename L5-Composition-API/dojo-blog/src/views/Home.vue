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
      {
        title: "My first post",
        body:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit platea sociis, ligula penatibus velit sagittis lacus felis nam ad, vel malesuada tempor vulputate parturient phasellus porttitor fringilla. Vestibulum torquent at tristique potenti purus montes ultrices elementum quisque, senectus dictum sed condimentum pretium habitasse taciti nullam nulla per, nibh est urna mollis nunc facilisi lobortis praesent. Class lacinia libero metus in curae natoque iaculis pellentesque cursus, aliquam cum blandit ullamcorper tempus venenatis pulvinar hac, justo nascetur mus congue dictumst placerat odio massa. Augue convallis quam interdum sociosqu laoreet eros arcu ridiculus, sodales tincidunt mauris mi non morbi nec enim gravida, imperdiet lectus netus bibendum scelerisque mattis accumsan. A fames litora egestas luctus ultricies dis duis rutrum, hendrerit orci himenaeos maecenas magnis quis etiam suspendisse, semper volutpat erat posuere fermentum auctor euismod. Rhoncus ante conubia proin commodo aptent ornare sollicitudin, feugiat faucibus dignissim facilisis fusce porta eleifend, ut et eu nostra consequat diam.",
        id: 1,
      },
      {
        title: "My second post",
        body:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit platea sociis, ligula penatibus velit sagittis lacus felis nam ad, vel malesuada tempor vulputate parturient phasellus porttitor fringilla. Vestibulum torquent at tristique potenti purus montes ultrices elementum quisque, senectus dictum sed condimentum pretium habitasse taciti nullam nulla per, nibh est urna mollis nunc facilisi lobortis praesent. Class lacinia libero metus in curae natoque iaculis pellentesque cursus, aliquam cum blandit ullamcorper tempus venenatis pulvinar hac, justo nascetur mus congue dictumst placerat odio massa. Augue convallis quam interdum sociosqu laoreet eros arcu ridiculus, sodales tincidunt mauris mi non morbi nec enim gravida, imperdiet lectus netus bibendum scelerisque mattis accumsan. A fames litora egestas luctus ultricies dis duis rutrum, hendrerit orci himenaeos maecenas magnis quis etiam suspendisse, semper volutpat erat posuere fermentum auctor euismod. Rhoncus ante conubia proin commodo aptent ornare sollicitudin, feugiat faucibus dignissim facilisis fusce porta eleifend, ut et eu nostra consequat diam.",
        id: 2,
      },
    ]);

    return { posts };
  },
};
</script>
