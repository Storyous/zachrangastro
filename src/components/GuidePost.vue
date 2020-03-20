<template>
  <section class="row bg-pink section guide-post d-flex justify-content-center">
    <div class="col-xl-4 col-md-6 card-wrapper">
      <h2 class="text-center">Jsem hladový<br />a chci…</h2>

      <div
        class="card large-card border-0 border-radius-ld d-flex justify-content-between"
      >
        <div class="icon-section text-center">
          <img
            :src="require(`@/assets/img/icons/zachrangastro_kdesenajim.png`)"
            alt=""
          />
        </div>
        <div class="row pl-3 pr-3">
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

    <div class="col-xl-4 col-md-6 small-cards-wrapper">
      <h2 class="text-center">Jsem restauratér<br />a potřebuji…</h2>
      <div class="row">
        <div class="col-sm-6 mb-xs card-wrapper">
          <div class="card h-100 border-0 d-flex justify-content-between">
            <div class="icon-section text-center">
              <img
                :src="require(`@/assets/img/icons/zachrangastro_rozvoz.png`)"
                alt=""
              />
            </div>
            <a
              class="card-link bg-default"
              @click="$emit('on-form-selected', 'delivery')"
            >
              <p class="text-white text-center">Rozvážet jídlo</p>
            </a>
          </div>
        </div>

        <div class="col-sm-6 card-wrapper">
          <div class="card h-100 border-0 d-flex justify-content-between">
            <div class="icon-section text-center">
              <img
                :src="
                  require(`@/assets/img/icons/zachrangastro_prodejssebou.png`)
                "
                alt=""
              />
            </div>
            <a
              class="card-link bg-default"
              @click="$emit('on-form-selected', 'takeaway')"
            >
              <p class="text-white text-center">Prodávat jídlo s sebou</p>
            </a>
          </div>
        </div>

        <div class="col-sm-6 mb-xs card-wrapper gap">
          <div class="card h-100 border-0 d-flex justify-content-between">
            <div class="icon-section text-center ">
              <img
                :src="require(`@/assets/img/icons/zachrangastro_dodvatele.png`)"
                alt=""
              />
            </div>
            <a
              class="card-link bg-default"
              @click="$emit('on-form-selected', 'supplier')"
            >
              <p class="text-white text-center">Dodavatele surovin</p>
            </a>
          </div>
        </div>

        <div class="col-sm-6 card-wrapper gap">
          <div class="card h-100 border-0 d-flex justify-content-between">
            <div class="icon-section text-center">
              <img
                :src="require(`@/assets/img/icons/zachrangastro_personal.png`)"
                alt=""
              />
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
      <h2 class="text-center">Jsem číšník, kuchař<br />a chci dělat…</h2>
      <div
        class="card large-card border-0 border-radius-ru d-flex justify-content-between"
      >
        <div class="icon-section text-center">
          <img
            :src="require(`@/assets/img/icons/zachrangastro_cisnik.png`)"
            alt=""
          />
        </div>
        <div class="row pl-3 pr-3">
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
export default {
  data() {
    return {
      icons: [
        {
          img1: "zachrangastro_kdesenajim.png"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@media (min-width: 768px) {
  .guide-post {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

.card {
  border-radius: 0;
  filter: drop-shadow(0px 0px 7px #00000020);

  .icon-section {
    height: 100%;
    padding: 0 1.5rem;

    img {
      width: 100%;
    }
  }

  .card-link {
    border-radius: 10px;
    margin: 0 1rem 1rem 1rem;
    cursor: pointer;

    p {
      margin: 1rem;
      font-weight: 400;
    }
  }
}

.card-wrapper {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.small-cards-wrapper {
  margin-bottom: 2rem;
}

.large-card {
  margin-bottom: 2rem;
}

.gap {
  margin-top: 1rem;
}

.border-radius-ld {
  border-radius: 0 0 0 10%;

  @media (max-width: 1200px) {
    border-radius: 0 0 0 0;
  }
}

.border-radius-ru {
  border-radius: 0 10% 0 0;

  @media (max-width: 1200px) {
    border-radius: 0 0 0 0;
  }
}

@media (max-width: 576px) {
  .mb-xs {
    margin-bottom: 13px;
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
  margin-bottom: 2rem;
}
</style>
