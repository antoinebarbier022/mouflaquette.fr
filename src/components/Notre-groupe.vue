<template>
    <div id="notre-groupe">
        <h2 class="phrase-accroche">Une moustache, des rouflaquettes, c’est mouflaquettes.</h2>
        <div class="texte-presentation-du-groupe">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at fringilla velit. 
                Cras dignissim imperdiet ex sed imperdiet. Vestibulum sit amet eros aliquam, semper turpis sit amet, 
                sollicitudin massa. Nunc egestas enim ut leo finibus, eu tempor diam dictum. Aliquam ac nisi ex. 
                Sed accumsan fermentum ipsum, vitae luctus felis. Maecenas tempor tincidunt diam. 
                Aliquam vestibulum neque at erat feugiat, ut lobortis nisi porttitor. 
                Suspendisse tempus facilisis dolor nec feugiat. Duis at nunc eget libero dapibus facilisis. 
                Morbi elementum luctus lacus, vel imperdiet arcu interdum a. Aliquam dignissim, sapien tristique viverra 
                sodales, diam lorem sollicitudin augue, vel ullamcorper lectus lectus sed diam.
                Morbi eu urna mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Cras maximus rhoncus lacus, vitae commodo nulla. Curabitur aliquet rhoncus viverra. Vivamus iaculis libero luctus, 
                mollis sem sit amet, molestie turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Nam convallis nunc mi, condimentum interdum justo aliquet at. Ut placerat, sapien quis sagittis euismod, 
                nulla dolor pellentesque nisi, a pharetra turpis mi id nisl. Curabitur ut turpis fermentum, tempor dui a, 
                lobortis enim. In vehicula tristique massa, at vestibulum diam placerat sed. Mauris a massa tincidunt, sollicitudin ante vel, 
                tincidunt tellus.
            </p>
            
        </div>
        
        <h3>Notre histoire</h3>
    </div>
</template>

<script>
export default {
    name: "Notre-groupe"
}
</script>

<style scoped>
    #notre-groupe{
        color:white;
        text-align: left;

        /* placer le footer en bas de la page notre groupe */
            min-height: calc(100vh - 100px - 60px - 20px - 50px); /* - hauteur du footer et - hauteur du header - 
                                                                    20px(hauteur du padding-top du container) - hauteur du padding-top de ce bloc*/
            padding-top: 50px;
    }
    .texte-presentation-du-groupe{
        padding-bottom:40px;
    }

    .phrase-accroche{
        text-align: center;
        padding-top:40px;
        padding-bottom:40px;
        font-size: 2.5vw;
    }
</style>