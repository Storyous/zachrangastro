<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="bg-default col text-center">
        <h1 class="text-uppercase bg-white text-default">#zachrangastro</h1>
        <p class="text-body">
          Tržby v gastru se propadly o 84%.
          <span class="font-weight-semibold"
            >Necháme celou naši gastro scénu padnout, nebo to spolu
            zvládneme?</span
          >
        </p>
      </div>
      <div class="col"></div>
    </div>
    <home />
  </div>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300 !important;
}

h1 {
  margin: 1rem auto !important;
  padding: 0 1rem !important;
  font-size: 3rem !important;
  font-weight: 700 !important;
  width: fit-content;
}

p {
  font-size: 1.25rem;
  margin: 1rem !important;
}

.font-weight-semibold {
  font-weight: 600;
}

.text-body {
  color: #252525;
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
