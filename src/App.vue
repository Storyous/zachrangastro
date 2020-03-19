<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="bg-default col text-center text-white">
        <h1>#<span class="text-dark">zachran</span>gastro</h1>
      </div>
    </div>
    <div class="row">
      <div class="bg-gray col text-center text-white">
        <p>
          Tržby v gastru se propadly o 84%.
          <span class="font-weight-semibold"
            >Necháme celou naši gastro scénu padnout, nebo to spolu
            zvládneme?</span
          >
        </p>
      </div>
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
  font-size: 3rem !important;
  margin: 1rem !important;
}

p {
  font-size: 1.25rem;
  margin: 1rem !important;
}

.font-weight-semibold {
  font-weight: 600;
}

.bg-default {
  background-color: #d45354;
}

.text-default {
  color: #d45354;
}

.bg-gray {
  background-color: #5a5a5a;
}
</style>
