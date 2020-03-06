<template>
    <div class="home">
        <div class="link-streaming">  
            <ButtonMusic class="button-music" title="Youtube"        img="yt_logo_rgb_dark.png"                  link=""/>
            <ButtonMusic class="button-music" title="Deezer"         img="Colored_Full_White@2x.png"             link=""/>
            <ButtonMusic class="button-music" title="Spotify"        img="Spotify_Logo_RGB_Green.png"            link=""/>
            <ButtonMusic class="button-music" title="Apple Music"    img="US-UK_Apple_Music_lockup_RGB_wht.svg"  link=""/>
        </div>
        <!--
        <div class="img-mouflaquettes">

        </div>
        -->
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
        display:flex;  
            justify-content: flex-start;
        /* placer le footer en bas de la page notre groupe */
            min-height: calc(100vh - 100px - 60px - 20px - 60px); /* - hauteur du footer et - hauteur du header - 
                                                                    20px(hauteur du padding-top du container) - hauteur du padding-top de ce bloc*/
        padding-top: 60px;

    }
    .link-streaming{
        width:100%;
        display:flex;
            flex-direction: column;
            
        margin-bottom:20px;
    }
    .button-music{
        margin-top:20px;
        margin-bottom:0;
    }
/* 
    .img-mouflaquettes{
        display:flex;
        width:50%;
                background-image: url('~@/assets/mouflaquettes.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position:bottom;

    }
    */

     @media (max-width: 740px) {
         .home{
             justify-content: center;   
         }
        .button-music{
            margin: auto;
            margin-bottom:0;
            margin-top:20px;
        }
     }

</style>