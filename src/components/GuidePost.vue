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
        <div class="row ml-3 mr-3 d-flex flex-column">
          <a
            class="col-sm-6 btn btn-default btn-block"
            href="http://www.kdesenajim.cz"
            target="blank"
            >Objednat jídlo s sebou
          </a>
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
            <div class="ml-3 mr-3">
              <a
                class="btn btn-default btn-block"
                @click="$emit('on-form-selected', 'delivery')"
                >Rozvážet jídlo
              </a>
            </div>
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
            <div class="ml-3 mr-3">
              <a
                class="btn btn-default btn-block"
                @click="$emit('on-form-selected', 'takeaway')"
                >Prodávat jídlo s sebou
              </a>
            </div>
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
            <div class="ml-3 mr-3">
              <a
                class="btn btn-default btn-block"
                @click="$emit('on-form-selected', 'supplier')"
              >
                Dodavatele surovin
              </a>
            </div>
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
            <div class="ml-3 mr-3">
              <a
                class="btn btn-default btn-block"
                @click="$emit('on-form-selected', 'personnel')"
                >Personál
              </a>
            </div>
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
        <div class="row ml-3 mr-3 d-flex flex-column">
          <a
            class="col-sm-6 btn btn-default btn-block"
            @click="$emit('on-form-selected', 'waiter')"
          >
            Rozvoz jídla
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

  @media (max-width: 539px) {
    &:last-of-type {
      margin-top: 0;
    }
  }
}

.border-radius-ld {
  border-radius: 0 0 0 10%;

  @media (max-width: 1200px) {
    border-radius: 0 0 0 0;
  }
}

.border-radius-ru {
  border-radius: 0 10% 0 0;

  @media (max-width: 1199px) {
    border-radius: 0 0 0 0;
  }
}

@media (max-width: 575px) {
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
