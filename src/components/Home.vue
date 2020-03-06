<template>
    <div class="home">
        <div class="link-streaming">  
            <ButtonMusic title="Youtube"        img="yt_logo_rgb_dark.png"                  link=""/>
            <ButtonMusic title="Deezer"         img="Colored_Full_White@2x.png"             link=""/>
            <ButtonMusic title="Spotify"        img="Spotify_Logo_RGB_Green.png"            link=""/>
            <ButtonMusic title="Apple Music"    img="US-UK_Apple_Music_lockup_RGB_wht.svg"  link=""/>
        </div>

        <div class="img-mouflaquettes">

        </div>
    </div>
</template>

<script>
import ButtonMusic from "@/components/buttons/button-music.vue"

export default {
    name: "Home",
    components:{
        ButtonMusic
    }
}
</script>

<style scoped>
    .home{
        width:100%;
        height:calc(100vh - 100px - 60px - 20px - 50px);
        display:flex;  
        background-image: url('~@/assets/mouflaquettes.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position:bottom;
        border-bottom: 1px solid white;

    }
    .link-streaming{
        width:50%;
        display:inline-block;  
    }

    .img-mouflaquettes{
        display:inline-block;  
        width:50%;
        height:300px;

    }

</style>