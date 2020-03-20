<template>
  <div class="col-12">
    <div class="instagram-feed">
      <h3 class="instagram-hashtag">
        <a href="https://www.instagram.com/explore/tags/zachrangastro/">
          #zachrangastro
        </a>
      </h3>
      <div class="row">
        <div
          v-for="post of posts.slice().reverse()"
          :key="post.id"
          class="d-block col-sm-4 col-md-3 col-lg-3 image-wrapper pt-3"
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
a:hover {
  text-decoration: none;
}
.instagram-feed {
  margin: 1rem;
  padding: 1.5rem;

  .instagram-hashtag {
    text-align: center;
    a {
      color: #343a40;
    }
    > a:hover {
      color: #d45354;
    }
  }

  .image-wrapper {
    &:hover {
      img {
        filter: brightness(0.8);
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
</style>
