<template>
  <div id="app" class="container-fluid">
    <div>
      <div class="row bg-pink main-banner">
        <div class="col">
          <div class="banner-positioner">
            <h1 class="text-uppercase bg-white text-default">#zachrangastro</h1>
            <p class="text-body">
              Tržby v gastru se propadly o 84%.
              <br />
              <span class="font-weight-semibold">
                Necháme celou naši gastro scénu padnout, nebo to spolu zvládneme?
              </span>
            </p>
          </div>
        </div>
        <div class="col">
          <social-icons class="social-icons-banner" />
        </div>
      </div>
    </div>
    <home />
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import SocialIcons from "./components/SocialIcons.vue";

export default {
  name: "App",
  components: {
    Home,
    SocialIcons
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300 !important;
}

h1 {
  margin: 1rem 0 1rem 1rem !important;
  padding: 0 1rem !important;
  font-size: 3rem !important;
  font-weight: 700 !important;
  width: fit-content;
}

p {
  margin: 0.75rem 0.25rem !important;
}

.section {
  padding-bottom: 6rem;
}

.font-weight-semibold {
  font-weight: 600;
}

.text-body {
  color: #252525;
}
.social-icons-banner {
  margin-top: 20%;
  float: right;
  a {
    display: block;
    padding: 10px;
  }
}
.banner-positioner {
  padding: 7% 0 42% 35%;
  > p {
    padding-left: 20px;
  }
}
.main-banner {
  background-image: url('assets/img/background.png');
  background-position: top right;
  background-size: 90%;
  background-repeat: no-repeat;
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
</style>
