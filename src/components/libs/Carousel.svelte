<script>
    
    import Carousel from 'svelte-carousel';
    import DATA from '../../Data/data.js';
    const Chiots = [...DATA.CHIOTS];
    let carousel;
</script>

<Carousel class=" my-5 h-50"
autoplay
duration={2000}
bind:this={carousel}>
{#each Chiots as chiot }
<div class=" my-lg-3 py-lg-5 h-100 ">
    <img src={chiot.image_url_1}  style=" object-fit: cover;" alt={chiot.alt}>
  </div>{/each}
</Carousel>

<style>
    img{
        width: 40%;
    }
    
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--green);
    }

    @media screen and (max-width:468px)
    {
        img{
            width: 100%;
        }
        div{
            margin: 0;
        }
    }
</style>