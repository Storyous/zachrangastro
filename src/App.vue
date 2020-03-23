<template>
  <div id="app" class="container-fluid">
    <div>
      <div class="row bg-pink main-banner">
        <div class="col-md-9 col-lg-7">
          <div class="row">
            <picture class="w-100 d-xs-block d-md-none">
              <source
                :srcset="require(`@/assets/img/background-mobile_4.png`)"
                media="(min-width: 650px)"
                class="w-100"
              />
              <source
                :srcset="require(`@/assets/img/background-mobile_3.png`)"
                media="(min-width: 530px)"
                class="w-100"
              />
              <source
                :srcset="require(`@/assets/img/background-mobile_2.png`)"
                media="(min-width: 400px)"
                class="w-100"
              />
              <img
                class="w-100"
                :src="require(`@/assets/img/background-mobile.png`)"
                alt="An illustration of waiter."
              />
            </picture>
          </div>
          <div class="banner-positioner">
            <h1 class="text-uppercase bg-white text-default">
              <a
                href="https://www.instagram.com/explore/tags/zachrangastro/"
                target="_blank"
                rel="noopener noreferrer"
                class="page-title"
                >#zachrangastro</a
              >
            </h1>
            <p class="text-body">
              Tržby v gastru se propadly o 84%.
              <br />
              <span class="font-weight-semibold">
                Necháme celou naši gastro scénu padnout, nebo to spolu
                zvládneme?
              </span>
            </p>
          </div>
        </div>
        <div class="col-md-3 col-lg-5 d-none d-xl-block">
          <social-icons class="some-icons-banner" />
        </div>
      </div>
    </div>
    <home />
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import SocialIcons from "./components/SocialIcons.vue";
import { forms } from "./googleForms";

export default {
  name: "App",
  components: {
    Home,
    SocialIcons
  },
  mounted() {
    if (!this.$isMobile) {
      Object.values(forms).forEach(form => {
        const preloadLink = document.createElement("link");
        preloadLink.href = form.link;
        preloadLink.rel = "preload";
        preloadLink.as = "document";
        window.document.head.appendChild(preloadLink);
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Open Sans", sans-serif;
  font-weight: 300 !important;
  overflow-x: hidden;
}

h1 {
  margin: 1rem 0 1rem 1rem !important;
  padding: 0 1rem !important;
  font-size: 3rem !important;
  font-weight: 700 !important;
  width: fit-content;

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 2.5rem !important;
  }

  @media (max-width: 767px) {
    margin: 1rem auto !important;
  }

  @media (max-width: 500px) {
    font-size: 2rem !important;
  }

  @media (max-width: 347px) {
    font-size: 1.75rem !important;
  }

  a {
    color: #f05a5a;
  }
  > a:hover {
    color: #f05a5a;
    text-decoration: none;
  }
}

h2 {
  font-size: 1.5rem !important;
}

p {
  margin: 0.75rem 0.25rem !important;
  font-size: 1.2rem;

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }

  @media (max-width: 466px) {
    font-size: 1rem;
  }
}

.section {
  padding-bottom: 4rem;

  @media (min-width: 768px) {
    padding-bottom: 7rem;
  }
}

.font-weight-semibold {
  font-weight: 600;
}

.text-body {
  color: #252525;
}
.some-icons-banner {
  margin-top: 6rem;
  margin-right: 3rem;
  float: right;

  a {
    display: block;
    padding: 10px;
  }
}
.banner-positioner {
  padding: 6rem 0 42% 25%;
  > p {
    padding-left: 30px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    padding: 4rem 0 42% 25%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 3rem 0 42% 23%;
  }

  @media (max-width: 767px) {
    padding: 2rem 0 0 0;
    width: fit-content;
    margin: 0 auto;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);

    > p {
      padding-left: 15px;
      width: fit-content;
      width: 431px;
    }
  }

  @media (max-width: 500px) {
    top: 0;
    > p {
      padding-left: 16px;
      padding-right: 16px;
      width: 298px;
    }
  }

  @media (max-width: 347px) {
    > p {
      width: 265px;
    }
  }
}
.main-banner {
  background-image: url("assets/img/background.png");
  background-position: 4.5rem top;
  background-size: 100%;
  background-repeat: no-repeat;

  @media (min-width: 1701px) {
    background-position: 4.5rem -10rem;
  }

  @media (min-width: 1600px) and (max-width: 1700px) {
    background-position: 4.5rem -6rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    background-position: 4.7rem top;
    background-size: 110%;
  }

  @media (max-width: 767px) {
    background-image: none;
  }
}

.bg-pink {
  background-color: #ffeae5;
}

.bg-default {
  background-color: #f05a5a;
}

.text-default {
  color: #f05a5a;
}

.btn-default {
  background-color: #f05a5a !important;
  color: #fff !important;
  margin: 1rem auto;
  padding: 1rem 0.5rem;

  &:hover {
    background-color: darken(#f05a5a, 5%) !important;
  }
}
</style>
