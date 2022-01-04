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
  main {
    text-align: center;
    margin: 0 auto;
  }
 
  /* h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	} */

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
