<template>
  <h1>Job Details Page</h1>
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
  props: ["id"],
  name: "JobDetails",
  data() {
    return {
      // id: this.$route.params.id (we have props now)
    };
  },
};
</script>

<style></style>
