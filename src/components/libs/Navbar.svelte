<!--src/Components/Navbar/Navbar.svelte-->
<script>
  import { Link } from "svelte-navigator";
  export let navlists = [];
  export let title;
</script>

<section>
  <nav id="nav-bar" class="navbar  fixed-top  navbar-expand-lg ">
    <div class="container-fluid">
      <a id="title" class="navbar-brand company_brand" href="/">
        {title}
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"><img style="width:90%;object-fit: cover;" src="images/menu.png" alt="boutton menu"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          {#each navlists as list}
            <li class="nav-item">
              <Link style="font-family:var(--font-sub-title);color:var(--orange);" class="nav-link " to={list.url}>{list.label}</Link>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </nav>
</section>

<style>
  nav{
    background-color: var(--egg-shell);
  }
  
  #nav-bar {
    font-size: 1rem;
    font-weight: 600;
  }
  #nav-bar a {
    color: var(--orange);
    font-size: 2rem;
    font-family: var(--font-titre);
  }

  .navbar {
    padding: 0 20px !important;
  }

  .navbar-nav li {
    padding: 0 0 0 20px;
  }
 
</style>
