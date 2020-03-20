<template>
  <div>
    <div class="row">
      <guide-post @on-form-selected="onFormSelected" />
      <google-form v-if="showForm" :type="formType" />
      <instagram-feed />
    </div>
    <div class="row">
      <div class="col text-center">
        <h3>Naši partneři</h3>
      </div>
    </div>
    <div class="row partners">
      <div class="col" v-for="partner in partners" :key="partner.alt">
        <a :href="partner.link" target="_blank">
          <img
            :src="require(`@/assets/img/${partner.image}`)"
            :alt="partner.alt"
          />
        </a>
      </div>
    </div>
    <footer class="row">
      <div class="col">
        <a href="https://storyous.com" target="_blank">
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
      <div class="col">
        <a href="https://www.facebook.com/storyous" target="_blank">
          <svg
            id="icon-facebook"
            viewBox="0 0 20 20"
            width="100%"
            height="100%"
          >
            <title>facebook</title>
            <path
              d="M20 3.33A3.45 3.45 0 0 0 16.67 0H3.33A3.45 3.45 0 0 0 0 3.33v13.34A3.45 3.45 0 0 0 3.33 20H10v-7.56H7.56V9.11H10v-1.3c0-2.24 1.68-4.26 3.75-4.26h2.69v3.34h-2.69c-.29 0-.64.36-.64.89v1.33h3.33v3.33h-3.33V20h3.56A3.45 3.45 0 0 0 20 16.67z"
            ></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/storyous/" target="_blank">
          <svg
            id="icon-instagram"
            viewBox="0 0 20 20"
            width="100%"
            height="100%"
          >
            <title>instagram</title>
            <path
              d="M13.75 0h-7.5A6.25 6.25 0 0 0 0 6.25v7.5A6.25 6.25 0 0 0 6.25 20h7.5A6.25 6.25 0 0 0 20 13.75v-7.5A6.25 6.25 0 0 0 13.75 0zm4.38 13.75a4.38 4.38 0 0 1-4.37 4.38H6.25a4.38 4.38 0 0 1-4.37-4.37V6.25a4.38 4.38 0 0 1 4.37-4.37h7.5a4.38 4.38 0 0 1 4.38 4.38z"
            ></path>
            <path
              d="M10 5a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8.13A3.13 3.13 0 1 1 13.13 10 3.13 3.13 0 0 1 10 13.13z"
            ></path>
            <circle cx="15.38" cy="4.63" r="1"></circle>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/storyous-com-s-r-o-"
          target="_blank"
        >
          <svg
            id="icon-linkedin"
            viewBox="0 0 19.96 19.96"
            width="100%"
            height="100%"
          >
            <title>linkedin</title>
            <path
              d="M18.49 0h-17A1.45 1.45 0 0 0 0 1.43v17.1A1.45 1.45 0 0 0 1.47 20h17A1.45 1.45 0 0 0 20 18.53V1.43A1.45 1.45 0 0 0 18.49 0zM6.05 16.71H3v-9h3zM4.54 6.46a1.56 1.56 0 1 1 0-3.11 1.56 1.56 0 1 1 0 3.11zm12.38 10.25h-3v-4.82c0-1.21-.44-2-1.53-2a1.65 1.65 0 0 0-1.55 1.1 2 2 0 0 0-.1.73v5h-3v-9h3V9a3 3 0 0 1 2.72-1.49c2 0 3.47 1.29 3.47 4.06zM10.71 9v-.06V9z"
            ></path>
          </svg>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import GuidePost from "../components/GuidePost.vue";
import GoogleForm from "../components/GoogleForm.vue";
import InstagramFeed from "../components/InstagramFeed.vue";

export default {
  name: "App",
  data() {
    return {
      showForm: false,
      formType: null,
      partners: [
        { link: "http://storyous.com", image: "partner_1.jpg", alt: "Makro" },
        { link: "http://storyous.com", image: "partner_2.jpg", alt: "Kofola" },
        {
          link: "http://storyous.com",
          image: "partner_3.jpg",
          alt: "Plzensky Prazdroj"
        },
        { link: "http://storyous.com", image: "partner_4.jpg", alt: "AMSP" },
        { link: "http://storyous.com", image: "partner_5.jpg", alt: "Kosik" },
        {
          link: "http://storyous.com",
          image: "partner_6.jpg",
          alt: "Mall Pay"
        },
        { link: "http://storyous.com", image: "partner_7.jpg", alt: "CSOB" }
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
    InstagramFeed
  }
};
</script>

<style lang="scss" scoped>
.partners {
  margin-bottom: 30px;
  img {
    max-width: 100%;
  }
}
.storyous-logo {
  width: 120px;
}
#icon-facebook,
#icon-instagram,
#icon-linkedin {
  max-width: 20px;
  fill: #fff;
  margin: 0 10px;
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
}
</style>
