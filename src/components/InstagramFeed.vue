<template>
  <div>
    <div class="instagram-feed">
      <h2>
        <span class="text-default">#</span>zachran<span class="text-default"
          >gastro</span
        >
      </h2>
      <div v-for="post of posts" :key="post.id"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.instagram-feed {
  margin: 1rem;
  border: 1px solid #d45354;
  padding: 1rem;
  border-radius: 10px;
}

h2 {
  margin-bottom: 1rem;
}
</style>
