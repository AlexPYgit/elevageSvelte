<!--src/Components/Banner/Banner.svelte-->
<script>
  export let bannerData = {};
  const { HEADING, DECRIPTION } = bannerData;
</script>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section
  style="background-image: url(./images/wave1.png);background-repeat:no-repeat;background-size:130%;"
  class="  container-fluid "
  id="banner"
>
  <div class=" ">
    <div class="row">
      <div class="col-md-6">
        <h1>{HEADING}</h1>
        <p class="fs-4">{DECRIPTION}</p>
        
      </div>
    </div>
  </div>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->

<!------------------------------------------->
<style>
  section {
    padding-top: 5%;
  }

  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-top: 100px;
    text-transform: uppercase;
  }
p{
  font-weight: 300;
}
 
</style>
