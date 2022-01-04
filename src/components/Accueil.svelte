<script>
    import DATA from "../Data/data.js";
    import Banner from '../components/libs/Banner.svelte';
    import Caroussel from '../components/libs/Caroussel.svelte';
    import CardLine from '../components/libs/CardLine.svelte';
    import BannerCard from '../components/libs/BannerCard.svelte';

</script>


<Banner bannerData={DATA.BANNER_DATA}/>
<Caroussel />
<CardLine  title={DATA.CARD_LINE_DATA.CARD_1_TITRE}
text={DATA.CARD_LINE_DATA.CARD_1_TEXT}/>
<BannerCard/>


<style>

</style>