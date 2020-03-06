<template>
    <div class="home">
        <div class="link-streaming">
            <a class="apple-music" href="https://geo.music.apple.com/fr/album/velours/1481116204?mt=1&app=music&ls=1" ></a>
            <a class="apple-music-icon" href="https://geo.music.apple.com/fr/album/velours/1481116204?mt=1&app=music&ls=1" ></a>
        </div>
        <div class="img-mouflaquettes">

        </div>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>
    .img-mouflaquettes{
        width:50%;
        height: 400px;
        opacity: 80%;
        background-image: url('~@/assets/mouflaquettes.png');
        background-repeat: no-repeat;
        background-size: auto 150%;
        background-position:bottom;
    }

    .link-streaming .apple-music{
        width:140px;
        height:30px;
        display:inline-block;
        overflow:hidden;
        background-image:url(https://linkmaker.itunes.apple.com/fr-fr/lockup.svg?releaseDate=2019-09-23&kind=album&bubble=apple_music&style=standard-white);
        background-repeat:no-repeat;
        background-size: auto 100%;
    }
    .link-streaming .apple-music-icon{
        width:40px;
        height:40px;
        display:inline-block;
        overflow:hidden;
        background-image:url(https://linkmaker.itunes.apple.com/embed/v1/app-icon.svg);
        background-repeat:no-repeat;
        background-size: auto 100%;
    }
</style>