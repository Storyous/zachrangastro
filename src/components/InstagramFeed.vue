<template>
  <div>
    <div class="instagram-feed">
      <h2>
        <span class="text-default">#</span>zachran<span class="text-default"
          >gastro</span
        >
      </h2>
      <div class="row">
        <div
          v-for="post of posts"
          :key="post.id"
          class="d-block col-sm-6 col-md-4 col-lg-4 image-wrapper pt-4"
        >
          <img :src="require(`@/assets/img/${post.image}`)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          image: "gastro_1.jpg"
        },
        {
          id: 2,
          image: "gastro_2.jpg"
        },
        {
          id: 3,
          image: "gastro_3.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.instagram-feed {
  margin: 1rem;
  border: 1px solid #d45354;
  padding: 1.5rem;
  border-radius: 10px;

  h2 {
    margin-bottom: 0;
  }

  .image-wrapper {
    img {
      width: 100%;
    }
  }
}

h2 {
  margin-bottom: 1rem;
}
</style>
