<template>
  <div class="col-xl">
    <div class="instagram-feed">
      <h2>
        <span class="text-default">#</span>zachran<span class="text-default"
          >gastro</span
        >
      </h2>
      <div class="row">
        <div
          v-for="post of posts.slice().reverse()"
          :key="post.id"
          class="d-block col-sm-6 col-md-4 col-lg-4 image-wrapper pt-4"
        >
          <a :href="`${post.link}`">
            <img :src="require(`@/assets/img/${post.image}`)" />
          </a>
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
          image: "gastro_1.jpg",
          link: "https://www.instagram.com/p/B92KjKWnzE9/"
        },
        {
          id: 2,
          image: "gastro_2.jpg",
          link: "https://www.instagram.com/p/B91sXysHAnF/"
        },
        {
          id: 3,
          image: "gastro_3.jpg",
          link: "https://www.instagram.com/p/B92Jp3cHh6I/"
        },
        {
          id: 4,
          image: "gastro_4.jpg",
          link: "https://www.instagram.com/p/B985P9xD_2A/"
        },
        {
          id: 5,
          image: "gastro_5.jpg",
          link: "https://www.instagram.com/p/B986Y0GJVm2/"
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
    // overflow: hidden;

    &:hover {
      img {
        border: 1px solid transparent;
      }
    }
    img {
      // object-fit: cover;
      // height: 100%;
      // left: 0;
      // position: absolute;
      width: 100%;
    }
  }
}

h2 {
  margin-bottom: 1rem;
}
</style>
