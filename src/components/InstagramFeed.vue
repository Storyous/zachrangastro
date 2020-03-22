<template>
  <section class="col-12 bg-pink space-for-video">
    <div class="instagram-feed">
      <h3 class="instagram-hashtag">
        <a
          href="https://www.instagram.com/explore/tags/zachrangastro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          #zachrangastro
        </a>
      </h3>
      <div class="row">
        <div
          v-for="post of posts.slice(0, 4).reverse()"
          :key="post.id"
          class="d-block col-sm-4 col-md-3 col-lg-3 image-wrapper pt-3"
        >
          <a :href="`${post.link}`" target="_blank" rel="noopener noreferrer">
            <img :src="require(`@/assets/img/${post.image}`)" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          image: "gastro_1.jpg",
          link: "https://www.instagram.com/p/B9_mks-H8GH/"
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
          link: "https://www.instagram.com/p/B989kfigMgh/"
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

.space-for-video {
  padding-bottom: 30rem;

  @media (min-width: 550px) and (max-width: 750px) {
    padding-bottom: 22rem;
  }

  @media (max-width: 549px) {
    padding-bottom: 14rem;
  }
}

.instagram-feed {
  @media (min-width: 768px) {
    margin: 0 5rem;
  }

  .instagram-hashtag {
    text-align: center;
    a {
      color: #343a40;
    }
    > a:hover {
      color: #f05a5a;
    }
  }

  .image-wrapper {
    padding-left: 0.5rem;
    padding-right: 0.5rem;

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
      border: 7px solid #fff;
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
