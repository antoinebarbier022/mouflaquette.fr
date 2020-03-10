<template>
  <div id="notre-groupe">
    <h2 class="phrase-accroche">{{slogan}}</h2>
    <div class="texte-presentation-du-groupe" data-aos="fade-right">

        <TemplateText :text="textPresentation" />

        <h4 >Nous sommes Paul, Aymeric et Amaury, nous formons les Mouflaquettes et voici notre histoire.</h4>
        
        <TemplateTextImage v-for="event in historique" :key="event.id" 
                            :title="event.title" 
                            :text="event.text"
                            :image="event.url"

                            /> <!--pour alterner image/texte on prend l'index %2 qui nous donne 1 ou 0 pour true ou false-->
        


        <!--
        <div class="bloc-image-text" v-for="event in historique" :key="event.id">
            <div class="bloc-text">
                <h4 class="title">{{event.title}}</h4>
                <p class="text">{{event.text}}</p>
            </div>
            {{event.title}}
            {{event.type}}
            {{event.url}}
            <figure :v-if="event.typeMedia!=`no-media`" class="bloc-image">
                <img :src="require('@/assets/photos/'+event.url)" :alt="event.url" title=""/>

                
                <iframe :v-if="event.media==`video`" 
                        width="300" 
                        height="300" 
                        style="box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); border-radius:10px;" 
                        scrolling="no" 
                        frameborder="no" 
                        allow="autoplay" 
                        :src="event.url">
                </iframe>
                
            </figure>
        </div>
        -->

        <iframe width="300" height="300" style="box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); border-radius:10px;" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/693149029&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"></iframe>
        
        <!--
      <audio controls>
        <source src="monAudio.mp3" type="audio/mpeg" />
        <source src="monAudio.ogg" type="audio/ogg" />
        <p>
          Votre navigateur ne prend pas en charge l'audio HTML. Voici un
          <a href="myAudio.mp4">
            lien vers
            le fichier audio
          </a> pour le télécharger.
        </p>
      </audio>
-->
        
      <iframe
        width="560"
        height="300"
        style="box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); border-radius:10px;"
        src="https://www.youtube-nocookie.com/embed/yYwptNiN3qk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      

    </div>
  </div>
</template>

