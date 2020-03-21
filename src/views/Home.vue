<template>
  <div>
    <guide-post @on-form-selected="onFormSelected" />
    <div class="row">
      <google-form v-if="showForm" :type="formType" />
      <instagram-feed />
    </div>
    <div class="row position-relative videocard-wrapper">
      <div class="col-auto video-position position-absolute">
        <div class=" video-frame-wrapper bg-white d-flex flex-column">
          <iframe
            src="https://www.youtube-nocookie.com/embed/CrZnw1rirtY?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="video-frame"
          ></iframe>
          <a
            href="https://www.youtube.com/results?search_query=%23ZachranGastro"
            class="btn btn-default col-sm-6 col-md-3 col-lg-4"
          >
            Více videí
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <h3>Naši partneři</h3>
      </div>
    </div>
    <div class="row partners d-flex justify-content-center">
      <div
        class="col-5 col-sm-3"
        v-for="partner in partners"
        :key="partner.alt"
      >
        <a :href="partner.link" target="_blank" rel="noopener noreferrer">
          <img
            :src="require(`@/assets/img/partners/${partner.image}`)"
            :alt="partner.alt"
          />
        </a>
      </div>
    </div>
    <footer class="row">
      <div class="col d-flex align-items-center logo-wrapper">
        <a
          href="https://storyous.com"
          target="_blank"
          class="d-flex align-items-center"
        >
          <svg
            class="storyous-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490.9 54.1"
          >
            <path
              d="M.4 46.2L3.9 40c.6-1 2-.8 2.6-.4.3.1 5.7 4.1 10.7 4.1 3 0 5.2-1.9 5.2-4.5 0-3.2-2.6-5.6-7.7-7.6C8.1 29 0 24 0 15 0 7.5 5.8 0 17.4 0c7.8 0 13.8 4 16.1 5.6.9.5.8 1.9.4 2.4l-3.8 5.8c-.5.8-1.9 1.5-2.6 1-.7-.4-6.2-4.5-10.7-4.5-2.7 0-4.7 1.8-4.7 3.8 0 2.8 2.3 4.9 8.2 7.3 5.9 2.3 15.2 6.9 15.2 17.1 0 7.7-6.7 15.6-17.7 15.6C8 54.1 2.6 50 .9 48.3c-.9-.7-1.1-1-.5-2.1zm62.1-34.4H51.7c-.8 0-1.4-.7-1.4-1.4V2.2c0-.8.6-1.4 1.4-1.4h33.4c.8 0 1.4.7 1.4 1.4v8.2c0 .8-.6 1.4-1.4 1.4H74.3v40.1c0 .8-.7 1.4-1.4 1.4h-9c-.8 0-1.4-.7-1.4-1.4V11.8zM128 0c15 0 27.1 12.1 27.1 27.1 0 15-12 27-27.1 27-15 0-27-11.9-27-27 0-15 12-27.1 27-27.1zm0 42.1c8.3 0 15-6.8 15-15 0-8.3-6.8-15.1-15-15.1s-15 6.8-15 15.1c.1 8.2 6.8 15 15 15zm47.3-39.9c0-.8.6-1.4 1.4-1.4h22.5c9 0 16.4 7.3 16.4 16.2 0 6.9-4.6 12.5-11.1 15.1l10.3 19.1c.5 1 0 2.2-1.3 2.2h-10c-.6 0-1.1-.4-1.2-.7l-10-19.9h-5.2V52c0 .8-.7 1.4-1.4 1.4h-8.9c-.8 0-1.4-.7-1.4-1.4V2.2zm22.9 21c3.1 0 5.7-2.9 5.7-6 0-3.2-2.6-5.7-5.7-5.7h-11.1v11.7h11.1zm48.1 4.8L229.7 2.9c-.6-1 0-2.2 1.2-2.2h9.8c.6 0 1 .4 1.2.7l10.4 15.4 10.4-15.4c.2-.3.5-.7 1.2-.7h9.8c1.2 0 1.8 1.2 1.2 2.2l-16.8 25v24c0 .8-.7 1.4-1.4 1.4h-8.9c-.8 0-1.4-.7-1.4-1.4V28zm70.1-28c15 0 27.1 12.1 27.1 27.1 0 15-12 27-27.1 27-15 0-27-11.9-27-27 0-15 12-27.1 27-27.1zm0 48.9c12 0 21.8-9.8 21.8-21.7 0-11.9-9.8-21.9-21.8-21.9-11.9 0-21.7 9.9-21.7 21.9 0 11.9 9.8 21.7 21.7 21.7zm49-46.7c0-.8.7-1.4 1.4-1.4h2.9c.8 0 1.4.7 1.4 1.4v31.3c0 8.6 5.3 15.3 14.1 15.3 8.9 0 14.3-6.5 14.3-15.1V2.2c0-.8.6-1.4 1.4-1.4h2.9c.8 0 1.4.7 1.4 1.4V34c0 11.4-8.1 20.1-20 20.1-11.8 0-19.8-8.7-19.8-20.1V2.2zm62.3 43.3c.4-.5.8-1 1.1-1.4.8-1 1.6-1.6 2.6-.7.5.4 6 5.7 12.7 5.7 6.1 0 10.1-3.8 10.1-8.3 0-5.2-4.5-8.3-13.2-11.9-8.3-3.6-13.2-7-13.2-15.6 0-5.1 4.1-13.4 16-13.4 7.4 0 12.9 3.8 12.9 3.8.4.2 1.4 1.1.4 2.6-.3.4-.6 1-.9 1.4-.7 1.1-1.4 1.4-2.6.7-.5-.3-5.3-3.5-9.8-3.5-8 0-10.4 5.1-10.4 8.3 0 5 3.8 8 10.1 10.6 10.1 4.1 16.7 8 16.7 16.7 0 7.8-7.4 13.5-16.2 13.5-8.9 0-14.9-5.2-15.9-6.1-.6-.4-1.3-1-.4-2.4zm56-5.7c3.9 0 7.2 3.3 7.2 7.2 0 3.8-3.3 7.1-7.2 7.1-3.8 0-7.1-3.2-7.1-7.1 0-3.9 3.2-7.2 7.1-7.2z"
              fill="#fff"
            />
          </svg>
        </a>
      </div>
      <div class="col footer-some">
        <social-icons class="some-icons-footer" />
      </div>
    </footer>
  </div>
