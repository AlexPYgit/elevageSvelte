<script>
  import DATA from "../Data/historiquePortée";

  console.log(DATA);
  const année = 2021;
  console.log(DATA);
</script>

<scetion>
  <div class="container">
    <h2>Tout nos chiots</h2>
  </div>
{#each DATA[année] as portée}

<p>{portée.id}</p>

{/each}
</scetion>

<style>
    
  h2 {
    margin-top: 40px;
  }
</style>
