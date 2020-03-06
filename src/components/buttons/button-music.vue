<template>
    <div class="button-music" @click="link" :title="title" >
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
    }
}
</script>

<style scoped>
    .button-music{
        width:300px;
        padding: 5px 10px 5px 10px;
        border:1px transparent solid;
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
        background-size: auto 25px;
        background-position: center;

    }
</style>