<script>
import TemplateTextImage from "@/components/content/template-text-image.vue"
import TemplateText from "@/components/content/template-text.vue"

    export default {
        name: "Notre-groupe",
        components: {
            TemplateTextImage,
            TemplateText
            },
            data(){
                return{
                    slogan:"Une moustache, des rouflaquettes, c’est mouflaquettes."
                    ,textPresentation: `Groupe de musique électronique aux influences techno, dance et retro, Mouflaquettes est avant tout une bouffée d’énergie et 
                                    de gaieté. Après avoir sortis un premier album, Bouquet subtil, en décembre 2018 et réalisés une série de concerts, 
                                    nous avons produit un nouvel album, Velours, en septembre 2019. Depuis, nous préparons dans 
                                    l’ombre un retour explosif marqué par la sortie de nouveaux titres et le lancement d’une 
                                    nouvelle tournée. Tenez vous prêts, les Mouflaquettes arrivent …`
                    ,historique:
                        [
                            {   id:0,
                                title:"Avril 2018"
                                ,text:`Lors d’une soirée un peu arrosée, Paul nous lance au défi de rapper sur une instru random 
                                        trouvée sur YouTube. Nous trouvons cet exercice fort intéressant et émettons l’idée de former 
                                        un groupe de musique. Coiffés d’une moustache et de rouflaquettes, nous nous appellerons les 
                                        Mouflaquettes.`
                                ,type:"image"
                                ,url:"avril2018.jpg"
                            },
                            {   id:1,
                                title:"Juin 2018"
                                ,text:`Alors que l’idée de former un groupe de musique était restée au stade de « blague de soirée », 
                                        Paul commence à composer des sons sur Garage Band et à les intégrer, incognito, à ses playlists de soirée. 
                                        Amaury, séduit par ce travail, décide d’investir les quelques euros qu’il lui reste en poche à la fin 
                                        du mois dans un clavier maitre et un logiciel de MAO (Musique Assistée par Ordinateur). 
                                        Le processus de production est lancé et ne s’arrêtera plus …`
                                ,type:"audio"
                                ,url:""
                            },
                            {   id:2,
                                title:"Août 2018"
                                ,text:`Nous emménageons ensemble dans un grand appartement à Clermont-Ferrand. Dans cet appartement, 
                                        nous aménageons un studio de musique avec de bonnes enceintes, des mousses acoustiques et bien sûr … 
                                        des LEDs. Ce studio deviendra notre terrier nous y passerons tout notre temps libre.`
                                ,type:"image"
                                ,url:"aout2018.jpg"
                            },
                            {   id:3,
                                title:"Décembre 2018"
                                ,text:`Après des mois de production intense, notre premier album sort. Nous lui donnons 
                                        le nom Bouquet Subtil. Fier de notre réalisation, nous fabriquons 100 exemplaires physiques de 
                                        cet album que nous décidons de déposer dans différents lieux publics de la ville afin de promouvoir 
                                        notre musique. Cette opération nous vaut notre premier article dans la presse.`
                                ,type:"image"
                                ,url:"disques-decembre2018.jpg"
                            },
                            {   id:4,
                                title:"Janvier 2019"
                                ,text:`Nous atteignons les 50 équivalents ventes de notre album. Dans la foulée, nous recevons 
                                        un mail de la SNEP (société qui gère l’industrie du disque en France) nous annonçant que 
                                        nous avons vendu 50 000 albums. Or qui dit 50000 ventes d’album dit disque d’or. 
                                        Croyant à une blague, nous supprimons ce mail sans nous en inquiéter plus que ça. 
                                        Pourtant, une semaine plus tard nous recevons dans notre boîte aux lettres 
                                        un avis de passage de la poste au nom du groupe. Aussi incroyable que cela puisse paraître, 
                                        notre disque d’or venait d’être livré. Nous soupçonnons un bug informatique 
                                        dans les serveurs de la SNEP qui aurait rajouté par erreur trois zéros à 
                                        notre nombre de ventes. Toujours est-il que nous pouvons dire que Bouquet Subtil est disque d’or.`
                                ,type:"image"
                                ,url:"printemps-de-bourges-2019.jpg"
                            },
                            {   id:5,
                                title:"Mars 2019"
                                ,text:`Nous nous produisons pour la première fois en live et devant un public. 
                                        Cette expérience est si intense que nous tombons immédiatement amoureux de la scène. 
                                        Depuis, toutes nos musiques sont spécialement pensées pour le live.`
                                ,type:"video"
                                ,url:""
                            },
                            {   id:6,
                                title:"Avril 2019"
                                ,text:`Nous participons au Printemps de Bourges. L’évènement est si énorme que jamais nous 
                                        n’aurions pu imaginer nous retrouver là un jour. Ce moment reste la plus belle expérience 
                                        de notre jeune carrière et nous offre une visibilité énorme. Par la suite nous prenons 
                                        nos premiers selfies et signons nos premiers autographes. La vie d’artiste est lancée.`
                                ,type:"image"
                                ,url:"printemps-de-bourges-2019.jpg"
                            },
                            {   id:7,
                                title:"Été 2019"
                                ,text:`Nous organisons notre première tournée de concerts, d’Henrichemont à Notre Dame de Monts, 
                                        nous parcourons la France avec pour seul carburant, la passion de la musique.`
                                ,type:"image"
                                ,url:"ete2019.jpg"
                            },
                            {   id:8,
                                title:"Septembre 2019"
                                ,text:`Après un été riche en création et en rencontre, nous sortons notre second album, Velours.
                                    À l’heure actuelle notre plus grande fierté, nous vous invitons à aller l’écouter en cliquant
                                    sur le lien de la plateforme de votre choix`
                                ,type:"no-media"
                                ,url:""
                                
                            }

                        ]

                };
            }
    };
</script>

<style>


#notre-groupe {
  color: white;
  text-align: left;

  /* placer le footer en bas de la page notre groupe */
  min-height: calc(
    100vh - 100px - 60px - 20px - 50px
  ); /* - hauteur du footer et - hauteur du header - 
                                                                        20px(hauteur du padding-top du container) - hauteur du padding-top de ce bloc*/
}
.texte-presentation-du-groupe {
  padding-bottom: 40px;
}

.phrase-accroche {
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 36px;
}

figure {
  margin: 20px 0px 20px 0px;
}

.date {
  font-weight: bold;
}

h4{
    text-align:center;
    font-size: 1.1rem;
}
</style>