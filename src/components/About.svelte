<script>
  import H2 from "./libs/H2.svelte";
  export let title = "";
  export let text = "";
  import { Link } from "svelte-navigator";
</script>

<!-- TITLE -->
<H2 title={"Notre Elevage"} text={" "} />

<!-- GALERIE -->
<section class="mt-40 ">
  <div id="main" class=" container  d-lg-flex ">
    <div
      id="side_left"
      class="d-flex  justify-content-lg-center flex-lg-column  col-lg-4"
    >
      <div class="me-1 mb-lg-2 w-100 ">
        <img
          class=" w-100 "
          style=" object-fit: cover; height: 10rem;"
          src="images/photo groupe/chien.jpg"
          alt="..."
        />
      </div>
      <div class="ms-1 mt-lg-2  w-100 ">
        <img
          class="  w-100"
          style=" object-fit: cover; height: 10rem;"
          src="images/photo groupe/des-chiens.jpg"
          alt="..."
        />
      </div>
    </div>
    <div id="side_right" class="mt-2 col-lg-8">
      <img class="w-100" src="images/photo groupe/Chien3.jpg" alt="..." />
    </div>
  </div>
</section>
<!-- TEXT -->
<section id="texte" class="container my-5">
  <h2>Where can I get some?</h2>
  <p class="container">
    There are many variations of passages of Lorem Ipsum available, but the
    majority have suffered alteration in some form, by injected humour, or
    randomised words which don't look even slightly believable. If you are going
    to use a passage of Lorem Ipsum, you need to be sure there isn't anything
    embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
    the Internet tend to repeat predefined chunks as necessary, making this the
    first true generator on the Internet. It uses a dictionary of over 200 Latin
    words, combined with a handful of model sentence structures, to generate
    Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
    always free from repetition, injected humour, or non-characteristic words
    etc.
  </p>
</section>
<!-- CARD  -->
<section
  id="card"
  class="d-flex flex-column flex-lg-row justify-content-lg-between container col-lg-8"
>
  <!-- CARD 1 -->
  <div class="card mb-2 mb-lg-0 col-lg-5">
    <img
      style="height: 18rem;object-fit: cover;"
      src="images/card notre elevage/maison.jpg"
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
      src="images/card notre elevage/couple-avec-chien.jpg"
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
<!-- TEXT -->
<section id="texte" class="container my-5">
  <h2>Titre cookie caramels</h2>
  <p class="container">
    Marshmallow apple pie topping sugar plum cookie cake fruitcake. Marshmallow
    chocolate cake topping croissant gummi bears apple pie gummies danish jelly.
    Jelly beans jelly-o cotton candy cheesecake tart soufflé. Croissant ice
    cream halvah cake jelly-o tiramisu chocolate bar topping dessert. Cake sweet
    marzipan jujubes chocolate bar pastry icing chupa chups jelly beans. Oat
    cake sweet tootsie roll cookie jelly marzipan donut. Powder caramels danish
    gummi bears chocolate.
  </p>
  <br />
  <p class="container">
    Gingerbread cake cotton candy pie halvah wafer cake chocolate marshmallow.
    Jelly-o macaroon cupcake croissant ice cream donut icing. Dragée lemon drops
    soufflé cheesecake dragée.
  </p>
  <br />
  <p class="container">
    Toffee cake sweet toffee oat cake lollipop icing. Tootsie roll lemon drops
    jelly-o lemon drops pastry cotton candy danish cheesecake. Jelly beans
    chocolate cake tart pudding pudding. Gummies fruitcake chocolate lemon drops
    gingerbread powder powder jujubes pie.
  </p>
  <br />
  <p class="container">
    Pie ice cream wafer lollipop sweet roll bonbon bonbon jujubes cotton candy.
    Cookie caramels gummi bears marshmallow pastry cupcake tiramisu sesame
    snaps. Ice cream cake lemon drops tiramisu chocolate bar chocolate bar
    marzipan powder toffee.
  </p>
  <Link class="text-center col-5 col-lg-2 border nav-link" to="/chiot"
    >Voir plus</Link
  >
</section>

<style>
  h2 {
    text-align: start;
  }
  p {
    text-align: left;
  }
</style>
