<template>
  <section class="row bg-pink section">
    <div class="col-xl-4 col-md-6 card-wrapper">
      <h2 class="text-center">Jsem hladový a chci…</h2>
      <div class="card border-0 d-flex justify-content-between">
        <div class="icon-section text-center">
          <i class="fas fa-cart-plus"></i>
        </div>
        <div class="row">
          <div class="col-sm-3" />
          <a
            class="card-link bg-default col-sm-6"
            href="http://www.kdesenajim.cz"
            target="blank"
          >
            <p class="text-white text-center">Objednat jídlo s sebou</p>
          </a>
          <div class="col-sm-30" />
        </div>
      </div>
    </div>

    <div class="col-xl-4 col-md-6 card-wrapper">
      <h2 class="text-center">Jsem restauratér a potřebuji…</h2>
      <div class="row mb-2">
        <div class="col-sm-6 ">
          <div class="card border-0 d-flex justify-content-between">
            <div class="icon-section text-center">
              <i class="fas fa-car-side"></i>
            </div>
            <a
              class="card-link bg-default"
              @click="$emit('on-form-selected', 'delivery')"
            >
              <p class="text-white text-center">Rozvážet jídlo</p>
            </a>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card border-0 d-flex justify-content-between">
            <div class="icon-section text-center">
              <i class="fas fa-briefcase"></i>
            </div>
            <a
              class="card-link bg-default"
              @click="$emit('on-form-selected', 'takeaway')"
            >
              <p class="text-white text-center">Prodávat jídlo s sebou</p>
            </a>
          </div>
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-sm-6">
          <div class="card border-0 d-flex justify-content-between">
            <div class="icon-section text-center ">
              <i class="fas fa-people-carry"></i>
            </div>
            <a
              class="card-link bg-default"
              @click="$emit('on-form-selected', 'supplier')"
            >
              <p class="text-white text-center">Dodavatele surovin</p>
            </a>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card border-0 d-flex justify-content-between">
            <div class="icon-section text-center">
              <i class="fas fa-user-friends"></i>
            </div>
            <a
              class="card-link bg-default"
              @click="$emit('on-form-selected', 'personnel')"
            >
              <p class="text-white text-center">Personál</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xl-4 col-md-6 card-wrapper">
      <h2 class="text-center">
        Jsem číšník, kuchař a chci dělat…
      </h2>
      <div class="card border-0 d-flex justify-content-between">
        <div class="icon-section text-center">
          <i class="fas fa-shipping-fast"></i>
        </div>
        <div class="row">
          <div class="col-sm-3" />
          <a
            class="card-link bg-default col-sm-6"
            @click="$emit('on-form-selected', 'waiter')"
          >
            <p class="text-white text-center">
              Rozvoz jídla
            </p>
          </a>
          <div class="col-sm-3" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.card-wrapper {
  margin-bottom: 2rem;
}

.card {
  border-radius: 0;

  .icon-section {
    height: 100%;
  }

  .card-link {
    border-radius: 10px;
    margin-bottom: 1rem;
    cursor: pointer;

    p {
      margin: 1rem;
      font-weight: 400;
    }
  }
}

.fas {
  color: #f05a5a;
  display: flex;
  height: 100%;

  &::before {
    font-size: 2rem;
    margin: auto;
  }
}

h2 {
  font-size: 1.5rem;
}
</style>
