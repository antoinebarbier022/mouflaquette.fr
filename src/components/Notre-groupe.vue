<template>
  <div id="notre-groupe">
    <h2 class="phrase-accroche">Une moustache, des rouflaquettes, c’est mouflaquettes.</h2>
    <div class="texte-presentation-du-groupe">
      <p>Groupe de musique électronique aux influences techno, dance et retro, Mouflaquettes est avant tout une bouffé d’énergie et de gaieté. Après avoir sorti un premier album, Bouquet subtil, en décembre 2018 et réalisé une série de concerts, nous avons produit un nouvel album, Velours, en septembre 2019. Depuis, nous préparons dans l’ombre un retour explosif marqué par la sortie de nouveaux titres et le lancement d’une nouvelle tournée. Tenez vous prêts, les Mouflaquettes arrivent …</p>
      <br>
      <h4 style="text-align:center">Nous sommes Paul, Aymeric et Amaury, nous formons les Mouflaquettes et voici notre histoire.</h4>
      <br>
      <p><span class="date">Avril 2018</span>  <br>Lors d’une soirée un peu arrosée, Paul nous lance au défi de rapper sur une instru random trouvée sur YouTube. Nous trouvons cet exercice fort intéressant et émettons l’idée de former un groupe de musique. Coiffés d’une moustache et de rouflaquettes, nous nous appellerons les Mouflaquettes.</p>
      <br>
      <p><span class="date">Juin 2018</span>  <br>Alors que l’idée de former un groupe de musique était restée au stade de « blague de soirée », Paul commence à composer des sons sur Garage Band et à les intégrer, incognito, à ses playlists de soirée. Amaury, séduit par ce travail, décide d’investir les quelques euros qu’il lui reste en poche à la fin du mois dans un clavier maitre et un logiciel de MAO (Musique Assistée par Ordinateur). Le processus de production est lancé et ne s’arrêtera plus …</p>
      <br>
      <p><span class="date">Août 2018</span>  <br>Nous emménageons ensemble dans un grand appartement à Clermont-Ferrand. Dans cet appartement, nous aménageons un studio de musique avec de bonnes enceintes, des mousses acoustiques et bien sûr … des LEDs. Ce studio deviendra notre terrier nous y passons tout notre temps libre.</p>
      <br>
      <p><span class="date">Décembre 2018</span>  <br>Après des mois de production intense, notre premier album sort. Nous lui donnons le nom Bouquet Subtil. Fier de notre réalisation, nous fabriquons 100 exemplaires physique de cet album que nous décidons de déposer dans différents lieux publics de la ville afin de promouvoir notre musique. Cette opération nous vaut notre premier article dans la presse.</p>
      <br>
      <p><span class="date">Janvier 2019</span>  <br>Nous atteignons les 50 équivalents ventes de notre album. Dans la foulée, nous recevons un mail de la SNEP (société qui gère l’industrie du disque en France) nous annonçant que nous avons vendu 50 000 albums. Or qui dit 50000 ventes d’album dit disque d’or. Croyant à une blague nous supprimons ce mail sans nous en inquiéter plus que ça. Pourtant, une semaine plus tard nous recevons dans notre boîte aux lettres un avis de passage de la poste au nom du groupe. Aussi incroyable que cela puisse paraître, notre disque d’or venait d’être livré. Nous soupçonnons un bug informatique dans les serveurs de la SNEP qui aurait rajouté par erreur trois zéros à notre nombre de ventes mais ne connaissons toujours pas la raison officielle de cet évènement. Toujours est-il que nous pouvons dire que Bouquet Subtil est disque d’or.</p>
      <br>
      <p><span class="date">Mars 2019</span>  <br>Nous nous produisons pour la première fois en live et devant un public. Cette expérience est si intense que nous tombons immédiatement amoureux de la scène. Depuis, toutes nos musiques sont spécialement pensées pour le live.</p>
      <br>
      <p><span class="date">Avril 2019</span> <br>Nous participons au Printemps de Bourges. L’évènement est si énorme que jamais nous n’aurions pu imaginer nous retrouver là un jour. Ce moment reste la plus belle expérience de notre jeune carrière et nous offre une visibilité énorme. Par la suite nous prenons nos premiers selfies et signons nos premiers autographes. La vie d’artiste est lancée.</p>
      <figure>
          <img style="width:100%" src="@/assets/photos/printemps-de-bourges-2019.jpg" alt="Printemps de Bourges 2019" title="Printemps de Bourges 2019"/>
        </figure>
      <br>
      <p><span class="date">Été 2019</span> <br>Nous organisons notre première tournée de concerts, d’Henrichemont à Notre Dame de Monts, nous parcourons la France avec pour seul carburant la passion de la musique.</p>
      <br>
      <p><span class="date">Septembre 2019</span> <br>Après un été riche en création et en rencontre, nous sortons notre second album, Velours. A l’heure actuelle notre plus grande fierté, nous vous invitons à aller l’écouter en cliquant sur le lien de la plateforme de votre choix 
          (<a href="#">Youtube</a>, <a href="#">Spotify</a>, <a href="#">Deezer</a>, <a href="#">Apple Music</a>).
          </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notre-groupe"
};
</script>

<style scoped>

.date{
    font-weight: bold;
}

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
</style>