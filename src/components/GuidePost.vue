<template>
  <div>
    <div class="card border-0 row">
      <div class="col p-4">
        <h2>Jsem <span class="text-default">hladový</span> a chci…</h2>
        <div class="row">
          <div class="col-md-6">
            <a
              class="card-link bg-gray row"
              href="http://www.kdesenajim.cz"
              target="blank"
              rel="noopener noreferrer"
            >
              <div class="icon-section col-3"></div>
              <div class="text-section bg-white col-9">
                <p class="text-default">Objednat jídlo s sebou</p>
              </div>
            </a>
          </div>
          <!-- <div class="col-md-6">
            <a class="card-link bg-gray row" href="">
              <div class="icon-section col-3"></div>
              <div class="text-section bg-white col-9">
                <p class="text-default">Dovézt jídlo</p>
              </div>
            </a>
          </div> -->
        </div>
      </div>
    </div>

    <div class="card border-0 row">
      <div class="col p-4">
        <h2>Jsem <span class="text-default">restauratér</span> a potřebuji…</h2>
        <div class="row">
          <div class="col-md-6">
            <a
              class="card-link bg-gray row"
              href="https://docs.google.com/forms/d/1b45vWFV_3mPlW07nFoaAH_GQSfzma8u5-ZO_AnDc13c/edit"
            >
              <div class="icon-section col-3"><i class="fas fa-car"></i></div>
              <div class="text-section bg-white col-9">
                <p class="text-default">Rozvážet jídlo</p>
              </div>
            </a>
          </div>
          <div class="col-md-6">
            <a
              class="card-link bg-gray row"
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1zq8vseXmaiABAEZAE826nYJJum9-eE96F6cf0D4ldiRQLw/viewform"
              target="blank"
              rel="noopener noreferrer"
            >
              <div class="icon-section col-3"></div>
              <div class="text-section bg-white col-9">
                <p class="text-default">Prodávat jídlo s sebou</p>
              </div>
            </a>
          </div>
          <div class="col-md-6">
            <a
              class="card-link bg-gray row"
              href="https://docs.google.com/forms/d/19ezYuPkXIktpI5komA80ddhWtsS9FC6UgAlA3p_3ld0/edit"
            >
              <div class="icon-section col-3"></div>
              <div class="text-section bg-white col-9">
                <p class="text-default">Dodavatele surovin</p>
              </div>
            </a>
          </div>
          <div class="col-md-6">
            <a
              class="card-link bg-gray row"
              href="https://docs.google.com/forms/d/12qXlyPsQh4GkvQ98YWWwKwscXehCWZ_CQcfDZf3a5rw/edit"
            >
              <div class="icon-section col-3"></div>
              <div class="text-section bg-white col-9">
                <p class="text-default">Personál</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="card border-0 row">
      <div class="col p-4">
        <h2>
          Jsem <span class="text-default">číšník</span>,
          <span class="text-default">kuchař</span> a chci dělat…
        </h2>
        <div class="row">
          <div class="col-md-6">
            <a class="card-link bg-gray row" href="">
              <div class="icon-section col-3"></div>
              <div class="text-section bg-white col-9">
                <p class="text-default">
                  Rozvoz jídla
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.card {
  background-color: #eeeeee;
  border-radius: 10px;
  margin: 1rem;

  .card-link {
    border-radius: 10px;
    border: 1px solid #5a5a5a;
    margin: 1rem 0 1rem 0;

    .icon-section {
      border-radius: 10px 0 0 10px;
    }

    .text-section {
      border-radius: 0 10px 10px 0;

      p {
        margin: 1rem;
        font-weight: 400;
      }
    }

    &:hover {
      .text-section,
      .text-section:hover {
        background-color: #f8f8f8 !important;
      }

      p,
      p:hover {
        color: darken(#d45354, 20%);
      }
    }
  }
}

h2 {
  font-size: 1.5rem;
}
</style>
