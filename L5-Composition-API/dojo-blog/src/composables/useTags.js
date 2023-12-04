// take an array of posts
// create a new tag set (like an array with no duplicates)
// add the tags of each post to the created tag set
// return an array of tags based on the set

import { ref } from "vue";

const useTags = (posts) => {
  const tags = ref([]);

  // we dont need reactivity here, so we dont use ref
  const tagSet = new Set();

  posts.forEach((item) => {
    // any duplicates will be ignored (Set)
    item.tags.forEach((tag) => tagSet.add(tag));
  });

  // spread the set into an array
  tags.value = [...tagSet];

  return { tags };
};
