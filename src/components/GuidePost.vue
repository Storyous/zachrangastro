<template>
  <section class="row bg-pink section guide-post d-flex justify-content-center">
    <div class="col-xl-4 col-md-6 card-wrapper position-relative">
      <h2 class="text-center position-absolute">Jsem hladový<br />a chci…</h2>

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
            class="col-sm-6 btn btn-default w-100"
            href="http://www.kdesenajim.cz"
            target="blank"
            >Objednat jídlo s sebou
          </a>
          <div class="safari_only"></div>
        </div>
      </div>
    </div>

    <div class="col-xl-4 col-md-6 card-wrapper position-relative">
      <h2 class="text-center position-absolute">
        Jsem restauratér<br />a potřebuji…
      </h2>
      <div class="row">
        <div class="col-sm-6 mb-xs small-card">
          <div class="card h-100 border-0 d-flex justify-content-between">
            <div class="icon-section text-center">
              <img
                :src="require(`@/assets/img/icons/zachrangastro_rozvoz.png`)"
                alt=""
              />
            </div>
            <div class="ml-3 mr-3">
              <a
                class="btn btn-default w-100"
                @click="handleFormOpen(types.DELIVERY)"
                >Rozvážet jídlo
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-6 small-card">
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
                class="btn btn-default w-100"
                @click="handleFormOpen(types.TAKEAWAY)"
                >Prodávat jídlo s sebou
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-6 mb-xs small-card gap">
          <div class="card h-100 border-0 d-flex justify-content-between">
            <div class="icon-section text-center ">
              <img
                :src="require(`@/assets/img/icons/zachrangastro_dodvatele.png`)"
                alt=""
              />
            </div>
            <div class="ml-3 mr-3">
              <a
                class="btn btn-default w-100"
                @click="handleFormOpen(types.SUPPLIER)"
              >
                Dodavatele surovin
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-6 small-card gap">
          <div class="card h-100 border-0 d-flex justify-content-between">
            <div class="icon-section text-center">
              <img
                :src="require(`@/assets/img/icons/zachrangastro_personal.png`)"
                alt=""
              />
            </div>
            <div class="ml-3 mr-3">
              <a
                class="btn btn-default w-100"
                @click="handleFormOpen(types.PERSONNEL)"
                >Personál
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xl-4 col-md-6 card-wrapper position-relative">
      <h2 class="text-center position-absolute">
        Jsem číšník, kuchař<br />a chci dělat…
      </h2>
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
            class="col-sm-6 btn btn-default w-100"
            @click="handleFormOpen(types.WAITER)"
          >
            Rozvoz jídla
          </a>
          <div class="safari_only"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import googleForms from "../googleForms.js";

export default {
  data() {
    return {
      types: googleForms.types
    };
  },
  methods: {
    handleFormOpen(type) {
      if (this.$isMobile) {
        const win = window.open(googleForms.links[type], "_blank");
        win.focus();
      } else {
        this.$emit("on-form-selected", type);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  border-radius: 0;
  filter: drop-shadow(0px 0px 7px #00000020);

  .icon-section {
    height: 100%;
    padding: 0 1.5rem;

    img {
      width: 80%;
    }
  }
}

.guide-post {
  @media (min-width: 768px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media (min-width: 768px) and (max-width: 1078px) {
    margin-top: -5rem;
  }

  @media (min-width: 1078px) {
    margin-top: -3.5rem;
  }

  .card-wrapper {
    margin-top: 100px;

    @media (min-width: 768px) and (max-width: 1199px) {
      &:last-of-type {
        margin-top: 140px;
      }
    }

    &:first-of-type,
    &:last-of-type {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    h2 {
      top: -80px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
    }
  }
}

.large-card {
  margin-bottom: 2rem;
  height: 100%;
}

.small-card {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
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

@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    .safari_only {
      height: 24px;
    }
  }
}
</style>
