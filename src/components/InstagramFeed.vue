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
          class="d-none d-md-block col-sm-4 col-md-3 col-lg-3 image-wrapper pt-3"
        >
          <a :href="`${post.link}`" target="_blank" rel="noopener noreferrer">
            <img :src="require(`@/assets/img/${post.image}`)" />
          </a>
        </div>
        <div
          id="carouselControls"
          class="carousel slide d-block d-md-none"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div
              v-for="(post, i) of posts.slice(0, 4).reverse()"
              :key="i"
              :class="{ active: i === activeItem }"
              class="carousel-item carousel-image-wrapper"
            >
              <a
                :href="`${post.link}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img :src="require(`@/assets/img/${post.image}`)" />
              </a>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            role="button"
            data-slide="prev"
            v-on:click="showPreviousSlide()"
          >
            <span aria-hidden="true"
              ><i class="fas fa-chevron-left chevron-icon"></i
            ></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            role="button"
            data-slide="next"
            v-on:click="showNextSlide()"
          >
            <span aria-hidden="true"
              ><i class="fas fa-chevron-right chevron-icon"></i
            ></span>
            <span class="sr-only">Next</span>
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
      ],
      activeItem: 0
    };
  },
  methods: {
    showNextSlide() {
      // If it's the last slide, roll back to the beginning
      if (this.activeItem >= this.posts.length - 1) {
        this.activeItem = 0;
      } else {
        this.activeItem += 1;
      }
    },
    showPreviousSlide() {
      // If it's the first slide, roll back to the end
      if (this.activeItem <= 0) {
        this.activeItem = this.posts.length - 1;
      } else {
        this.activeItem -= 1;
      }
    }
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
  .carousel {
    margin: 2rem 5rem 0 5rem;

    @media (max-width: 480px) {
      margin: 2rem 3.5rem 0 3.5rem;
    }

    .carousel-image-wrapper {
      a {
        img {
          display: block;
          width: 100%;
        }
      }
    }

    .carousel-control-prev {
      @media (min-width: 671px) {
        left: -15%;
      }

      @media (min-width: 530px) {
        left: -17%;
      }

      left: -20%;

      @media (min-width: 401px) and (max-width: 480px) {
        left: -17%;
      }

      @media (max-width: 400px) {
        left: -21%;
      }
    }

    .carousel-control-next {
      @media (min-width: 671px) {
        right: -15%;
      }

      @media (min-width: 530px) and (max-width: 670px) {
        right: -17%;
      }

      right: -20%;

      @media (min-width: 401px) and (max-width: 480px) {
        right: -17%;
      }

      @media (max-width: 400px) {
        right: -21%;
      }
    }

    .chevron-icon {
      color: #57131f;
      font-size: 3rem;
    }
  }
}
</style>
