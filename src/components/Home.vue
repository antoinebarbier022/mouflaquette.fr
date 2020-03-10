<template>
    <div class="home">
        <div class="link-streaming">  
            <ButtonMusic    class="button-music" title="Youtube"        
                            img="yt_logo_rgb_dark.png"                  
                            link="www.youtube.com/channel/UCIyHFPn31xBb44gqxkoVn9g"
                            data-aos="fade-right"
                            data-aos-duration="1500"
            />
            <ButtonMusic    class="button-music" 
                            title="Deezer"         
                            img="Colored_Full_White@2x.png"             
                            link="www.deezer.com/fr/artist/54676462"
                            data-aos="fade-left"
                            data-aos-duration="1500"
            />
            <ButtonMusic    class="button-music" 
                            title="Spotify"        
                            img="Spotify_Logo_RGB_Green.png"            
                            link="open.spotify.com/artist/09pFOn63ilNCmgccHtQyqE"
                            data-aos="fade-right"
                            data-aos-duration="2500"
            />
            <ButtonMusic    class="button-music" 
                            title="Apple Music"    
                            img="US-UK_Apple_Music_lockup_RGB_wht.svg"  
                            link="itunes.apple.com/ca/artist/mouflaquettes/1444479500"
                            data-aos="fade-left"
                            data-aos-duration="2500"
            />
        </div>
        
        <router-link :to="{name: 'notre-groupe'}">
            <div class="img-mouflaquettes">
            </div>
        </router-link>
        
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
        height:100%;
        display:flex;
            flex-direction: column;
        /* placer le footer en bas de la page notre groupe */
            min-height: calc(100vh - 100px - 70px - 20px - 60px); /* - hauteur du footer et - hauteur du header - 
                                                                    20px(hauteur du padding-top du container) - hauteur du padding-top de ce bloc*/

    }
    .link-streaming{
        width:100%;
        display:flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content:center;
        padding-bottom:50px;
    }
    .button-music{
        margin:20px;
        margin-bottom:0;
    }

    .img-mouflaquettes{
        width:100%;
        height:50vh;
        background-image: url('~@/assets/mouflaquettes.png');
        background-repeat: no-repeat;
        background-size:contain;
        background-position:center;

    }
    

     @media (max-width: 1080px) {
         .home{
             flex-direction: column;
         }
         .img-mouflaquettes{
             width:100%;
             padding-bottom:0px;
             background-size:contain 80%;
              background-position:top;
         }
         .link-streaming{
             width:100%;
             height:280px;
             flex-direction:column;
             justify-content:flex-start;
         }
        .button-music{
            margin: auto;
            margin-bottom:0;
            margin-top:20px;
        }
     }
     

</style>