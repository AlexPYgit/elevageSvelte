<script>
    import DATA from "../Data/data.js";
    import Banner from '../components/libs/Banner.svelte';
    import Carousel from '../components/libs/Carousel.svelte';
    import CardLine from '../components/libs/CardLine.svelte';
    import BannerCard from '../components/libs/BannerCard.svelte';

</script>


<Banner bannerData={DATA.BANNER_DATA}/>
<Carousel/>
<CardLine  title={DATA.CARD_LINE_DATA.CARD_1_TITRE}
text={DATA.CARD_LINE_DATA.CARD_1_TEXT}/>
<BannerCard/>


<style>

</style>