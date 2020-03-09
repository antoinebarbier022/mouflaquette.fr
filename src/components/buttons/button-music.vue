<template>
    <div class="button-music" @click="lien(link)" :title="title" >
        <div class="button-music-img" :style="{ backgroundImage: `url(${image})`}"></div>
    </div>
</template>

<script>
export default {
    name:"ButtonMusic",
    props: {
        title: String,
        img: String,
        link: String
    },
    computed:{
        image: function(){
            return this.img ? require('@/assets/' + this.img) : require('@/assets/logo.png') ; 
        }
    },
    methods: {
        lien(e){
            if(e == null){
                return false;
            }
            else{
                window.open("https://"+e)
            }
        }
    }
}
</script>

<style scoped>
    .button-music{
        width:100%;
        max-width: 400px;
        min-width: 200px;
        max-height: 30px;
        padding: 8px 0px 8px 0px;
        border:1px transparent solid;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
        background-color:rgba(255, 255, 255, 0.15);
        border-radius: 10px;
        overflow:hidden;
        cursor:pointer;
    }
    .button-music:hover{
        border:1px rgba(255, 255, 255, 0.35) solid;
        background-color:rgba(255, 255, 255, 0.20);
    }

    .button-music-img{
            width:160px;
            height:30px;
            margin:auto;

        background-repeat:no-repeat;
        background-size: auto 30px;
        background-position: center;

    }
</style>