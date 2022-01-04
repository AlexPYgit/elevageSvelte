<script>
  export let title;
  export let text;
</script>

<div class="mb-5 text-start">
  <h2 class=" mb-5">{title}</h2>
  <h3>{text}</h3>
</div>

<style>
  div {
    padding: 30px;
  }

  h2 {
    color: rgb(55, 55, 78);
    font-size: 3em;
    margin-top: 2%;
  }

  h3 {
    font-size: 1em;
    color: rgb(102, 99, 99);
  }
</style>
