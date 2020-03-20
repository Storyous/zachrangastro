<template>
  <div class="col-xl">
    <div class="instagram-feed">
      <a href="https://www.instagram.com/explore/tags/zachrangastro/?hl=cs">
        <h2 class="text-dark">
          <span class="text-default">#</span>zachran<span class="text-default"
            >gastro</span
          >
        </h2>
      </a>
      <div class="row">
        <div
          v-for="post of posts.slice().reverse()"
          :key="post.id"
          class="d-block col-sm-6 col-md-4 col-lg-4 image-wrapper pt-4"
        >
          <a :href="`${post.link}`" target="_blank" rel="noopener noreferrer">
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
  margin: 1rem 0;
  border: 1px solid #f05a5a;
  padding: 1.5rem;
  border-radius: 10px;

  a {
    &:hover {
      text-decoration: none;
    }
  }

  h2 {
    margin-bottom: 0;
  }

  .image-wrapper {
    &:hover {
      img {
        filter: brightness(0.9);
      }
    }

    a {
      overflow: hidden;
      display: block;
      position: relative;
      height: 100%;
      padding-bottom: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      position: absolute;
      display: block;
    }
  }
}

h2 {
  margin-bottom: 1rem;
}
</style>
