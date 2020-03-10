<template>
    <div class="template-text-image">
        <div class="bloc-text" >
            <p id="title">{{title}}</p>
            <p>
                {{text}}
            </p>
        </div>
        <figure :v-show="altImage ? true : false" v-if="image" class="bloc-image"  :style="positionImgText ? imgRight : imgLeft " >
            <img :src="require('@/assets/photos/'+image)" :alt="image" title=""/>
        </figure>
    </div>
    
</template>

<script>
    export default {
        name:"template-texte-image",
        props:{
            title: String,
            text: String,
            image: String,
            altImage : String,
            positionImgText: Number
        },
        data(){
            return{
                imgLeft:{
                    order: '-1'
                },
                imgRight:{
                    order: '1'
                }
            };
        }
    }

</script>

<style scoped>
    .template-text-image{
        display:flex;
            flex-direction: row;
            align-items: center;
            justify-items: space-around;
        width:100%;
        margin-top:50px;
        margin-bottom:50px;
    }

    p{
        text-align:justify;
    }
    .bloc-text{
        margin:20px;
        width:50%;
        font-size:1.1rem;
        order: 0; /* la valeur est 0 comme ça on peut changer la valeurs de l'autre item (l'image) entre -1 et 1 en fonction de la position voulu */
    }


    .bloc-image{
        margin:20px;
        display:flex;
            justify-content: center;
        width:50%;
        
    }
    .bloc-image img{
        width:100%;
        height:auto;
        border-radius:5px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }

    #title{
        font-weight: bold;
    }

    @media (max-width:1080px){
        .template-text-image{
            display:flex;
                flex-direction: column;
        }
        .bloc-text{
            width:100%;
        }

        .bloc-image{
            display: flex;
                justify-content: center;
            width:100%;
            padding-top:20px;
            padding-bottom:20px;
        }

    }



</style>