</template>

<script>
import GuidePost from "../components/GuidePost.vue";
import GoogleForm from "../components/GoogleForm.vue";
import InstagramFeed from "../components/InstagramFeed.vue";
import SocialIcons from "../components/SocialIcons.vue";

export default {
  name: "App",
  data() {
    return {
      showForm: false,
      formType: null,
      partners: [
        { link: "https://www.makro.cz", image: "partner_1.png", alt: "Makro" },
        {
          link: "https://www.kofola.cz",
          image: "partner_2.png",
          alt: "Kofola"
        },
        { link: "http://amsp.cz", image: "partner_4.png", alt: "AMSP" },
        { link: "https://www.kosik.cz", image: "partner_5.png", alt: "Kosik" },
        { link: "https://mallpay.cz", image: "partner_6.png", alt: "Mall Pay" },
        { link: "https://www.csob.cz", image: "partner_7.png", alt: "CSOB" }
      ]
    };
  },
  methods: {
    onFormSelected(type) {
      if (type !== this.formType) {
        this.showForm = true;
      }
      if (type === this.formType) {
        this.showForm = !this.showForm;
      }
      this.formType = type;
    }
  },
  components: {
    GuidePost,
    GoogleForm,
    InstagramFeed,
    SocialIcons
  }
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 2rem 0;
}

.videocard-wrapper {
  height: 230px;

  @media (min-width: 751px) and (max-width: 1199px) {
    height: 184px;
  }

  @media (min-width: 650px) and (max-width: 750px) {
    height: 200px;
  }

  @media (min-width: 550px) and (max-width: 649px) {
    height: 135px;
  }

  @media (min-width: 450px) and (max-width: 549px) {
    height: 180px;
  }

  @media (max-width: 449px) {
    height: 105px;
  }
}

.video-position {
  top: -350px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 550px) and (max-width: 750px) {
    top: -260px;
  }

  @media (max-width: 549px) {
    top: -160px;
  }
}

.video-frame-wrapper {
  padding: 1rem;
  filter: drop-shadow(0px 0px 7px #00000020);
}

.video-frame {
  width: 660.8px;
  height: 371.7px;
  margin-bottom: 1rem;

  @media (min-width: 650px) and (max-width: 750px) {
    width: 560px;
    height: 315px;
  }

  @media (min-width: 550px) and (max-width: 649px) {
    width: 459px;
    height: 258px;
  }

  @media (min-width: 450px) and (max-width: 549px) {
    width: 358px;
    height: 201px;
  }

  @media (min-width: 350px) and (max-width: 449px) {
    width: 257px;
    height: 144px;
  }

  @media (min-width: 320px) and (max-width: 349px) {
    width: 229px;
    height: 129px;
  }
}

.partners {
  margin-bottom: 30px;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media (min-width: 1200px) {
    padding-left: 15rem;
    padding-right: 15rem;
  }

  img {
    max-width: 100%;
  }
}

.storyous-logo {
  width: 150px;
  margin-left: 3.3rem;

  @media (max-width: 767px) {
    margin-left: 0;
  }
}

.footer-some {
  margin-right: 2.7rem;

  @media (max-width: 767px) {
    margin-right: 0;
  }
}

footer {
  -webkit-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  background-color: #252524;
  color: white;

  div:first-child {
    text-align: left;
  }

  div:last-child {
    text-align: right;
  }

  @media (max-width: 476px) {
    flex-direction: column;
    padding: 30px 20px;

    .logo-wrapper {
      justify-content: center;
    }

    .some-icons-footer {
      display: flex;
      justify-content: center;
      margin-top: 1.5rem;
    }
  }
}
</style>
