<script>
  import { Router, Route } from "svelte-navigator";
  import Navbar from "./components/libs/Navbar.svelte";
  import DATA from "./Data/data.js";
  import Accueil from './components/Accueil.svelte';
  import About from "./components/About.svelte";
  import Chiots from "./components/chiots.svelte";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/libs/Footer.svelte";
  import History from './components/History.svelte';

</script>

<Router>
  <hearder>
    <!-- Navbar -->
    <Navbar navlists={DATA.NAVBAR_DATA} title={DATA.TITLE_SITE} />
  </hearder>

  <main>
    <Route path="/">
      <Accueil />
    </Route>

    <Route path="about">
      <About />
    </Route>
    <Route path="chiot">
      <Chiots />
    </Route>
    <Route path="contact">
      <Contact />
    </Route>
    <Route path="history">
      <History />
    </Route>
  </main>

  <!-- Création d'élément -->


  <History />

  <footer>
    <Footer />
  </footer>
</Router>

<style>
/* Varibles */
*{
	--green:#30736C;
	--orange:#bf702a;
	--egg-shell:#f6ecec;
	--red:#cc260c;
	--brown:#590202;
	--font-titre:'Playfair Display', serif;
  --font-sub-title:'Montserrat Alternates', sans-serif;
  --font-text:'Montserrat Alternates', sans-serif;
}

  main {
    text-align: center;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
