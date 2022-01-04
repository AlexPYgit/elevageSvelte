<script>
  import TITLE from './H2.svelte';
import { Link } from 'svelte-navigator';
import DATA from '../../Data/data.js';
const Chiots = [...DATA.CHIOTS];
</script>

<TITLE title="Nos chiots" text={'Bonbon caramels chocolate shortbread bear claw. Tart carrot cake gummi bears jelly sesame snaps pastry.'} />

<div class="container my-5  col-lg-6">
  <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
      <div class="carousel-inner">
        {#each Chiots as chiot}
        { #if chiot.id == 1 } 
        <div class="carousel-item active ">
          <img src={chiot.image_url_1} class="d-block w-70" style="height: 15rem; object-fit: cover;" alt={chiot.alt}>
        </div>
        {:else if chiot.id > 1}
        <div class="carousel-item  ">
          <img src={chiot.image_url_1} class="d-block w-70" style="height: 15rem; object-fit: cover;" alt={chiot.alt}>
        </div>
        {/if}
        {/each}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container d-flex justify-content-end">
      <Link id="btn" class="nav-link my-3 col-5 col-lg-2 border" to="chiot"> Voir plus </Link>
    </div>
</div>

<style>
  
</style>