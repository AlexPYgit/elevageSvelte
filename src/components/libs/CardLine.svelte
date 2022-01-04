<script>
  export let text = "";
  export let title = "";
  import { Link } from "svelte-navigator";
</script>

<section>
  <!-- CARD 1 -->
  <div class="  container col-12 d-flex flex-column flex-lg-row ">
    <img
      class=" rounded col-lg-4 "
      src="images/cardLine/couple de chien.jpg"
      alt="..."
    />
    <div class="card-body">
      <h2 class=" text-center text-lg-start">{title}</h2>
      <p class="card-text text-start">{text}</p>
      <div class="container">
        <Link class="text-center col-5 col-md-2 col-lg-2 nav-link border" to="chiot">Voir plus</Link>
      </div>
    </div>
  </div>

  <!-- CARD 2 -->
  <div class=" container mt-5 col-12 d-flex flex-column flex-lg-row-reverse  ">
    <img class=" rounded col-lg-4" src="images/cardLine/l'élevage.jpg" alt="..." />
    <div class="card-body d-flex flex-column ">
      <h2 class=" text-center text-lg-end">{title}</h2>
      <p class="card-text text-start  text-lg-end">{text}</p>
      <div class="container d-flex justify-content-lg-end">
        <Link id="btn" class=" text-center  nav-link col-5 col-md-2 col-lg-2 border" to="about">Voir plus</Link>
      </div>
    </div>
  </div>
</section>

<style>
  img {
    object-fit: cover;
  }
</style>
