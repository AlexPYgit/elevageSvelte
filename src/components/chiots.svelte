<script>
  import DATA from "../Data/data.js";

  const Chiots = [...DATA.CHIOTS];
</script>

<h2 class="container">ici la parite des chiots</h2>
<div
  class="p-3 d-flex flex-column justify-content-lg-evenly flex-lg-row flex-lg-wrap"
>
  {#each Chiots as chiot}
    <a href="#{chiot.id}" class="link-secondary">
      <div style="height: 200px;" class=" chiot-card my-5 mx-lg-3">
        <h4 class="link-secondary text-center">{chiot.name}</h4>
        <img
          class="w-100 h-100"
          style="object-fit: cover;"
          src={chiot.image_url_1}
          alt={chiot.alt}
        />
      </div>
    </a>
  {/each}
</div>
<!-- CARDS parents -->
<h2 class="container">Les parents chien</h2>
<section
  id="card"
  class="d-flex my-5 flex-column flex-lg-row justify-content-lg-between container col-lg-8"
>
  <!-- CARD 1 -->
  <div class="card mb-2 mb-lg-0 col-lg-5">
    <img
      style="height: 18rem;object-fit: cover;"
      src="images/parents portées/pap chien.jpg"
      class="card-img-top w-100"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title text-center">Card title</h5>
      <p class="card-text text-center">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.Some quick example text to build on the card title
        and make up the bulk of the card's content.Some quick example text to
        build on the card title and make up the bulk of the card's content.
      </p>
    </div>
  </div>
  <!-- CARD 2 -->
  <div class="card mt-2 mt-lg-0 col-lg-5">
    <img
      style="height: 18rem;object-fit: cover;"
      src="images/parents portées/mama chien.jpeg"
      class="card-img-top w-100 "
      alt="..."
    />
    <div class="card-body ">
      <h5 class="card-title text-center ">Card title</h5>
      <p class="card-text text-center">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.Some quick example text to build on the card title
        and make up the bulk of the card's content.Some quick example text to
        build on the card title and make up the bulk of the card's content.
      </p>
    </div>
  </div>
</section>
<!-- GALERIE -->
{#each Chiots as chiot}
<section id="{chiot.id}" class=" ">
  <div class="nav-item">
    <h2 class="nav-link text-center mt-3 "> {chiot.name}</h2>
  </div>
  <div id="main" class=" container  d-lg-flex ">
    <div
      id="side_left"
      class="d-flex  justify-content-lg-center flex-lg-column  col-lg-4"
    >
      <div class="me-1 mb-lg-2 w-100 ">
        <img
          class=" w-100 "
          style=" object-fit: cover; height: 10rem;"
          src={chiot.image_url_1}
          alt="..."
        />
      </div>
      <div class="ms-1 mt-lg-2  w-100 ">
        <img
          class="  w-100"
          style=" object-fit: cover; height: 10rem;"
          src={chiot.image_url_2}
          alt="..."
        />
      </div>
    </div>
    <div id="side_right" class="mt-2 col-lg-8">
      <img class="w-100" 
      src={chiot.image_url_2}
      alt="..." />
    </div>
  </div>
  
</section>
{/each}

<style>
  .margin-top{
    margin-top: 10%;
  }
  h2 {
    margin-top: 40px;
  }

  a:hover {
    box-shadow: 0px 15px 15px 10px rgba(0, 0, 0, 0.192);
    transition: 0.5s;
  }

  @media screen and (min-width: 768px) {
    .chiot-card {
      width: 300px;
    }
  }
</style>
